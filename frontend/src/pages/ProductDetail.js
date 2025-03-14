import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products, ads } from '../data/mockData';
import AdSlot from '../components/AdSlot';
import './ProductDetail.css';

const ProductDetail = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  
  // Find the product from our mock data
  const product = products.find(p => p._id === productId);
  
  // Related products (same category)
  const relatedProducts = products
    .filter(p => p.category === product?.category && p._id !== productId)
    .slice(0, 4);
    
  // Get a product ad
  const productAds = ads.filter(ad => ad.position === 'product');
  const [currentAd, setCurrentAd] = useState(
    productAds.length > 0 ? productAds[Math.floor(Math.random() * productAds.length)] : null
  );
  
  // Check if product exists
  if (!product) {
    return (
      <div className="product-not-found">
        <h2>Product Not Found</h2>
        <p>Sorry, the product you're looking for doesn't exist.</p>
        <Link to="/" className="back-to-home">Back to Home</Link>
      </div>
    );
  }
  
  // Calculate original price before discount
  const originalPrice = product.discount 
    ? (product.price / (1 - product.discount / 100)).toFixed(2) 
    : null;
  
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
  
  const handleAddToCart = () => {
    addItem({...product, quantity});
  };
  
  return (
    <div className="product-detail-page">
      <div className="product-navigation">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Shopping
        </Link>
      </div>
      
      <div className="product-detail-container">
        <div className="product-image-container">
          <img src={product.image} alt={product.name} className="product-detail-image" />
        </div>
        
        <div className="product-info-container">
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-rating">
            <div className="stars">{renderRating(product.rating)}</div>
            <span className="rating-count">
              ({Math.floor(Math.random() * 1000) + 50} reviews)
            </span>
          </div>
          
          <div className="product-price-container">
            {originalPrice && (
              <span className="original-price">${originalPrice}</span>
            )}
            <span className="current-price">${product.price.toFixed(2)}</span>
            {product.discount > 0 && (
              <span className="discount-badge">{product.discount}% OFF</span>
            )}
          </div>
          
          <div className="product-description">
            <h3>Description</h3>
            <p>{product.description}</p>
          </div>
          
          <div className="product-availability">
            <span className={product.countInStock > 0 ? "in-stock" : "out-of-stock"}>
              {product.countInStock > 0 
                ? `In Stock (${product.countInStock} available)` 
                : 'Out of Stock'}
            </span>
          </div>
          
          <div className="quantity-selector">
            <label htmlFor="quantity">Quantity:</label>
            <div className="quantity-controls">
              <button 
                onClick={() => setQuantity(prev => Math.max(1, prev - 1))}
                disabled={quantity <= 1}
              >
                -
              </button>
              <input 
                type="number" 
                id="quantity" 
                value={quantity} 
                min="1" 
                max={product.countInStock}
                onChange={(e) => setQuantity(Math.min(product.countInStock, Math.max(1, parseInt(e.target.value))))}
              />
              <button 
                onClick={() => setQuantity(prev => Math.min(product.countInStock, prev + 1))}
                disabled={quantity >= product.countInStock}
              >
                +
              </button>
            </div>
          </div>
          
          <button 
            className="add-to-cart-button"
            onClick={handleAddToCart}
            disabled={product.countInStock === 0}
          >
            Add to Cart
          </button>
        </div>
      </div>
      
      {currentAd && (
        <AdSlot
          id={currentAd._id}
          image={currentAd.image}
          alt={currentAd.altText}
          link={currentAd.link}
        />
      )}
      
      <div className="related-products">
        <h2 className="section-title">Related Products</h2>
        <div className="related-products-grid">
          {relatedProducts.map(relatedProduct => (
            <div key={relatedProduct._id} className="related-product-card">
              <Link to={`/product/${relatedProduct._id}`} className="related-product-image">
                <img src={relatedProduct.image} alt={relatedProduct.name} />
              </Link>
              <div className="related-product-info">
                <Link to={`/product/${relatedProduct._id}`} className="related-product-name">
                  {relatedProduct.name}
                </Link>
                <div className="related-product-price">
                  ${relatedProduct.price.toFixed(2)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;