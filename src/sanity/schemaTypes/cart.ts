export default {
  name: 'cart',
  title: 'Cart',
  type: 'document',
  fields: [
    {
      name: 'userId',
      title: 'User ID',
      type: 'string',
      description: 'Unique identifier for a user session',
    },
    {
      name: 'Cartitems',
      title: 'Cart Items',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'productId',
              title: 'Product ID',
              type: 'string',
            },
            {
              name: 'name',
              title: 'Product Name',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Product Image',
              type: 'string',
              options: {
                hotspot: true,
              },
            },
            {
              name: 'price',
              title: 'Price',
              type: 'number',
            },
            {
              name: 'rating',
              title: 'Rating',
              type: 'number',
            },
            {
              name: 'quantity',
              title: 'Quantity',
              type: 'number',
            },
            {
              name: 'total',
              title: 'Total Price',
              type: 'number',
            },
          ],
        },
      ],
    },
    {
      name: 'createdAt',
      title: 'Created At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
    {
      name: 'updatedAt',
      title: 'Updated At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    },
  ],
};