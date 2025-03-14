import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './AdSlot.css';

const AdSlot = ({ id, image, alt, link }) => {
  // Track ad interactions (in a real app, this would send to analytics)
  const handleAdClick = () => {
    console.log(`Ad clicked: ${id}`);
    // In a real app: trackAdClick(id);
  };
  
  // Log impression when ad is shown
  useEffect(() => {
    console.log(`Ad impression: ${id}`);
    // In a real app: trackAdImpression(id);
  }, [id]);
  
  return (
    <div className="ad-slot" id={`ad-slot-${id}`}>
      <Link to={link} onClick={handleAdClick}>
        <img src={image} alt={alt} />
      </Link>
    </div>
  );
};

export default AdSlot;