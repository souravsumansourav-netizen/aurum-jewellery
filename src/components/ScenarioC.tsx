import StoreCTAs from './StoreCTAs';

const similarProducts = [
  {
    id: 's1',
    name: 'Antique Gold Choker',
    price: 38000,
    image: 'https://images.unsplash.com/photo-1596944924616-7b38e7cfac36?w=400&h=533&fit=crop',
  },
  {
    id: 's2',
    name: 'Jhumka Drop Earrings',
    price: 22000,
    image: 'https://images.unsplash.com/photo-1630019852942-f89202989a59?w=400&h=533&fit=crop',
  },
  {
    id: 's3',
    name: 'Floral Diamond Ring',
    price: 55000,
    image: 'https://images.unsplash.com/photo-1605100804763-247f67b3557e?w=400&h=533&fit=crop',
  },
  {
    id: 's4',
    name: 'Gold Kada Bracelet',
    price: 41000,
    image: 'https://images.unsplash.com/photo-1611652022419-a9419f74343d?w=400&h=533&fit=crop',
  },
];

export default function ScenarioC() {
  return (
    <div>
      <div className="bg-sienna text-white text-[10px] tracking-[0.2em] uppercase text-center py-2 mb-6">
        Not Available in Your City
      </div>
      <h2 className="font-serif italic text-xl font-light text-center text-charcoal mb-2">
        You might also love these.
      </h2>
      <p className="font-sans text-xs text-muted text-center mb-6 leading-relaxed">
        Available at our nearest store — curated just for you.
      </p>
      <div className="grid grid-cols-2 gap-3 mb-6">
        {similarProducts.map(p => (
          <div key={p.id} className="border border-gold/20 bg-white relative">
            <span className="absolute top-2 left-2 bg-gold text-white text-[8px] tracking-[0.12em] uppercase px-2 py-0.5">
              Aurum MG Road
            </span>
            <img src={p.image} alt={p.name} className="w-full aspect-[3/4] object-cover" />
            <div className="p-3">
              <p className="font-serif text-sm font-light text-charcoal">{p.name}</p>
              <p className="font-sans text-[11px] text-muted mt-1">₹{p.price.toLocaleString('en-IN')}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full h-px bg-gold/20 mb-4" />
      <p className="font-sans text-[10px] tracking-[0.2em] uppercase text-center text-charcoal mb-1">
        AURUM — MG ROAD
      </p>
      <p className="font-sans text-xs text-muted text-center">MG Road, Bengaluru · 4.1 km away</p>
      <StoreCTAs />
    </div>
  );
}
