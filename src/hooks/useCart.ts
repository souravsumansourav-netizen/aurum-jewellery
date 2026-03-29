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

  const [isReturningUser, setIsReturningUser] = useState(false);

  useEffect(() => {
    const seen = localStorage.getItem(SESSION_KEY);
    const savedCart = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
    if (seen === 'true' && savedCart.length > 0) {
      setIsReturningUser(true);
    }
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
