'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react'
import { useParams } from 'next/navigation'
import { client } from '@/sanity/lib/client'
import Image from 'next/image'
import { FaHeart, FaExchangeAlt, FaStar } from 'react-icons/fa'
import Header from '@/app/components/header'
import ProductCard from '@/app/handleaddtocart'
interface Review {
  reviewer: string
  rating: number
  comment: string
}

// interface CartItem {
//   image: string;
//   productId: string;
//   _id: string;
//   name: string;
//   price: number;
//   imageUrl: string;
//   quantity: number;
//   rating: number;
// }

 export interface Product {
  _id: string
  name: string
  image: string
  thumbnailImages: string[]
  price: number
  rating: number
  currency: string
  description: string
  keybenefits: string
  benefitsList: string[]
  reviews: Review[]
  category: {
    _id: string
    title: string
  }
  _createdAt: string
  oldPrice?: number
}

interface ReviewFormProps {
  newReview: Review
  setNewReview: React.Dispatch<React.SetStateAction<Review>>
  handleReviewSubmit: () => void
}

const ReviewForm = ({ newReview, setNewReview, handleReviewSubmit }: ReviewFormProps) => {
  return (
    <div className="mb-6">
      <input
        type="text"
        placeholder="Your name"
        value={newReview.reviewer}
        onChange={(e) => setNewReview({ ...newReview, reviewer: e.target.value })}
        className="mb-2 p-2 w-full border rounded"
      />
      <input
        type="number"
        min="1"
        max="5"
        value={newReview.rating}
        onChange={(e) => setNewReview({ ...newReview, rating: Number(e.target.value) })}
        className="mb-2 p-2 w-full border rounded"
      />
      <textarea
        placeholder="Your review"
        value={newReview.comment}
        onChange={(e) => setNewReview({ ...newReview, comment: e.target.value })}
        className="mb-2 p-2 w-full border rounded"
      />
      <button
        onClick={handleReviewSubmit}
        className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600"
      >
        Submit Review
      </button>
    </div>
  )
}

const ShopDetail: React.FC = () => {
  const { slug } = useParams()
  const [product, setProduct] = useState<Product | null>(null)
  const [similarProducts, setSimilarProducts] = useState<Product[]>([])
  const [activeTab, setActiveTab] = useState<'description' | 'reviews'>('description')
  const [quantity, setQuantity] = useState(1)
  const [newReview, setNewReview] = useState<Review>({ reviewer: '', rating: 0, comment: '' })
  const [isLoading, setIsLoading] = useState(true)


  const isAuthenticated = !!document.cookie.split('; ').find(row => row.startsWith('auth_token='));
  const router = useRouter();
  const handleAddToCart = async (product: Product) => {
    if (!isAuthenticated) {
      router.push(`/signin?callbackUrl=${encodeURIComponent(window.location.pathname)}`);
      return;
    }
    try {
      const response = await fetch('/api/cart', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId: product._id,
          name: product.name,
          image: product.image,
          price: product.price,
          rating: product.rating,
          quantity: 1, // Default quantity to 1
        }),
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.error || 'Failed to add to cart');
      }
  
      console.log('Product added successfully:', data);
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };
  

  useEffect(() => {
    const fetchProduct = async () => {
      if (slug) {
        const query = `*[_type == "product" && slug.current == $slug][0]{
          _id,
          name,
          "image": image.asset->url,
          price,
          rating,
          currency,
          "thumbnailImages": thumbnailImages[].asset->url,
          description,
          keybenefits,
          benefitsList,
          reviews,
          _createdAt,
          category->{_id, title},
          oldPrice
        }`;

        const productData = await client.fetch(query, { slug })

        if (productData && !productData.reviews) {
          productData.reviews = []
        }
        setProduct(productData)

        if (productData?.category?._id) {
          const similarQuery = `*[_type == "product" && category._ref == $categoryId]{
            _id,
            name,
            "image": image.asset->url,
            price,
            rating,
            oldPrice
          }`
          const similarData = await client.fetch(similarQuery, {
            categoryId: productData.category._id,
          })

          const filteredSimilarData = similarData.filter(
            (p: Product) => p._id !== productData._id
          )
          setSimilarProducts(filteredSimilarData)
        }

        setIsLoading(false)
      }
    }
    fetchProduct()
  }, [slug])

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="spinner">Loading...</div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div>Product not found</div>
      </div>
    )
  }


  // Add dependencies if needed, e.g., [cartItems]

  const handleReviewSubmit = async () => {
    if (!newReview.reviewer || newReview.rating === 0 || !newReview.comment) {
      alert('All fields are required!')
      return
    }

    try {
      const response = await fetch('/api/review', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          productId: product?._id,
          reviewer: newReview.reviewer,
          rating: newReview.rating,
          comment: newReview.comment,
        }),
      })

      const data = await response.json()
      if (response.ok) {
        setProduct((prev) =>
          prev ? { ...prev, reviews: [...(prev.reviews || []), newReview] } : null
        )
        setNewReview({ reviewer: '', rating: 0, comment: '' })
      } else {
        alert(`Error: ${data.error || 'Something went wrong'}`)
      }
    } catch{
      alert('Error submitting review.')
    }
  }
  return (
    <>
      <Header>
      <div className="absolute inset-0 flex items-center justify-center">
      <p className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold">Home &gt; Our Shop</p>
        </div>
      </Header>

      <div className="mx-20 mb-20 mt-20">
        {/* Product Detail Section */}
        <div className="flex flex-col md:flex-row gap-8">
          <div className="flex flex-col space-y-2 mr-4">
            {product.thumbnailImages?.map((img, index) => (
              img ? (
                <div key={index} className="w-24 h-24 border rounded-md overflow-hidden cursor-pointer">
                  <Image
                  src={img}
                  alt={product.name || "Thumbnail"}
                  width={96}
                  height={96}
                  objectFit="cover"
                  />
                </div>
              ) : null
            ))}
          </div>
          <div className="flex flex-row items-center md:w-1/2">
            <div className="relative w-full h-[400px]">
              {product.image && (
                <Image
                  src={product.image}
                  alt={product.name || 'Product image'}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              )}
            </div>
          </div>

          <div>
            <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
            <p className="text-lg text-orange-500 font-semibold mb-2">
              {product.currency === 'USD' ? '$' : product.currency === 'EUR' ? '€' : '£'}{product.price.toFixed(2)}
              {product.oldPrice && (
                <span className="ml-2 line-through text-gray-500">
                  ${product.oldPrice.toFixed(2)}
                </span>
              )}
            </p>

            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, index) => (
                <FaStar
                  key={index}
                  className={index < product.rating ? 'text-yellow-400' : 'text-gray-300'}
                />
              ))}
              <span className="ml-2 text-sm">({product.reviews?.length || 0} Reviews)</span>
            </div>

            <div className="flex items-center space-x-4 mb-4">
              <button
                onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                className="px-3 py-1 bg-gray-200 rounded"
              >
                -
              </button>
              <span className="px-4 py-1 border rounded">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-1 bg-gray-200 rounded">
                +
              </button>
            </div>

            <div className="flex space-x-4 mb-4">
             
  <ProductCard
    product={product}
    handleAddToCart={() => handleAddToCart(product)}
  />

              <FaHeart className="text-gray-500 cursor-pointer" />
              <FaExchangeAlt className="text-gray-500 cursor-pointer" />
            </div>

            <p className="text-sm text-gray-500">Category: {product.category.title}</p>
            <p className="text-sm text-gray-500">
              Added on: {new Date(product._createdAt).toLocaleDateString()}
            </p>
          </div>
        </div>

        {/* Description / Reviews Tabs */}
        <div className="mt-8">
          <div className="flex space-x-4 border-b pb-2 mb-4">
            <button
              className={`${activeTab === 'description' ? 'font-bold text-orange-500' : 'text-black'
                }`}
              onClick={() => setActiveTab('description')}
            >
              Description
            </button>
            <button
              className={`${activeTab === 'reviews' ? 'font-bold text-orange-500' : 'text-black'
                }`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews ({product.reviews?.length || 0})
            </button>
          </div>

          {activeTab === 'description' ? (
            <div>
              <p>{product.description}</p>
              <p>{product.keybenefits}</p>
              <ul className="list-disc pl-4">
                {product.benefitsList.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              {product.reviews?.map((review, index) => (
                <div key={index} className="mb-4 p-4 border rounded-md">
                  <p className="font-semibold">{review.reviewer}</p>
                  <div className="flex">
                    {[...Array(5)].map((_, starIndex) => (
                      <FaStar
                        key={starIndex}
                        className={
                          starIndex < review.rating ? 'text-yellow-400' : 'text-gray-300'
                        }
                      />
                    ))}
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}
              <ReviewForm
                newReview={newReview}
                setNewReview={setNewReview}
                handleReviewSubmit={handleReviewSubmit}
              />
            </div>
          )}
        </div>

        {/* Similar Products in a 4-column grid */}
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {similarProducts.map((similarProduct) => (
              <div key={similarProduct._id} className="border rounded-md overflow-hidden">
                <div className="relative w-full h-48">
                  <Image
                    src={similarProduct.image}
                    alt={similarProduct.name}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold">{similarProduct.name}</h3>
                  <div className="flex justify-center items-center space-x-2 mt-1">
                    <span className="text-orange-500 font-semibold">
                      ${similarProduct.price.toFixed(2)}
                    </span>
                    {similarProduct.oldPrice && (
                      <span className="line-through text-gray-500">
                        ${similarProduct.oldPrice.toFixed(2)}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
export default ShopDetail