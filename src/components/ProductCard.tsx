import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  inCart: boolean;
  onAdd: (id: string) => void;
  storeBadge?: string;
}

export default function ProductCard({ product, inCart, onAdd, storeBadge }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gold/20 overflow-hidden">
      {storeBadge && (
        <span className="absolute top-3 left-3 z-10 bg-gold text-white text-[9px] tracking-[0.15em] uppercase px-2 py-1">
          {storeBadge}
        </span>
      )}
      <div className="aspect-[3/4] overflow-hidden bg-gray-50">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>
      <div className="p-4">
        <h3 className="font-serif text-base font-light leading-snug text-charcoal">{product.name}</h3>
        <p className="font-sans text-xs text-muted mt-1 tracking-wide">
          ₹{product.price.toLocaleString('en-IN')}
        </p>
        <button
          onClick={() => onAdd(product.id)}
          disabled={inCart}
          className={`mt-3 text-[10px] tracking-[0.2em] uppercase transition-colors ${
            inCart
              ? 'text-gold cursor-default'
              : 'text-charcoal hover:text-gold border-b border-transparent hover:border-gold pb-0.5'
          }`}
        >
          {inCart ? '✓ Added' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
}
