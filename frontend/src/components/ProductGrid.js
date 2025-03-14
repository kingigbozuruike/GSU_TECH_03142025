import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaStar, FaStarHalfAlt, FaRegStar } from 'react-icons/fa';
import './ProductGrid.css';

const ProductGrid = ({ products }) => {
  const { addItem } = useCart();
  
  // Render star ratings
  const renderRating = (rating) => {
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<FaStar key={i} />);
      } else if (i - 0.5 <= rating) {
        stars.push(<FaStarHalfAlt key={i} />);
      } else {
        stars.push(<FaRegStar key={i} />);
      }
    }
    
    return stars;
  };
  
  const handleAddToCart = (product) => {
    addItem(product);
  };
  
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product._id} className="product-card">
          <Link to={`/product/${product._id}`} className="product-image">
            <img src={product.image} alt={product.name} />
            {product.discount > 0 && (
              <span className="discount-badge">{product.discount}% OFF</span>
            )}
          </Link>
          
          <div className="product-info">
            <Link to={`/product/${product._id}`} className="product-title">
              {product.name}
            </Link>
            
            <div className="product-price">
              {product.discount > 0 && (
                <span className="original-price">
                  ${(product.price / (1 - product.discount / 100)).toFixed(2)}
                </span>
              )}
              <span className="current-price">${product.price.toFixed(2)}</span>
            </div>
            
            <div className="product-rating">
              <div className="stars">{renderRating(product.rating)}</div>
              <span className="rating-count">
                ({Math.floor(Math.random() * 1000) + 50})
              </span>
            </div>
            
            <button 
              className="add-to-cart-btn"
              onClick={() => handleAddToCart(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;