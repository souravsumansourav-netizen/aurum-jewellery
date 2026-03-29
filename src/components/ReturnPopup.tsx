import { useState } from 'react';
import { X } from 'lucide-react';
import { Product } from '../data/products';
import { checkAvailability } from '../data/stores';
import ScenarioA from './ScenarioA';
import ScenarioB from './ScenarioB';
import ScenarioC from './ScenarioC';

interface ReturnPopupProps {
  cartProducts: Product[];
  cartIds: string[];
  onClose: () => void;
}

type AvailabilityResult = ReturnType<typeof checkAvailability> | null;

export default function ReturnPopup({ cartProducts, cartIds, onClose }: ReturnPopupProps) {
  const [pincode, setPincode] = useState('');
  const [result, setResult] = useState<AvailabilityResult>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleCheck = () => {
    if (pincode.length !== 6 || !/^\d+$/.test(pincode)) {
      setError('Please enter a valid 6-digit PIN code.');
      return;
    }
    setError('');
    setLoading(true);
    setTimeout(() => {
      const res = checkAvailability(pincode, cartIds);
      setResult(res);
      setLoading(false);
    }, 800);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ backgroundColor: 'rgba(26,26,26,0.65)' }}>
      <div className="bg-ivory w-full max-w-lg max-h-[90vh] overflow-y-auto relative rounded-sm">
        <button onClick={onClose} className="absolute top-4 right-4 text-muted hover:text-charcoal z-10">
          <X size={18} />
        </button>
        <div className="px-8 pt-8 pb-6">
          <div className="w-12 h-px bg-gold mx-auto mb-6" />
          {!result ? (
            <>
              <h2 className="font-serif italic text-2xl font-light text-center text-charcoal mb-2">
                Your selections await.
              </h2>
              <p className="font-sans text-xs text-muted text-center tracking-wide leading-relaxed mb-6">
                You left these behind. Shall we help you find them in a store near you?
              </p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {cartProducts.map(p => (
                  <div key={p.id} className="border border-gold/20 bg-white">
                    <img src={p.image} alt={p.name} className="w-full aspect-[3/4] object-cover" />
                    <div className="p-3">
                      <p className="font-serif text-sm font-light text-charcoal leading-snug">{p.name}</p>
                      <p className="font-sans text-[11px] text-muted mt-1">₹{p.price.toLocaleString('en-IN')}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-full h-px bg-gold/20 mb-6" />
              <label className="block font-sans text-[10px] tracking-[0.2em] uppercase text-muted mb-2">
                Enter PIN Code
              </label>
              <input
                type="text"
                maxLength={6}
                value={pincode}
                onChange={e => setPincode(e.target.value)}
                onKeyDown={e => e.key === 'Enter' && handleCheck()}
                placeholder="e.g. 560001"
                className="w-full border border-gold/40 bg-transparent px-4 py-3 font-sans text-sm text-charcoal outline-none focus:border-gold placeholder:text-muted/50"
              />
              {error && <p className="text-sienna text-xs mt-1 font-sans">{error}</p>}
              <button
                onClick={handleCheck}
                disabled={loading}
                className="mt-4 w-full bg-charcoal text-ivory font-sans text-[10px] tracking-[0.25em] uppercase py-4 hover:bg-gold transition-colors disabled:opacity-60"
              >
                {loading ? 'Checking...' : 'Check Store Availability'}
              </button>
            </>
          ) : (
            <>
              {result.scenario === 'A' && <ScenarioA result={result} cartProducts={cartProducts} />}
              {result.scenario === 'B' && <ScenarioB result={result} cartProducts={cartProducts} />}
              {result.scenario === 'C' && <ScenarioC />}
              <button
                onClick={() => setResult(null)}
                className="mt-4 w-full border border-gold/30 text-muted font-sans text-[10px] tracking-[0.2em] uppercase py-3 hover:border-gold hover:text-charcoal transition-colors"
              >
                ← Try Another PIN Code
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
