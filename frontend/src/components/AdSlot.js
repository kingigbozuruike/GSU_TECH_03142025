import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdSlot.css';

const AdSlot = ({ id, image, alt, link }) => {
  // Log impression when ad is shown (for debugging)
  useEffect(() => {
    console.log(`Ad impression: ${id}, Image: ${image}`);
    // In a real app: trackAdImpression(id);
  }, [id, image]);
  
  // Track ad interactions
  const handleAdClick = () => {
    console.log(`Ad clicked: ${id}`);
    // In a real app: trackAdClick(id);
  };
  
  // Return null if no image or id is provided
  if (!image || !id) {
    console.log("Missing image or id for AdSlot");
    return null;
  }

  return (
    <div className="ad-slot" id={`ad-slot-${id}`}>
      <Link to={link || '#'} onClick={handleAdClick}>
        <img src={image} alt={alt || 'Advertisement'} />
      </Link>
    </div>
  );
};

export default AdSlot;