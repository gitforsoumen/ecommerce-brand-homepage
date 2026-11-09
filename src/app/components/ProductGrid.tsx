import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

const products = [
  {
    id: 1,
    name: "Classic All-Purpose",
    meta: "Original Blend • 8oz",
    image: "https://images.unsplash.com/photo-1691480208637-6ed63aac6694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZSUyMGphciUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjY0OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    name: "Signature Blend",
    meta: "Chef's Special • 8oz",
    image: "https://images.unsplash.com/photo-1691480208637-6ed63aac6694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZSUyMGphciUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjY0OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    name: "Variety Pack",
    meta: "3 Flavors • 6oz each",
    image: "https://images.unsplash.com/photo-1691480208637-6ed63aac6694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZSUyMGphciUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjY0OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    name: "Premium Collection",
    meta: "Limited Edition • 12oz",
    image: "https://images.unsplash.com/photo-1691480208637-6ed63aac6694?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGljZSUyMGphciUyMHByb2R1Y3QlMjB3aGl0ZSUyMGJhY2tncm91bmR8ZW58MXx8fHwxNzY5NjY0OTkzfDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export function ProductGrid() {
  return (
    <section
      className="py-24 lg:py-32"
      style={{ backgroundColor: 'var(--brand-cream)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2
            className="font-['Playfair_Display']"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
              color: 'var(--brand-dark)',
            }}
          >
            Chef Rod's All-Purpose Seasoning
          </h2>
        </div>

        {/* Product Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square bg-gray-50 flex items-center justify-center p-8">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="p-6">
                <h3
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '18px',
                    fontWeight: 600,
                    color: 'var(--brand-dark)',
                  }}
                >
                  {product.name}
                </h3>
                <p
                  className="text-gray-600 mb-4"
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontSize: '13px',
                  }}
                >
                  {product.meta}
                </p>
                <button
                  className="w-full px-4 py-2 rounded-full font-medium transition-all hover:scale-[1.02]"
                  style={{
                    backgroundColor: 'var(--brand-red)',
                    color: 'white',
                    fontFamily: 'var(--font-inter)',
                    fontSize: '12px',
                    letterSpacing: '0.5px',
                  }}
                >
                  SHOP NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center">
          <button
            className="px-10 py-4 rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-lg"
            style={{
              backgroundColor: 'var(--brand-red)',
              color: 'white',
              fontFamily: 'var(--font-inter)',
              fontSize: '14px',
              letterSpacing: '0.5px',
            }}
          >
            VIEW ALL PRODUCTS
          </button>
        </div>
      </div>
    </section>
  );
}
