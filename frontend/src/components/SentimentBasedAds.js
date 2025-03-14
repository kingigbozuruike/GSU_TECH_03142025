import React, { useState, useEffect } from 'react';
import AdSlot from './AdSlot';

const SentimentBasedAds = ({ comment, productViewed }) => {
  const [ads, setAds] = useState([]);
  const [loading, setLoading] = useState(false);
  
  useEffect(() => {
    // Only fetch if we have a comment to analyze and user has viewed a product
    if (!comment || !productViewed) return;
    
    const fetchRecommendedAds = async () => {
      setLoading(true);
      try {
        const response = await fetch('/api/recommend-ads', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ comment })
        });
        
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        
        const data = await response.json();
        // Only use the first 3 ads
        setAds(data.ads.slice(0, 3));
      } catch (error) {
        console.error('Error fetching ad recommendations:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchRecommendedAds();
  }, [comment, productViewed]); // Re-run when either changes
  
  if (loading) return <div className="ad-loading">Loading ads...</div>;
  if (!productViewed || ads.length === 0) return null; // Don't show anything if no product viewed
  
  return (
    <div className="sentiment-ads-container">
      {ads.map(ad => (
        <AdSlot 
          key={ad.id}
          id={ad.id}
          image={ad.image}
          alt={ad.title}
          link={`/product/${ad.id}`}
        />
      ))}
    </div>
  );
};

export default SentimentBasedAds;