import { useState, useEffect } from 'react';

const CART_KEY = 'aurum_cart';
const SESSION_KEY = 'aurum_session_seen';

export function useCart() {
  const [cart, setCart] = useState<string[]>(() => {
    try {
      return JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    } catch {
      return [];
    }
  });

  // Check returning user synchronously during init — not inside useEffect
  const [isReturningUser, setIsReturningUser] = useState<boolean>(() => {
    try {
      const seen = localStorage.getItem(SESSION_KEY);
      const savedCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      return seen === 'true' && savedCart.length > 0;
    } catch {
      return false;
    }
  });

  // Mark session as seen immediately on mount
  useEffect(() => {
    localStorage.setItem(SESSION_KEY, 'true');
  }, []);

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cart));
  }, [cart]);

  const addToCart = (id: string) => {
    setCart(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item !== id));
  };

  const isInCart = (id: string) => cart.includes(id);

  return { cart, addToCart, removeFromCart, isInCart, isReturningUser, setIsReturningUser };
}
