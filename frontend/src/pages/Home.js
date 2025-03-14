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

  return (
    <div className="home-page">
      <Banner />
      
      {currentTopAd && (
        <AdSlot
          id={currentTopAd._id}
          image={currentTopAd.image}
          alt={currentTopAd.altText}
          link={currentTopAd.link}
        />
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
      
      {currentMiddleAd && (
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
      
      {currentBottomAd && (
        <AdSlot
          id={currentBottomAd._id}
          image={currentBottomAd.image}
          alt={currentBottomAd.altText}
          link={currentBottomAd.link}
        />
      )}
    </div>
  );
};

export default Home;