import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  inCart: boolean;
  onAdd: (id: string) => void;
  onRemove: (id: string) => void;
}

export default function ProductCard({ product, inCart, onAdd, onRemove }: ProductCardProps) {
  return (
    <div className="group relative bg-white border border-gold/20 overflow-hidden">
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
        <div className="mt-3 flex items-center gap-4">
          {!inCart ? (
            <button
              onClick={() => onAdd(product.id)}
              className="text-[10px] tracking-[0.2em] uppercase text-charcoal hover:text-gold border-b border-transparent hover:border-gold pb-0.5 transition-colors"
            >
              Add to Cart
            </button>
          ) : (
            <>
              <span className="text-[10px] tracking-[0.2em] uppercase text-gold">
                ✓ Added
              </span>
              <button
                onClick={() => onRemove(product.id)}
                className="text-[10px] tracking-[0.2em] uppercase text-muted hover:text-sienna border-b border-transparent hover:border-sienna pb-0.5 transition-colors"
              >
                Remove
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
