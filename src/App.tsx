import { useState } from 'react';
import { products } from './data/products';
import { useCart } from './hooks/useCart';
import Navbar from './components/Navbar';
import ProductCard from './components/ProductCard';
import ReturnPopup from './components/ReturnPopup';

export default function App() {
  const { cart, addToCart, isInCart, isReturningUser, setIsReturningUser } = useCart();

  // showPopup initialises directly from isReturningUser — no delay
  const [showPopup, setShowPopup] = useState<boolean>(() => {
    try {
      const seen = localStorage.getItem('aurum_session_seen');
      const savedCart = JSON.parse(localStorage.getItem('aurum_cart') || '[]');
      return seen === 'true' && savedCart.length > 0;
    } catch {
      return false;
    }
  });

  const cartProducts = products.filter(p => cart.includes(p.id));

  return (
    <div className="min-h-screen bg-ivory">
      <Navbar cartCount={cart.length} onCartClick={() => { if (cart.length > 0) setShowPopup(true); }} />

      <main className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center mb-14">
          <p className="font-sans text-[10px] tracking-[0.35em] uppercase text-gold mb-3">The Eternal Collection</p>
          <h2 className="font-serif text-5xl font-light text-charcoal tracking-wide">Timeless Elegance</h2>
          <div className="w-16 h-px bg-gold mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-3 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              inCart={isInCart(product.id)}
              onAdd={addToCart}
            />
          ))}
        </div>
      </main>

      {showPopup && cartProducts.length > 0 && (
        <ReturnPopup
          cartProducts={cartProducts}
          cartIds={cart}
          onClose={() => { setShowPopup(false); setIsReturningUser(false); }}
        />
      )}
    </div>
  );
}
