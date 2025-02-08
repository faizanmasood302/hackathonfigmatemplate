'use client';
import { Product } from "./shopdetail/[slug]/page";
// Removed local Product interface declaration to avoid conflict with imported Product interface

interface ProductCardProps {
  product: Product;
  handleAddToCart: (product: Product) => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <button
        onClick={() => handleAddToCart(product)}
        className="bg-orange-500 hover:bg-orange-600 text-white px-6 py-2 rounded"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
