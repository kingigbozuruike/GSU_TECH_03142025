import React, { useState, useEffect } from 'react';
import ProductGrid from '../components/ProductGrid';
import Banner from '../components/Banner';
import AdSlot from '../components/AdSlot';
import { products, ads, banners } from '../data/mockData';
import './Home.css';

const Home = () => {
  // Filter products for different sections
  const featuredProducts = products.filter(product => product.featured).slice(0, 4);
  const dealsProducts = products.filter(product => product.onSale).slice(0, 8);
  const recommendedProducts = products.filter(product => product.recommended).slice(0, 8);
  
  // Get ads for specific positions
  const topAds = ads.filter(ad => ad.position === 'home-top');
  const middleAds = ads.filter(ad => ad.position === 'home-middle');
  const bottomAds = ads.filter(ad => ad.position === 'home-bottom');

  // Get a random banner
  const randomBanner = banners[Math.floor(Math.random() * banners.length)];
  
  // State to track current ads (for rotation)
  const [currentTopAd, setCurrentTopAd] = useState(topAds[0]);
  const [currentMiddleAd, setCurrentMiddleAd] = useState(middleAds[0]);
  const [currentBottomAd, setCurrentBottomAd] = useState(bottomAds[0]);
  
  // Check if user has viewed the TV product
  const [hasViewedTV, setHasViewedTV] = useState(false);
  const [lastViewedProductId, setLastViewedProductId] = useState(null);
  
  // Load view history from localStorage
  useEffect(() => {
    // Check localStorage for product view flags
    const hasViewedProduct = localStorage.getItem('hasViewedProduct') === 'true';
    const productId = localStorage.getItem('lastViewedProductId');
    
    // Only show targeted ad if user viewed the TV product (id: 3)
    setHasViewedTV(hasViewedProduct && productId === '3');
    setLastViewedProductId(productId);
  }, []);
  
  // Rotate ads periodically
  useEffect(() => {
    const rotateAds = () => {
      if (topAds.length > 1) {
        const randomTopAd = topAds[Math.floor(Math.random() * topAds.length)];
        setCurrentTopAd(randomTopAd);
      }
      
      if (middleAds.length > 1) {
        const randomMiddleAd = middleAds[Math.floor(Math.random() * middleAds.length)];
        setCurrentMiddleAd(randomMiddleAd);
      }
      
      if (bottomAds.length > 1) {
        const randomBottomAd = bottomAds[Math.floor(Math.random() * bottomAds.length)];
        setCurrentBottomAd(randomBottomAd);
      }
    };
    
    // Rotate ads every 20 seconds
    const rotationInterval = setInterval(rotateAds, 20000);
    
    return () => clearInterval(rotationInterval);
  }, [topAds, middleAds, bottomAds]);
  
  // Function to clear view history for testing
  const clearViewHistory = () => {
    localStorage.removeItem('hasViewedProduct');
    localStorage.removeItem('lastViewedProductId');
    localStorage.removeItem('lastViewedProductName');
    localStorage.removeItem('productComment');
    setHasViewedTV(false);
    setLastViewedProductId(null);
  };

  return (
    <div className="home-page">
      <Banner />
      
      {/* Show targeted ad only if user viewed the TV */}
      {hasViewedTV && currentTopAd && (
        <div className="targeted-ad-container">
          <div className="targeted-ad-label">Based on your recent viewing</div>
          <AdSlot
            id={currentTopAd._id}
            image={currentTopAd.image}
            alt={currentTopAd.altText}
            link={`/product/${lastViewedProductId}`}
          />
        </div>
      )}
      
      <section className="featured-products">
        <h2 className="section-title">Featured Products</h2>
        <div className="featured-grid">
          {featuredProducts.map(product => (
            <div key={product._id} className="featured-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">${product.price.toFixed(2)}</p>
              <button className="shop-now-btn">Shop Now</button>
            </div>
          ))}
        </div>
      </section>
      
      <section className="deals-section">
        <h2 className="section-title">Today's Deals</h2>
        <ProductGrid products={dealsProducts} />
      </section>
      
      {/* Don't show any ads unless user has viewed the TV */}
      {hasViewedTV && currentMiddleAd && (
        <AdSlot
          id={currentMiddleAd._id}
          image={currentMiddleAd.image}
          alt={currentMiddleAd.altText}
          link={currentMiddleAd.link}
        />
      )}
      
      <section className="recommended-section">
        <h2 className="section-title">Recommended For You</h2>
        <ProductGrid products={recommendedProducts} />
      </section>
      
      {!hasViewedTV && currentBottomAd && (
        <AdSlot
          id={currentBottomAd._id}
          image={currentBottomAd.image}
          alt={currentBottomAd.altText}
          link={currentBottomAd.link}
        />
      )}
      
      {/* Testing controls - hidden in production */}
      {hasViewedTV && (
        <div className="testing-controls">
          <button onClick={clearViewHistory} className="clear-history-btn">
            Clear View History
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;