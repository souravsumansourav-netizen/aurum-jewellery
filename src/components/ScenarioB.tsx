import { Product } from '../data/products';
import { checkAvailability } from '../data/stores';
import StoreCTAs from './StoreCTAs';

type Result = Extract<ReturnType<typeof checkAvailability>, { scenario: 'B' }>;

interface Props {
  result: Result;
  cartProducts: Product[];
}

export default function ScenarioB({ result, cartProducts }: Props) {
  return (
    <div className="space-y-4">

      {/* 100% available store — shown FIRST on top */}
      {result.fullStore && (
        <>
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 h-px bg-gold/20" />
            <span className="font-serif italic text-xs text-gold whitespace-nowrap">Best option — 100% available</span>
            <div className="flex-1 h-px bg-gold/20" />
          </div>
          <div className="bg-gold-light border border-gold/30 p-5">
            <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-gold mb-1">
              All items available · {result.fullStore.distance}
            </p>
            <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium">
              {result.fullStore.name}
            </p>
            <p className="font-sans text-[11px] text-muted mt-1">{result.fullStore.address}</p>
            <div className="mt-4 space-y-2">
              {cartProducts.map(p => (
                <div key={p.id} className="flex items-center gap-2">
                  <span className="text-gold">✓</span>
                  <span className="font-serif text-sm text-charcoal">{p.name}</span>
                </div>
              ))}
            </div>
            <StoreCTAs />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex-1 h-px bg-gold/20" />
            <span className="font-serif italic text-xs text-muted whitespace-nowrap">Or closer, partially available</span>
            <div className="flex-1 h-px bg-gold/20" />
          </div>
        </>
      )}

      {/* Partial store — shown BELOW */}
      <div className="bg-sienna/10 border border-sienna/20 p-5">
        <p className="font-sans text-[9px] tracking-[0.2em] uppercase text-sienna mb-1">
          Partially Available · {result.partialStore.distance}
        </p>
        <p className="font-sans text-[11px] tracking-[0.15em] uppercase text-charcoal font-medium">
          {result.partialStore.name}
        </p>
        <p className="font-sans text-[11px] text-muted mt-1">{result.partialStore.address}</p>
        <div className="mt-4 space-y-2">
          {cartProducts.map(p => {
            const available = result.matched.includes(p.id);
            return (
              <div key={p.id} className="flex items-center gap-2">
                <span className={available ? 'text-gold' : 'text-sienna'}>
                  {available ? '✓' : '✗'}
                </span>
                <span className={`font-serif text-sm ${available ? 'text-charcoal' : 'text-muted line-through'}`}>
                  {p.name}
                </span>
              </div>
            );
          })}
        </div>
        <StoreCTAs />
      </div>

    </div>
  );
}
