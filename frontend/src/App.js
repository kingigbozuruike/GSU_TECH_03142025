import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//Components
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';
import CategoryPage from './pages/CategoryPage';

import { CartProvider } from './context/CartContext';
function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="app">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/:category" element={<CategoryPage />} />
              <Route path="/product/:id" element={<ProductDetail />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;