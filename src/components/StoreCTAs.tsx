export default function StoreCTAs() {
  return (
    <div className="flex gap-3 mt-4">
      <button className="flex-1 border border-gold text-gold font-sans text-[9px] tracking-[0.2em] uppercase py-3 hover:bg-gold hover:text-white transition-colors">
        Talk to an Expert
      </button>
      <button className="flex-1 bg-charcoal text-ivory font-sans text-[9px] tracking-[0.2em] uppercase py-3 hover:bg-gold transition-colors">
        Try at Store
      </button>
    </div>
  );
}
