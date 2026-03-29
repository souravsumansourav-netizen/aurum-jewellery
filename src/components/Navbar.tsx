import { ShoppingBag } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export default function Navbar({ cartCount, onCartClick }: NavbarProps) {
  return (
    <nav className="sticky top-0 z-40 bg-ivory border-b border-gold/20">
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex gap-8 text-xs tracking-[0.2em] text-muted uppercase">
            <span className="cursor-pointer hover:text-charcoal transition-colors">Necklaces</span>
            <span className="cursor-pointer hover:text-charcoal transition-colors">Earrings</span>
          </div>
          <h1 className="font-serif text-3xl font-light tracking-[0.3em] text-charcoal">AURUM</h1>
          <div className="flex items-center gap-8">
            <div className="flex gap-8 text-xs tracking-[0.2em] text-muted uppercase">
              <span className="cursor-pointer hover:text-charcoal transition-colors">Rings</span>
              <span className="cursor-pointer hover:text-charcoal transition-colors">Bangles</span>
            </div>
            <button onClick={onCartClick} className="relative p-1">
              <ShoppingBag size={20} className="text-charcoal" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gold text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-sans">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
