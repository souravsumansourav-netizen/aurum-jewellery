import { Product } from '../data/products';
import { checkAvailability } from '../data/stores';
import StoreCTAs from './StoreCTAs';

type Result = Extract<ReturnType<typeof checkAvailability>, { scenario: 'A' }>;

interface Props {
  result: Result;
  cartProducts: Product[];
}

export default function ScenarioA({ result, cartProducts }: Props) {
  return (
    <div>
      <div className="bg-emerald text-white text-[10px] tracking-[0.2em] uppercase text-center py-2 mb-6">
        ✓ Available Near You
      </div>
      <h2 className="font-serif italic text-xl font-light text-center text-charcoal mb-6">
        Great news — both items are ready for you.
      </h2>
      <div className="border border-gold/20 bg-white p-5">
        <p className="font-sans text-[11px] tracking-[0.2em] uppercase text-charcoal font-medium">{result.store.name}</p>
        <p className="font-sans text-xs text-muted mt-1">{result.store.distance} away · {result.store.address}</p>
        <div className="mt-4 space-y-2">
          {cartProducts.map(p => (
            <div key={p.id} className="flex items-center gap-2">
              <span className="text-gold text-sm">✓</span>
              <span className="font-serif text-sm text-charcoal">{p.name}</span>
            </div>
          ))}
        </div>
        <StoreCTAs />
      </div>
    </div>
  );
}
