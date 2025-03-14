import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-column">
          <h3>Shop By Department</h3>
          <ul>
            <li>
              <Link to="/category/electronics">Electronics</Link>
            </li>
            <li>
              <Link to="/category/clothing">Clothing</Link>
            </li>
            <li>
              <Link to="/category/home-kitchen">Home & Kitchen</Link>
            </li>
            <li>
              <Link to="/category/books">Books</Link>
            </li>
            <li>
              <Link to="/category/toys">Toys</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Customer Service</h3>
          <ul>
            <li>
              <Link to="/contact">Contact Us</Link>
            </li>
            <li>
              <Link to="/returns">Returns & Replacements</Link>
            </li>
            <li>
              <Link to="/shipping">Shipping Rates & Policies</Link>
            </li>
            <li>
              <Link to="/help">Help</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
              <Link to="/about">About ShopEasy</Link>
            </li>
            <li>
              <Link to="/careers">Careers</Link>
            </li>
            <li>
              <Link to="/investors">Investor Relations</Link>
            </li>
            <li>
              <Link to="/devices">ShopEasy Devices</Link>
            </li>
          </ul>
        </div>
        
        <div className="footer-column">
          <h3>Make Money with Us</h3>
          <ul>
            <li>
              <Link to="/sell">Sell on ShopEasy</Link>
            </li>
            <li>
              <Link to="/advertise">Advertise Your Products</Link>
            </li>
            <li>
              <Link to="/affiliate">Become an Affiliate</Link>
            </li>
            <li>
              <Link to="/publish">Self-Publish with Us</Link>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="copyright">
        &copy; {new Date().getFullYear()} ShopEasy, Inc. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;