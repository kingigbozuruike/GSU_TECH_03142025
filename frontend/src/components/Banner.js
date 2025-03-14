import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import './Banner.css';
import { banners } from '../data/mockData';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef(null);
  
  // Use the banners from mockData instead of props
  const slides = banners;
  
  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };
  
  // Auto-slide every 5 seconds
  useEffect(() => {
    console.log("Setting up auto-slide timer");
    const interval = setInterval(() => {
      if (!isTransitioning) {
        nextSlide();
      }
    }, 5000);
    
    return () => {
      console.log("Clearing timer");
      clearInterval(interval);
    };
  }, [isTransitioning]); // Add isTransitioning as dependency

  return (
    <div className="banner-container">
      <button className="banner-nav prev" onClick={prevSlide}>
        <FaChevronLeft />
      </button>
      
      <div className="banner-slider" onTransitionEnd={handleTransitionEnd}>
        {slides.map((slide, index) => (
          <div 
            key={slide.id} 
            className={`banner-slide ${index === currentSlide ? 'active' : ''}`}
            style={{ 
              transform: `translateX(${(index - currentSlide) * 100}%)`
            }}
          >
            <div className="banner-image-container">
              <img src={slide.image} alt={slide.title} className="banner-image" />
            </div>
            <div className="banner-content">
              <h2>{slide.title}</h2>
              <p>{slide.subtitle}</p>
              {slide.buttonText && slide.buttonLink && (
                <Link to={slide.buttonLink} className="banner-button">
                  {slide.buttonText}
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
      
      <button className="banner-nav next" onClick={nextSlide}>
        <FaChevronRight />
      </button>
      
      <div className="banner-indicators">
        {slides.map((_, index) => (
          <button 
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => {
              if (isTransitioning) return;
              setIsTransitioning(true);
              setCurrentSlide(index);
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;