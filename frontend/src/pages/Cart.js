import React from 'react';
import { Link } from 'react-router-dom';
import { FaArrowLeft, FaTrash } from 'react-icons/fa';
import { useCart } from '../context/CartContext';
import './Cart.css';

const Cart = () => {
  const { items, totalItems, totalAmount, addItem, removeItem, deleteItem, clearCart } = useCart();
  
  if (items.length === 0) {
    return (
      <div className="cart-page empty-cart">
        <h1>Your Shopping Cart</h1>
        <div className="empty-cart-message">
          <p>Your cart is currently empty.</p>
          <p>Browse our products and add items to your cart.</p>
          <Link to="/" className="continue-shopping-btn">
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1>Your Shopping Cart</h1>
        <p>{totalItems} {totalItems === 1 ? 'item' : 'items'}</p>
      </div>
      
      <div className="cart-content">
        <div className="cart-items">
          {items.map(item => (
            <div key={item._id} className="cart-item">
              <div className="item-image">
                <Link to={`/product/${item._id}`}>
                  <img src={item.image} alt={item.name} />
                </Link>
              </div>
              
              <div className="item-details">
                <Link to={`/product/${item._id}`} className="item-name">
                  {item.name}
                </Link>
                <div className="item-price">${item.price.toFixed(2)}</div>
                
                <div className="item-controls">
                  <div className="quantity-control">
                    <button 
                      onClick={() => removeItem(item._id)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity">{item.quantity}</span>
                    <button 
                      onClick={() => addItem(item)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                  
                  <button 
                    className="remove-item-btn"
                    onClick={() => deleteItem(item._id)}
                  >
                    <FaTrash /> Remove
                  </button>
                </div>
              </div>
              
              <div className="item-total">
                ${(item.price * item.quantity).toFixed(2)}
              </div>
            </div>
          ))}
        </div>
        
        <div className="cart-summary">
          <h2>Order Summary</h2>
          
          <div className="summary-line">
            <span>Subtotal</span>
            <span>${totalAmount.toFixed(2)}</span>
          </div>
          
          <div className="summary-line">
            <span>Shipping</span>
            <span>Free</span>
          </div>
          
          <div className="summary-line">
            <span>Tax</span>
            <span>${(totalAmount * 0.1).toFixed(2)}</span>
          </div>
          
          <div className="summary-line total">
            <span>Total</span>
            <span>${(totalAmount + (totalAmount * 0.1)).toFixed(2)}</span>
          </div>
          
          <button className="checkout-btn">
            Proceed to Checkout
          </button>
          
          <div className="cart-actions">
            <Link to="/" className="continue-shopping">
              <FaArrowLeft /> Continue Shopping
            </Link>
            
            <button 
              className="clear-cart-btn"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;