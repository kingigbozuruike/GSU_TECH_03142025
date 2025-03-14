import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  FaStar, FaStarHalfAlt, FaRegStar, FaArrowLeft, 
  FaShoppingCart, FaHeart, FaCheck, FaTruck, 
  FaBoxOpen, FaShieldAlt, FaThumbsUp, FaThumbsDown
} from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import { products, ads } from '../data/mockData';
import AdSlot from '../components/AdSlot';
import './ProductDetail.css';

// Enhanced TV product data (hardcoded for the television product)
const tvProductData = {
  _id: '3',
  name: 'Ultra HD 4K Smart TV - 55 inch',
  brand: 'TechVision',
  price: 499.99,
  originalPrice: 649.99,
  rating: 4.7,
  image: '/api/placeholder/500/400',
  discount: 20,
  category: 'electronics',
  description: 'Immerse yourself in stunning 4K resolution with this Smart TV featuring built-in streaming apps and voice control.',
  longDescription: `
    Experience entertainment like never before with the TechVision Ultra HD 4K Smart TV. This 55-inch masterpiece delivers breathtaking clarity, vibrant colors, and incredible detail that brings your favorite content to life.
    
    The advanced HDR technology enhances brightness and contrast for a more dynamic picture quality, while the slim bezel design provides a more immersive viewing experience. Built-in voice control allows you to easily search for shows, control playback, and access your favorite streaming apps with simple voice commands.
    
    With its smart platform, you get instant access to thousands of apps including Netflix, Hulu, Prime Video, Disney+, and more. The quad-core processor ensures smooth performance for both streaming and gaming.
  `,
  countInStock: 10,
  featured: true,
  onSale: true,
  recommended: true,
  specs: [
    { name: 'Screen Size', value: '55 inches' },
    { name: 'Resolution', value: '3840 x 2160 (4K UHD)' },
    { name: 'Display Technology', value: 'LED' },
    { name: 'Refresh Rate', value: '120Hz' },
    { name: 'HDR', value: 'Yes, HDR10+' },
    { name: 'Smart TV Platform', value: 'WebOS 6.0' },
    { name: 'Voice Assistant', value: 'Built-in Alexa and Google Assistant' },
    { name: 'Connectivity', value: 'Wi-Fi, Bluetooth, 4x HDMI, 2x USB, Ethernet' },
    { name: 'Audio', value: '20W speakers with Dolby Atmos' },
    { name: 'Dimensions (W x H x D)', value: '48.8" x 28.4" x 2.4" (without stand)' },
    { name: 'Weight', value: '32.6 lbs' },
    { name: 'Warranty', value: '1 Year Manufacturer Warranty' }
  ],
  features: [
    'Crystal clear 4K Ultra HD resolution (3840 x 2160)',
    'Smart TV with voice control capabilities',
    'Built-in streaming apps (Netflix, Hulu, Prime Video, etc.)',
    'HDR technology for enhanced brightness and contrast',
    '120Hz refresh rate ideal for sports and fast-action movies',
    'Multiple HDMI and USB ports for all your devices',
    'Dolby Atmos audio for immersive sound experience',
    'Energy Star certified for energy efficiency',
    'Gaming Mode with reduced input lag',
    'Screen mirroring from compatible smartphones and tablets'
  ],
  additionalImages: [
    'https://m.media-amazon.com/images/I/81zozVZ4BKL.AC_SL1500.jpg',
    'https://m.media-amazon.com/images/I/713-3qnI41L.AC_SX679.jpg',
    'https://m.media-amazon.com/images/I/810dRcKrDIL.AC_SX679.jpg',
    'https://m.media-amazon.com/images/I/71Vx9NQgAlL.AC_SX679.jpg'
  ],
  reviews: [
    {
      id: 'r1',
      userName: 'John Smith',
      rating: 5,
      date: 'January 15, 2023',
      title: 'Amazing picture quality!',
      comment: 'I was skeptical about upgrading to a 4K TV, but the difference is incredible. Colors are vibrant, and the detail is amazing. The smart features work great too, and setup was a breeze.',
      helpful: 42,
      unhelpful: 3,
      verified: true
    },
    {
      id: 'r2',
      userName: 'Sarah Johnson',
      rating: 4,
      date: 'February 3, 2023',
      title: 'Great value for money',
      comment: 'For the price, this TV exceeds expectations. The picture quality is excellent and the smart features work well. The only minor issue is that the sound could be better, but I connected a soundbar and now it\'s perfect.',
      helpful: 28,
      unhelpful: 2,
      verified: true
    },
    {
      id: 'r3',
      userName: 'Michael Davis',
      rating: 5,
      date: 'March 10, 2023',
      title: 'Perfect for gaming',
      comment: 'I bought this TV primarily for gaming on my PS5, and it does not disappoint. The 120Hz refresh rate and low input lag make for a smooth gaming experience. HDR games look spectacular!',
      helpful: 35,
      unhelpful: 1,
      verified: true
    },
    {
      id: 'r4',
      userName: 'Jennifer Wilson',
      rating: 3,
      date: 'April 5, 2023',
      title: 'Good TV but app interface could be better',
      comment: 'The picture and sound quality are good, but the interface for the smart features feels a bit clunky and sometimes lags. If you\'re mainly using external devices like a Roku or Apple TV, this won\'t be an issue for you.',
      helpful: 19,
      unhelpful: 4,
      verified: true
    },
    {
      id: 'r5',
      userName: 'Robert Thompson',
      rating: 5,
      date: 'May 17, 2023',
      title: 'Exceeded my expectations',
      comment: 'This TV has exceeded all my expectations. The 4K picture is crystal clear, and the smart features work flawlessly. I especially love the voice control feature - it\'s so convenient when you can\'t find the remote!',
      helpful: 24,
      unhelpful: 0,
      verified: true
    }
  ]
};

const ProductDetail = () => {
  const { productId } = useParams();
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [reviewFormVisible, setReviewFormVisible] = useState(false);
  const [newReview, setNewReview] = useState({
    rating: 5,
    title: '',
    comment: '',
    userName: ''
  });
  const [userReviews, setUserReviews] = useState([]);
  const [reviewStats, setReviewStats] = useState({
    5: 75,
    4: 15,
    3: 7,
    2: 2,
    1: 1
  });
  
  // Use the hardcoded TV data if the ID matches, otherwise find from products array
  const product = productId === '3' ? tvProductData : products.find(p => p._id === productId);
  
  // Set flag when user views a product - ADD THIS NEW USEEFFECT
  useEffect(() => {
    // Only set the flag if we have a valid product
    if (product) {
      // Set flag to indicate product has been viewed
      localStorage.setItem('hasViewedProduct', 'true');
      
      // Optionally store the specific product info if needed later
      localStorage.setItem('lastViewedProductId', productId);
      localStorage.setItem('lastViewedProductName', product.name);
      
      // For the positive comment demo
      const positiveComment = "I love this product! The quality is excellent and it works perfectly.";
      localStorage.setItem('productComment', positiveComment);
    }
  }, [productId, product]);
  
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
  const originalPrice = product.originalPrice || (product.discount 
    ? (product.price / (1 - product.discount / 100)).toFixed(2) 
    : null);
  
  // Calculate average rating from all reviews
  const calculateAverageRating = () => {
    const combinedReviews = [...(product.reviews || []), ...userReviews];
    if (combinedReviews.length === 0) return product.rating || 0;
    
    const sum = combinedReviews.reduce((total, review) => total + review.rating, 0);
    return sum / combinedReviews.length;
  };
  
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
  
  const handleAddReview = (e) => {
    e.preventDefault();
    
    const review = {
      id: `user-r${Date.now()}`,
      ...newReview,
      date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
      helpful: 0,
      unhelpful: 0,
      verified: true
    };
    
    setUserReviews([review, ...userReviews]);
    setNewReview({
      rating: 5,
      title: '',
      comment: '',
      userName: ''
    });
    setReviewFormVisible(false);
  };
  
  const handleReviewRating = (rating) => {
    setNewReview({...newReview, rating});
  };
  
  const handleHelpfulClick = (reviewId, helpful) => {
    const updatedReviews = [...(product.reviews || [])].map(review => {
      if (review.id === reviewId) {
        return {
          ...review,
          helpful: helpful ? review.helpful + 1 : review.helpful,
          unhelpful: !helpful ? review.unhelpful + 1 : review.unhelpful
        };
      }
      return review;
    });
    
    // Would normally update the product's reviews here through API
    console.log('Updated review helpfulness:', updatedReviews);
  };
  
  // Combine hardcoded reviews with user-submitted reviews
  const allReviews = [...userReviews, ...(product.reviews || [])];
  
  return (
    <div className="product-detail-page">
      <div className="product-navigation">
        <Link to="/" className="back-link">
          <FaArrowLeft /> Back to Shopping
        </Link>
      </div>
      
      <div className="product-detail-container">
        <div className="product-images">
          <div className="main-image">
            <img 
              src='https://m.media-amazon.com/images/I/71Tc306ZIGL.AC_SX679.jpg' 
              alt={product.name} 
              className="product-detail-image"
            />
          </div>
          
          {product.additionalImages && (
            <div className="image-gallery">
              <div 
                className={`thumbnail ${selectedImage === 0 ? 'active' : ''}`}
                onClick={() => setSelectedImage(0)}
              >
                <img src='https://m.media-amazon.com/images/I/61r1mHaKMTL.AC_SL1500.jpg' alt="Main" />
              </div>
              
              {product.additionalImages.map((img, index) => (
                <div 
                  key={index}
                  className={`thumbnail ${selectedImage === index + 1 ? 'active' : ''}`}
                  onClick={() => setSelectedImage(index + 1)}
                >
                  <img src={img} alt={`View ${index + 1}`} />
                </div>
              ))}
            </div>
          )}
        </div>
        
        <div className="product-info-container">
          {product.brand && <p className="product-brand">{product.brand}</p>}
          <h1 className="product-name">{product.name}</h1>
          
          <div className="product-rating-summary">
            <div className="product-rating">
              <div className="stars">{renderRating(calculateAverageRating())}</div>
              <span className="rating-count">
                {allReviews.length} ratings
              </span>
            </div>
            
            {product.category && (
              <span className="product-category">
                in <Link to={`/category/${product.category}`}>{product.category.replace('-', ' & ')}</Link>
              </span>
            )}
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
            <p>{product.description}</p>
          </div>
          
          <div className="product-availability">
            <span className={product.countInStock > 0 ? "in-stock" : "out-of-stock"}>
              {product.countInStock > 0 
                ? <><FaCheck /> In Stock ({product.countInStock} available)</>
                : 'Out of Stock'}
            </span>
          </div>
          
          <div className="delivery-info">
            <div className="delivery-option">
              <FaTruck />
              <div>
                <span className="delivery-title">Fast Delivery</span>
                <span className="delivery-subtitle">Arrives in 2-3 business days</span>
              </div>
            </div>
            
            <div className="delivery-option">
              <FaBoxOpen />
              <div>
                <span className="delivery-title">Easy Returns</span>
                <span className="delivery-subtitle">30-day money-back guarantee</span>
              </div>
            </div>
            
            <div className="delivery-option">
              <FaShieldAlt />
              <div>
                <span className="delivery-title">Warranty</span>
                <span className="delivery-subtitle">1 Year Manufacturer Warranty</span>
              </div>
            </div>
          </div>
          
          <div className="purchase-options">
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
                  onChange={(e) => setQuantity(Math.min(product.countInStock, Math.max(1, parseInt(e.target.value) || 1)))}
                />
                <button 
                  onClick={() => setQuantity(prev => Math.min(product.countInStock, prev + 1))}
                  disabled={quantity >= product.countInStock}
                >
                  +
                </button>
              </div>
            </div>
            
            <div className="action-buttons">
              <button 
                className="add-to-cart-button"
                onClick={handleAddToCart}
                disabled={product.countInStock === 0}
              >
                <FaShoppingCart /> Add to Cart
              </button>
              
              <button className="wishlist-button">
                <FaHeart /> Add to Wishlist
              </button>
            </div>
          </div>
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
      
      <div className="product-details-tabs">
        <div className="tabs-container">
          <div className="tab active">Description</div>
          <div className="tab">Specifications</div>
          <div className="tab">Features</div>
          <div className="tab">Reviews ({allReviews.length})</div>
        </div>
        
        <div className="tab-content">
          <div className="product-long-description">
            <h3>About this item</h3>
            {product.longDescription ? (
              <p>{product.longDescription}</p>
            ) : (
              <p>{product.description}</p>
            )}
          </div>
          
          {product.specs && (
            <div className="product-specifications">
              <h3>Technical Specifications</h3>
              <table className="specs-table">
                <tbody>
                  {product.specs.map((spec, index) => (
                    <tr key={index}>
                      <th>{spec.name}</th>
                      <td>{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {product.features && (
            <div className="product-features">
              <h3>Key Features</h3>
              <ul className="features-list">
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
      
      <div className="product-reviews-section">
        <h2 className="section-title">Customer Reviews</h2>
        
        <div className="reviews-container">
          <div className="reviews-summary">
            <div className="average-rating">
              <div className="big-rating">{calculateAverageRating().toFixed(1)}</div>
              <div className="stars big-stars">{renderRating(calculateAverageRating())}</div>
              <div className="total-reviews">{allReviews.length} reviews</div>
            </div>
            
            <div className="rating-breakdown">
              {[5, 4, 3, 2, 1].map(star => (
                <div className="rating-bar" key={star}>
                  <div className="star-label">{star} star</div>
                  <div className="progress-bar-container">
                    <div 
                      className="progress-bar" 
                      style={{ width: `${reviewStats[star]}%` }}
                    ></div>
                  </div>
                  <div className="percentage">{reviewStats[star]}%</div>
                </div>
              ))}
            </div>
            
            <div className="review-actions">
              <button 
                className="write-review-btn"
                onClick={() => setReviewFormVisible(true)}
              >
                Write a Review
              </button>
            </div>
          </div>
          
          <div className="reviews-list">
            {reviewFormVisible && (
              <div className="review-form-container">
                <h3>Write Your Review</h3>
                <form onSubmit={handleAddReview} className="review-form">
                  <div className="form-group">
                    <label>Your Name</label>
                    <input 
                      type="text" 
                      required
                      value={newReview.userName}
                      onChange={(e) => setNewReview({...newReview, userName: e.target.value})}
                      placeholder="Enter your name"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Rating</label>
                    <div className="rating-selector">
                      {[1, 2, 3, 4, 5].map(star => (
                        <span 
                          key={star}
                          onClick={() => handleReviewRating(star)}
                          className={star <= newReview.rating ? 'active' : ''}
                        >
                          <FaStar />
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label>Review Title</label>
                    <input 
                      type="text" 
                      required
                      value={newReview.title}
                      onChange={(e) => setNewReview({...newReview, title: e.target.value})}
                      placeholder="Summarize your review"
                    />
                  </div>
                  
                  <div className="form-group">
                    <label>Review</label>
                    <textarea 
                      required
                      value={newReview.comment}
                      onChange={(e) => setNewReview({...newReview, comment: e.target.value})}
                      placeholder="Write your review here..."
                      rows={5}
                    ></textarea>
                  </div>
                  
                  <div className="form-actions">
                    <button type="button" onClick={() => setReviewFormVisible(false)}>
                      Cancel
                    </button>
                    <button type="submit" className="submit-review">
                      Submit Review
                    </button>
                  </div>
                </form>
              </div>
            )}
            
            {allReviews.map((review) => (
              <div className="review-card" key={review.id}>
                <div className="review-header">
                  <div className="reviewer-info">
                    <span className="reviewer-name">{review.userName}</span>
                    {review.verified && <span className="verified-badge">Verified Purchase</span>}
                  </div>
                  <div className="review-date">{review.date}</div>
                </div>
                
                <div className="review-rating">
                  <div className="stars">{renderRating(review.rating)}</div>
                  <h4 className="review-title">{review.title}</h4>
                </div>
                
                <div className="review-content">
                  <p>{review.comment}</p>
                </div>
                
                <div className="review-feedback">
                  <span>Was this review helpful?</span>
                  <button 
                    className="helpful-btn"
                    onClick={() => handleHelpfulClick(review.id, true)}
                  >
                    <FaThumbsUp /> Yes ({review.helpful})
                  </button>
                  <button 
                    className="unhelpful-btn"
                    onClick={() => handleHelpfulClick(review.id, false)}
                  >
                    <FaThumbsDown /> No ({review.unhelpful})
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
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
                <div className="related-product-rating">
                  <div className="stars">{renderRating(relatedProduct.rating)}</div>
                  <span className="small-count">({Math.floor(Math.random() * 1000) + 50})</span>
                </div>
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