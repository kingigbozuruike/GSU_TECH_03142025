import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { FaFilter, FaSortAmountDown, FaSortAmountUp } from 'react-icons/fa';
import ProductGrid from '../components/ProductGrid';
import AdSlot from '../components/AdSlot';
import { products, categories, ads } from '../data/mockData';
import './CategoryPage.css';

const CategoryPage = () => {
  const { categoryId } = useParams();
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState({ min: 0, max: 1000 });
  const [sortBy, setSortBy] = useState('featured');
  const [sortOrder, setSortOrder] = useState('desc');
  const [showFilter, setShowFilter] = useState(false);
  
  // Find category
  const category = categories.find(c => c.id === categoryId) || { id: 'all', name: 'All Products' };
  
  // Get category ad
  const categoryAds = ads.filter(ad => ad.position === 'category');
  const [currentAd, setCurrentAd] = useState(
    categoryAds.length > 0 ? categoryAds[Math.floor(Math.random() * categoryAds.length)] : null
  );
  
  // Filter and sort products
  useEffect(() => {
    let filtered = [...products];
    
    // Filter by category
    if (categoryId && categoryId !== 'all') {
      filtered = filtered.filter(product => product.category === categoryId);
    }
    
    // Filter by price range
    filtered = filtered.filter(
      product => product.price >= priceRange.min && product.price <= priceRange.max
    );
    
    // Sort products
    if (sortBy === 'price') {
      filtered.sort((a, b) => {
        return sortOrder === 'asc' ? a.price - b.price : b.price - a.price;
      });
    } else if (sortBy === 'rating') {
      filtered.sort((a, b) => {
        return sortOrder === 'asc' ? a.rating - b.rating : b.rating - a.rating;
      });
    } else {
      // Sort by featured
      filtered.sort((a, b) => {
        return sortOrder === 'asc' 
          ? (a.featured === b.featured ? 0 : a.featured ? -1 : 1)
          : (a.featured === b.featured ? 0 : a.featured ? 1 : -1);
      });
    }
    
    setFilteredProducts(filtered);
  }, [categoryId, priceRange, sortBy, sortOrder]);
  
  // Toggle sort order
  const toggleSortOrder = () => {
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };
  
  return (
    <div className="category-page">
      <div className="category-header">
        <h1>{category.name}</h1>
        <p>{filteredProducts.length} products found</p>
      </div>
      
      {currentAd && (
        <AdSlot
          id={currentAd._id}
          image={currentAd.image}
          alt={currentAd.altText}
          link={currentAd.link}
        />
      )}
      
      <div className="category-controls">
        <button 
          className="filter-toggle-btn"
          onClick={() => setShowFilter(!showFilter)}
        >
          <FaFilter /> Filters
        </button>
        
        <div className="sort-controls">
          <label htmlFor="sort-select">Sort by:</label>
          <select 
            id="sort-select"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
          >
            <option value="featured">Featured</option>
            <option value="price">Price</option>
            <option value="rating">Rating</option>
          </select>
          
          <button 
            className="sort-order-btn"
            onClick={toggleSortOrder}
            title={`Sort ${sortOrder === 'asc' ? 'ascending' : 'descending'}`}
          >
            {sortOrder === 'asc' ? <FaSortAmountUp /> : <FaSortAmountDown />}
          </button>
        </div>
      </div>
      
      <div className="category-content">
        {showFilter && (
          <div className="filter-sidebar">
            <div className="filter-section">
              <h3>Categories</h3>
              <ul className="category-list">
                <li>
                  <Link 
                    to="/category/all" 
                    className={categoryId === 'all' ? 'active' : ''}
                  >
                    All Products
                  </Link>
                </li>
                {categories.map(cat => (
                  <li key={cat.id}>
                    <Link 
                      to={`/category/${cat.id}`} 
                      className={categoryId === cat.id ? 'active' : ''}
                    >
                      {cat.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="filter-section">
              <h3>Price Range</h3>
              <div className="price-range-inputs">
                <input 
                  type="number" 
                  value={priceRange.min} 
                  onChange={(e) => setPriceRange({ ...priceRange, min: parseInt(e.target.value) || 0 })}
                  min="0"
                  placeholder="Min"
                />
                <span>to</span>
                <input 
                  type="number" 
                  value={priceRange.max} 
                  onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) || 0 })}
                  min="0"
                  placeholder="Max"
                />
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={priceRange.max}
                onChange={(e) => setPriceRange({ ...priceRange, max: parseInt(e.target.value) })}
                className="price-range-slider"
              />
            </div>
            
            <div className="filter-section">
              <h3>Availability</h3>
              <div className="checkbox-filter">
                <input type="checkbox" id="in-stock" checked />
                <label htmlFor="in-stock">In Stock</label>
              </div>
              <div className="checkbox-filter">
                <input type="checkbox" id="on-sale" />
                <label htmlFor="on-sale">On Sale</label>
              </div>
            </div>
          </div>
        )}
        
        <div className={`product-content ${showFilter ? 'with-sidebar' : ''}`}>
          {filteredProducts.length > 0 ? (
            <ProductGrid products={filteredProducts} />
          ) : (
            <div className="no-products">
              <p>No products found. Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CategoryPage;