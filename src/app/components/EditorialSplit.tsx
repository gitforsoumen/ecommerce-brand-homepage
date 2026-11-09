import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function EditorialSplit() {
  return (
    <section className="bg-white">
      <div className="grid lg:grid-cols-2">
        {/* Left Panel - Text */}
        <div className="flex items-center justify-center py-20 lg:py-32 px-6 lg:px-16">
          <div className="max-w-[500px]">
            <h2
              className="font-['Playfair_Display'] mb-6"
              style={{
                fontSize: 'clamp(36px, 5vw, 48px)',
                fontWeight: 700,
                color: 'var(--brand-dark)',
                lineHeight: '1.2',
              }}
            >
              Passion in Every Blend
            </h2>
            
            <p
              className="mb-6 leading-relaxed text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              For over two decades, Chef Rod has been perfecting the art of 
              flavor. What started as a simple quest to create the perfect 
              seasoning has evolved into a culinary journey that brings 
              restaurant-quality taste to home kitchens everywhere.
            </p>
            
            <p
              className="mb-8 leading-relaxed text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              Each blend is a testament to years of experience, countless 
              experiments, and an unwavering commitment to quality. This isn't 
              just seasoning—it's craftsmanship in every jar.
            </p>

            {/* Signature-style line */}
            <div className="border-t border-gray-300 pt-6">
              <p
                className="italic text-gray-600"
                style={{
                  fontFamily: 'var(--font-serif)',
                  fontSize: '18px',
                }}
              >
                Chef Rod
              </p>
            </div>
          </div>
        </div>

        {/* Right Panel - Image */}
        <div className="min-h-[500px] lg:min-h-full">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1576425946664-2a057afff422?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwcmVkJTIwaGF0JTIwY29va2luZyUyMGFydGlzYW58ZW58MXx8fHwxNzY5NjY0OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Chef Rod in the kitchen"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
