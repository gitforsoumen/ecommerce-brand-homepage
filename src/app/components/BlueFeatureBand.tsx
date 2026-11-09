export function BlueFeatureBand() {
  return (
    <section
      className="py-20 lg:py-28"
      style={{ backgroundColor: 'var(--brand-blue)' }}
    >
      <div className="max-w-[1000px] mx-auto px-6 lg:px-12 text-center">
        <h2
          className="font-['Playfair_Display'] mb-6 text-white"
          style={{
            fontSize: 'clamp(32px, 5vw, 44px)',
            fontWeight: 700,
          }}
        >
          Emphasizing Quality and Sourcing
        </h2>
        
        <p
          className="text-white/95 leading-relaxed max-w-[700px] mx-auto"
          style={{
            fontFamily: 'var(--font-inter)',
            fontSize: '16px',
            lineHeight: '1.8',
          }}
        >
          Every ingredient in our seasonings is carefully selected from trusted 
          suppliers who share our commitment to excellence. We believe that great 
          flavor starts with great ingredients—no fillers, no artificial additives, 
          just pure, premium quality spices that elevate every dish.
        </p>

        {/* Decorative elements */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
          <div className="w-1 h-1 rounded-full bg-white/40" />
        </div>
      </div>
    </section>
  );
}
