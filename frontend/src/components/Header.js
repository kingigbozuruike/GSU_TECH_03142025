import React, { useState, useRef, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { FaSearch, FaShoppingCart, FaUser, FaHistory, FaTimesCircle } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggestions, setShowSuggestions] = useState(false);
  const { totalItems } = useCart();
  const navigate = useNavigate();
  const searchRef = useRef(null);
  
  // Hardcoded search history
  const searchHistory = [
    'Wireless headphones',
    'Smart watch',
    'Coffee maker',
    'Robot vacuum',
    'Bluetooth speaker',
    'Gaming mouse',
    'Fitness tracker'
  ];
  
  // Categories for the navigation
  const categories = [
    { id: 'electronics', name: 'Electronics' },
    { id: 'clothing', name: 'Clothing' },
    { id: 'home-kitchen', name: 'Home & Kitchen' },
    { id: 'books', name: 'Books' },
    { id: 'toys', name: 'Toys' },
    { id: 'deals', name: 'Deals' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setShowSuggestions(false);
    }
  };
  
  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion);
    navigate(`/search?q=${encodeURIComponent(suggestion)}`);
    setShowSuggestions(false);
  };
  
  const clearSearch = () => {
    setSearchQuery('');
    if (searchRef.current) {
      searchRef.current.focus();
    }
  };
  
  // Close suggestions when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setShowSuggestions(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="header">
      <div className="top-bar">
        <Link to="/" className="logo">
          gramzon
        </Link>
        
        <div className="search-bar" ref={searchRef}>
          <form onSubmit={handleSearch}>
            <div className="search-input-container">
              <input
                type="text"
                placeholder="Search for products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
              />
              {searchQuery && (
                <button type="button" className="clear-search" onClick={clearSearch}>
                  <FaTimesCircle />
                </button>
              )}
            </div>
            <button type="submit">
              <FaSearch />
            </button>
          </form>
          
          {showSuggestions && (
            <div className="search-suggestions">
              <div className="search-history">
                <div className="history-header">
                  <FaHistory /> <span>Recent Searches</span>
                </div>
                <ul>
                  {searchHistory.map((item, index) => (
                    <li key={index} onClick={() => handleSuggestionClick(item)}>
                      <FaHistory className="history-icon" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>
        
        <div className="user-actions">
          <Link to="/login" className="account">
            <FaUser />
            <span>Account</span>
          </Link>
          <Link to="/cart" className="cart">
            <FaShoppingCart />
            <span>Cart</span>
            {totalItems > 0 && <span className="cart-count">{totalItems}</span>}
          </Link>
        </div>
      </div>
      
      <nav className="main-nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          {categories.map(category => (
            <li key={category.id}>
              <Link to={`/category/${category.id}`}>{category.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Header;