import { NextRequest, NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
import { client } from '@/sanity/lib/client';
import { cookies } from 'next/headers';

export async function POST(req: NextRequest) {
  try {
    const { productId, image, name, price, rating, quantity } = await req.json();

    if (!productId || !image || !name || !price || !rating || !quantity) {
      return NextResponse.json({ error: 'Missing product data' }, { status: 400 });
    }

    let userId = (await cookies()).get('user-id')?.value;
    if (!userId) {
      userId = uuidv4();
      (await cookies()).set('user-id', userId, { httpOnly: true, path: '/' });
    }

    // Fetch existing cart
    const query = `*[_type == "cart" && userId == $userId][0]`;
    const existingCart = await client.fetch(query, { userId });

    if (existingCart) {
      // Check if the product is already in the cart
      const existingItemIndex = existingCart.Cartitems?.findIndex(
        (item: { productId: string }) => item.productId === productId
      );

      if (existingItemIndex !== -1) {
        // Product exists, update the quantity
        existingCart.Cartitems[existingItemIndex].quantity += quantity;
        existingCart.Cartitems[existingItemIndex].total =
          existingCart.Cartitems[existingItemIndex].price *
          existingCart.Cartitems[existingItemIndex].quantity;

        await client
          .patch(existingCart._id)
          .set({ Cartitems: existingCart.Cartitems }) // Update cart items
          .commit();
      } else {
        // Product does not exist, add it as a new item
        const newItem = {
          _key: uuidv4(),
          productId,
          image,
          name,
          price,
          rating,
          quantity,
          total: price * quantity,
        };

        await client
          .patch(existingCart._id)
          .setIfMissing({ Cartitems: [] })
          .insert('after', 'Cartitems[-1]', [newItem])
          .commit();
      }
    } else {
      // If the cart doesn't exist, create a new one
      const newCart = {
        _type: 'cart',
        userId,
        Cartitems: [
          {
            _key: uuidv4(),
            productId,
            image,
            name,
            price,
            rating,
            quantity,
            total: price * quantity,
          },
        ],
      };

      await client.create(newCart);
    }

    return NextResponse.json({ message: 'Product added to cart successfully' });
  } catch (error) {
    console.error("Error adding product to cart:", error);
    return NextResponse.json({ error: 'Failed to add product to cart' }, { status: 500 });
  }
}

export async function GET(req: NextRequest) {
  try {
    const userId = (await cookies()).get('user-id')?.value;

    if (!userId) {
      return NextResponse.json({ cart: [] });
    }

    const query = `*[_type == "cart" && userId == $userId][0]`;
    const cartData = await client.fetch(query, { userId });

    return NextResponse.json({ cart: cartData?.Cartitems || [] });
  } catch (error) {
    console.error("Error fetching cart data:", error);
    return NextResponse.json({ error: 'Failed to fetch cart data' }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { key } = await req.json();
    const userId = (await cookies()).get('user-id')?.value;

    if (!userId) {
      return NextResponse.json({ error: 'User not found' }, { status: 400 });
    }

    // Fetch existing cart
    const query = `*[_type == "cart" && userId == $userId][0]`;
    const existingCart = await client.fetch(query, { userId });

    if (existingCart) {
      // Remove the item from the cart
      const updatedCartItems = existingCart.Cartitems.filter(
        (item: { _key: string }) => item._key !== key
      );

      await client
        .patch(existingCart._id)
        .set({ Cartitems: updatedCartItems })
        .commit();

      return NextResponse.json({ message: 'Product removed from cart successfully' });
    } else {
      return NextResponse.json({ error: 'Cart not found' }, { status: 404 });
    }
  } catch (error) {
    console.error("Error removing product from cart:", error);
    return NextResponse.json({ error: 'Failed to remove product from cart' }, { status: 500 });
  }
}
