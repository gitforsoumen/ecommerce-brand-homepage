import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function Hero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-40 lg:pb-32"
      style={{ backgroundColor: 'var(--brand-blue)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            <h1
              className="font-['Playfair_Display'] leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(48px, 8vw, 72px)', fontWeight: 700 }}
            >
              Chef Rod's All-Purpose{' '}
              <span className="italic">Seasoning</span>
            </h1>
            
            <p
              className="mb-8 max-w-[480px] leading-relaxed opacity-95"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.7',
              }}
            >
              Our chef-crafted blend brings restaurant-quality flavor to every meal. 
              Made with premium ingredients and years of culinary expertise, it's the 
              only seasoning your kitchen needs.
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button
                className="px-8 py-4 rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-lg"
                style={{
                  backgroundColor: 'var(--brand-red)',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                }}
              >
                SHOP NOW
              </button>
              
              <button
                className="px-8 py-4 rounded-full font-medium transition-all hover:bg-white/10"
                style={{
                  border: '2px solid white',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                  letterSpacing: '0.5px',
                }}
              >
                LEARN MORE
              </button>
            </div>

            {/* Pagination Dots */}
            <div className="flex gap-2">
              <div
                className="w-2 h-2 rounded-full bg-white"
                aria-label="Slide 1"
              />
              <div
                className="w-2 h-2 rounded-full bg-white/30"
                aria-label="Slide 2"
              />
              <div
                className="w-2 h-2 rounded-full bg-white/30"
                aria-label="Slide 3"
              />
            </div>
          </div>

          {/* Right Column - Product Image */}
          <div className="flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-[500px]">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1760920193193-91dd96af7862?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzZWFzb25pbmclMjBib3R0bGUlMjBwcm9kdWN0JTIwcGhvdG9ncmFwaHklMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjY0OTY3fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chef Rod's All-Purpose Seasoning Product"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
