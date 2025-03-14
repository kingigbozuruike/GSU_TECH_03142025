import React, { createContext, useReducer, useContext, useEffect } from 'react';

// Create the cart context
const CartContext = createContext();

// Initial state
const initialState = {
  items: [],
  totalItems: 0,
  totalAmount: 0,
};

// Reducer to handle cart actions
function cartReducer(state, action) {
  switch (action.type) {
    case 'ADD_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload._id
      );

      let updatedItems;

      if (existingItemIndex >= 0) {
        // Item exists, update quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity + 1,
        };
      } else {
        // Add new item
        updatedItems = [...state.items, { ...action.payload, quantity: 1 }];
      }

      const totalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify({
        items: updatedItems,
        totalItems,
        totalAmount
      }));

      return {
        items: updatedItems,
        totalItems,
        totalAmount,
      };
    }

    case 'REMOVE_ITEM': {
      const existingItemIndex = state.items.findIndex(
        (item) => item._id === action.payload
      );

      if (existingItemIndex < 0) return state;

      let updatedItems;

      if (state.items[existingItemIndex].quantity === 1) {
        // Remove item if quantity is 1
        updatedItems = state.items.filter((item) => item._id !== action.payload);
      } else {
        // Decrease quantity
        updatedItems = [...state.items];
        updatedItems[existingItemIndex] = {
          ...updatedItems[existingItemIndex],
          quantity: updatedItems[existingItemIndex].quantity - 1,
        };
      }

      const totalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify({
        items: updatedItems,
        totalItems,
        totalAmount
      }));

      return {
        items: updatedItems,
        totalItems,
        totalAmount,
      };
    }

    case 'DELETE_ITEM': {
      const updatedItems = state.items.filter((item) => item._id !== action.payload);
      
      const totalItems = updatedItems.reduce((total, item) => total + item.quantity, 0);
      const totalAmount = updatedItems.reduce(
        (total, item) => total + item.price * item.quantity,
        0
      );

      // Save to localStorage
      localStorage.setItem('cart', JSON.stringify({
        items: updatedItems,
        totalItems,
        totalAmount
      }));

      return {
        items: updatedItems,
        totalItems,
        totalAmount,
      };
    }

    case 'CLEAR_CART': {
      // Clear localStorage
      localStorage.removeItem('cart');
      
      return initialState;
    }

    case 'LOAD_CART': {
      return action.payload;
    }

    default:
      return state;
  }
}

// Context Provider component
export function CartProvider({ children }) {
  const [cartState, dispatch] = useReducer(cartReducer, initialState);

  useEffect(() => {
    // Load cart from localStorage on initial render
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    if (savedCart) {
      dispatch({ type: 'LOAD_CART', payload: savedCart });
    }
  }, []);

  // Actions
  const addItem = (product) => {
    dispatch({ type: 'ADD_ITEM', payload: product });
  };

  const removeItem = (productId) => {
    dispatch({ type: 'REMOVE_ITEM', payload: productId });
  };

  const deleteItem = (productId) => {
    dispatch({ type: 'DELETE_ITEM', payload: productId });
  };

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' });
  };

  return (
    <CartContext.Provider
      value={{
        items: cartState.items,
        totalItems: cartState.totalItems,
        totalAmount: cartState.totalAmount,
        addItem,
        removeItem,
        deleteItem,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

// Custom hook to use the cart context
export function useCart() {
  return useContext(CartContext);
}