import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingBag, FaHeart, FaAddressCard, FaCreditCard, FaBell, FaSignOutAlt } from 'react-icons/fa';
import './UserProfile.css';
import avatar from '../images/image.png';

const UserProfile = () => {
  // Hardcoded user data
  const user = {
    id: '1',
    name: 'Sari Chappelman',
    email: 'chappelman@example.com',
    phone: '+1 (555) 123-4567',
    joinDate: 'January 15, 2022',
    avatar: avatar,
    address: {
      street: '123 Main Street',
      city: 'New York',
      state: 'NY',
      zipCode: '10001',
      country: 'United States'
    },
    paymentMethods: [
      { id: 'pm1', type: 'Visa', last4: '4242', expiry: '05/25' },
      { id: 'pm2', type: 'Mastercard', last4: '5555', expiry: '08/24' }
    ]
  };

  // Recent orders data
  const recentOrders = [
    {
      id: 'ORD-12345',
      date: 'March 10, 2023',
      total: 249.99,
      status: 'Delivered',
      items: [
        { name: 'Wireless Headphones', quantity: 1, price: 199.99 },
        { name: 'Phone Charger', quantity: 1, price: 49.99 }
      ]
    },
    {
      id: 'ORD-12346',
      date: 'February 22, 2023',
      total: 129.99,
      status: 'Delivered',
      items: [
        { name: 'Coffee Maker', quantity: 1, price: 129.99 }
      ]
    },
    {
      id: 'ORD-12347',
      date: 'January 15, 2023',
      total: 539.97,
      status: 'Delivered',
      items: [
        { name: 'Smart Watch', quantity: 1, price: 149.99 },
        { name: 'Bluetooth Speaker', quantity: 1, price: 79.99 },
        { name: 'Ultra HD 4K Smart TV', quantity: 1, price: 309.99 }
      ]
    }
  ];

  // Wishlist data
  const wishlist = [
    { id: 'w1', name: 'Robot Vacuum Cleaner', price: 249.99, image: 'https://www.sencor.com/Sencor/media/static-media/964845f4-6f01-4c62-b435-50cba5aa77a4@w800.webp' },
    { id: 'w2', name: 'Wireless Earbuds', price: 89.99, image: 'https://iliveelectronics.com/media/catalog/product/cache/f06582b552fadabcfc537d3db732c68e/i/a/iaebtw53b-v3048-main_copy.jpg' },
    { id: 'w3', name: 'Digital Camera', price: 699.99, image: 'https://hotrodcameras.com/cdn/shop/products/1505226180000_1361560_1__36541_500x500.jpg?v=1684605477' }
  ];

  // State for active tab
  const [activeTab, setActiveTab] = useState('overview');

  return (
    <div className="user-profile-page">
      <div className="profile-header">
        <div className="user-info">
          <div className="user-avatar">
            <img src={user.avatar} alt={user.name} />
          </div>
          <div className="user-details">
            <h1>{user.name}</h1>
            <p className="user-since">Member since {user.joinDate}</p>
          </div>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-sidebar">
          <ul className="profile-nav">
            <li className={activeTab === 'overview' ? 'active' : ''}>
              <button onClick={() => setActiveTab('overview')}>
                <FaUser /> Overview
              </button>
            </li>
            <li className={activeTab === 'orders' ? 'active' : ''}>
              <button onClick={() => setActiveTab('orders')}>
                <FaShoppingBag /> Orders
              </button>
            </li>
            <li className={activeTab === 'wishlist' ? 'active' : ''}>
              <button onClick={() => setActiveTab('wishlist')}>
                <FaHeart /> Wishlist
              </button>
            </li>
            <li className={activeTab === 'addresses' ? 'active' : ''}>
              <button onClick={() => setActiveTab('addresses')}>
                <FaAddressCard /> Addresses
              </button>
            </li>
            <li className={activeTab === 'payment' ? 'active' : ''}>
              <button onClick={() => setActiveTab('payment')}>
                <FaCreditCard /> Payment Methods
              </button>
            </li>
            <li className={activeTab === 'notifications' ? 'active' : ''}>
              <button onClick={() => setActiveTab('notifications')}>
                <FaBell /> Notifications
              </button>
            </li>
          </ul>
          <div className="logout-button">
            <button>
              <FaSignOutAlt /> Logout
            </button>
          </div>
        </div>

        <div className="profile-main">
          {activeTab === 'overview' && (
            <div className="profile-section">
              <h2 className="section-title">Account Overview</h2>
              
              <div className="account-summary">
                <div className="info-card">
                  <h3>Personal Information</h3>
                  <div className="info-group">
                    <label>Name:</label>
                    <p>{user.name}</p>
                  </div>
                  <div className="info-group">
                    <label>Email:</label>
                    <p>{user.email}</p>
                  </div>
                  <div className="info-group">
                    <label>Phone:</label>
                    <p>{user.phone}</p>
                  </div>
                  <button className="edit-btn">Edit</button>
                </div>
                
                <div className="info-card">
                  <h3>Default Shipping Address</h3>
                  <p>{user.address.street}</p>
                  <p>{user.address.city}, {user.address.state} {user.address.zipCode}</p>
                  <p>{user.address.country}</p>
                  <button className="edit-btn">Edit</button>
                </div>
                
                <div className="info-card">
                  <h3>Default Payment Method</h3>
                  <p>{user.paymentMethods[0].type} ending in {user.paymentMethods[0].last4}</p>
                  <p>Expires: {user.paymentMethods[0].expiry}</p>
                  <button className="edit-btn">Edit</button>
                </div>
              </div>
              
              <div className="recent-orders">
                <div className="section-header">
                  <h3>Recent Orders</h3>
                  <button className="view-all-btn" onClick={() => setActiveTab('orders')}>
                    View All
                  </button>
                </div>
                
                <div className="orders-list">
                  {recentOrders.slice(0, 2).map(order => (
                    <div className="order-card" key={order.id}>
                      <div className="order-header">
                        <div>
                          <span className="order-id">{order.id}</span>
                          <span className="order-date">{order.date}</span>
                        </div>
                        <span className={`order-status ${order.status.toLowerCase()}`}>
                          {order.status}
                        </span>
                      </div>
                      
                      <div className="order-items">
                        {order.items.map((item, index) => (
                          <div className="order-item" key={index}>
                            <span>{item.name} x{item.quantity}</span>
                            <span>${item.price.toFixed(2)}</span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="order-footer">
                        <span className="order-total">Total: ${order.total.toFixed(2)}</span>
                        <button className="details-btn">Details</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="wishlist-preview">
                <div className="section-header">
                  <h3>Wishlist</h3>
                  <button className="view-all-btn" onClick={() => setActiveTab('wishlist')}>
                    View All
                  </button>
                </div>
                
                <div className="wishlist-items">
                  {wishlist.slice(0, 3).map(item => (
                    <div className="wishlist-item" key={item.id}>
                      <img src={item.image} alt={item.name} />
                      <div className="wishlist-item-info">
                        <p className="item-name">{item.name}</p>
                        <p className="item-price">${item.price.toFixed(2)}</p>
                      </div>
                      <button className="add-to-cart-btn">Add to Cart</button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'orders' && (
            <div className="profile-section">
              <h2 className="section-title">Your Orders</h2>
              
              <div className="orders-filter">
                <select defaultValue="all">
                  <option value="all">All Orders</option>
                  <option value="delivered">Delivered</option>
                  <option value="processing">Processing</option>
                  <option value="cancelled">Cancelled</option>
                </select>
              </div>
              
              <div className="orders-list full-list">
                {recentOrders.map(order => (
                  <div className="order-card" key={order.id}>
                    <div className="order-header">
                      <div>
                        <span className="order-id">{order.id}</span>
                        <span className="order-date">{order.date}</span>
                      </div>
                      <span className={`order-status ${order.status.toLowerCase()}`}>
                        {order.status}
                      </span>
                    </div>
                    
                    <div className="order-items">
                      {order.items.map((item, index) => (
                        <div className="order-item" key={index}>
                          <span>{item.name} x{item.quantity}</span>
                          <span>${item.price.toFixed(2)}</span>
                        </div>
                      ))}
                    </div>
                    
                    <div className="order-footer">
                      <span className="order-total">Total: ${order.total.toFixed(2)}</span>
                      <div className="order-actions">
                        <button className="details-btn">Details</button>
                        <button className="track-btn">Track Order</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'wishlist' && (
            <div className="profile-section">
              <h2 className="section-title">Your Wishlist</h2>
              
              <div className="wishlist-grid">
                {wishlist.map(item => (
                  <div className="wishlist-card" key={item.id}>
                    <div className="wishlist-image">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="wishlist-details">
                      <h3>{item.name}</h3>
                      <p className="wishlist-price">${item.price.toFixed(2)}</p>
                      <div className="wishlist-actions">
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="remove-btn">Remove</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {activeTab === 'addresses' && (
            <div className="profile-section">
              <h2 className="section-title">Your Addresses</h2>
              
              <div className="addresses-grid">
                <div className="address-card default">
                  <div className="address-badge">Default</div>
                  <h3>Home</h3>
                  <p>{user.name}</p>
                  <p>{user.address.street}</p>
                  <p>{user.address.city}, {user.address.state} {user.address.zipCode}</p>
                  <p>{user.address.country}</p>
                  <p>{user.phone}</p>
                  <div className="address-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="remove-btn" disabled>Remove</button>
                  </div>
                </div>
                
                <div className="address-card">
                  <h3>Work</h3>
                  <p>{user.name}</p>
                  <p>456 Office Park</p>
                  <p>New York, NY 10002</p>
                  <p>United States</p>
                  <p>{user.phone}</p>
                  <div className="address-actions">
                    <button className="edit-btn">Edit</button>
                    <button className="remove-btn">Remove</button>
                    <button className="default-btn">Set as Default</button>
                  </div>
                </div>
                
                <div className="address-card add-new">
                  <div className="add-address">
                    <div className="plus-icon">+</div>
                    <p>Add New Address</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'payment' && (
            <div className="profile-section">
              <h2 className="section-title">Payment Methods</h2>
              
              <div className="payment-methods-grid">
                {user.paymentMethods.map((method, index) => (
                  <div className={`payment-card ${index === 0 ? 'default' : ''}`} key={method.id}>
                    {index === 0 && <div className="payment-badge">Default</div>}
                    <div className="card-type">{method.type}</div>
                    <div className="card-number">•••• •••• •••• {method.last4}</div>
                    <div className="card-expiry">Expires: {method.expiry}</div>
                    <div className="payment-actions">
                      <button className="edit-btn">Edit</button>
                      <button className="remove-btn" disabled={index === 0}>Remove</button>
                      {index !== 0 && (
                        <button className="default-btn">Set as Default</button>
                      )}
                    </div>
                  </div>
                ))}
                
                <div className="payment-card add-new">
                  <div className="add-payment">
                    <div className="plus-icon">+</div>
                    <p>Add New Payment Method</p>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {activeTab === 'notifications' && (
            <div className="profile-section">
              <h2 className="section-title">Notification Preferences</h2>
              
              <div className="notifications-settings">
                <div className="notification-group">
                  <h3>Email Notifications</h3>
                  
                  <div className="notification-setting">
                    <label className="toggle">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <div className="notification-info">
                      <h4>Order Updates</h4>
                      <p>Receive updates about your orders, shipping, and delivery</p>
                    </div>
                  </div>
                  
                  <div className="notification-setting">
                    <label className="toggle">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <div className="notification-info">
                      <h4>Promotions</h4>
                      <p>Stay updated on sales, discounts, and special offers</p>
                    </div>
                  </div>
                  
                  <div className="notification-setting">
                    <label className="toggle">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <div className="notification-info">
                      <h4>Product Recommendations</h4>
                      <p>Get personalized product recommendations based on your browsing history</p>
                    </div>
                  </div>
                </div>
                
                <div className="notification-group">
                  <h3>Mobile Notifications</h3>
                  
                  <div className="notification-setting">
                    <label className="toggle">
                      <input type="checkbox" defaultChecked />
                      <span className="slider"></span>
                    </label>
                    <div className="notification-info">
                      <h4>Order Updates</h4>
                      <p>Receive push notifications about your orders</p>
                    </div>
                  </div>
                  
                  <div className="notification-setting">
                    <label className="toggle">
                      <input type="checkbox" />
                      <span className="slider"></span>
                    </label>
                    <div className="notification-info">
                      <h4>Promotions</h4>
                      <p>Get push notifications for deals and promotions</p>
                    </div>
                  </div>
                </div>
                
                <button className="save-preferences-btn">Save Preferences</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserProfile;