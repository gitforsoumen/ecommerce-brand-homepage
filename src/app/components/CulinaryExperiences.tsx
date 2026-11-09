import { ImageWithFallback } from '@/app/components/figma/ImageWithFallback';

export function CulinaryExperiences() {
  return (
    <section className="py-24 lg:py-32 bg-white">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-12 h-[1px] bg-gray-300" />
            <div className="flex gap-1">
              <div className="w-1 h-1 rounded-full bg-gray-400" />
              <div className="w-1 h-1 rounded-full bg-gray-400" />
              <div className="w-1 h-1 rounded-full bg-gray-400" />
            </div>
            <div className="w-12 h-[1px] bg-gray-300" />
          </div>
          <h2
            className="font-['Playfair_Display']"
            style={{
              fontSize: 'clamp(36px, 5vw, 48px)',
              fontWeight: 700,
              color: 'var(--brand-dark)',
            }}
          >
            Culinary Experiences
          </h2>
        </div>

        {/* Feature 1 - Image Left */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1765360773028-6affda725695?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5lJTIwZGluaW5nJTIwdGFibGUlMjBzZXR0aW5nJTIwZWxlZ2FudCUyMGRpbm5lcnxlbnwxfHx8fDE3Njk2NjQ5OTJ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Fine dining experience"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2">
            <h3
              className="font-['Playfair_Display'] mb-6"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
                color: 'var(--brand-dark)',
              }}
            >
              Private Dinners & Services
            </h3>
            <p
              className="mb-6 leading-relaxed text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              Experience the art of fine dining in the comfort of your own home. 
              Chef Rod brings his culinary expertise directly to you, creating 
              unforgettable moments with personalized menus crafted from the 
              finest seasonal ingredients.
            </p>
            <p
              className="mb-8 leading-relaxed text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              From intimate gatherings to special celebrations, every dish is 
              prepared with passion and attention to detail, ensuring a 
              memorable culinary journey for you and your guests.
            </p>
            <button
              className="px-8 py-3 rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: 'var(--brand-red)',
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                letterSpacing: '0.5px',
              }}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Feature 2 - Image Right */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <h3
              className="font-['Playfair_Display'] mb-6"
              style={{
                fontSize: 'clamp(28px, 4vw, 36px)',
                fontWeight: 700,
                color: 'var(--brand-dark)',
              }}
            >
              Dine Tastings for Chef Rod's Catering
            </h3>
            <p
              className="mb-6 leading-relaxed text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              Discover the full spectrum of flavors that define Chef Rod's 
              signature style. Our exclusive tasting events showcase seasonal 
              menus, innovative techniques, and the stories behind each 
              carefully crafted dish.
            </p>
            <p
              className="mb-8 leading-relaxed text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '16px',
                lineHeight: '1.8',
              }}
            >
              Whether you're planning a wedding, corporate event, or special 
              occasion, experience our catering services firsthand and design 
              a custom menu that perfectly suits your vision.
            </p>
            <button
              className="px-8 py-3 rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-lg"
              style={{
                backgroundColor: 'var(--brand-red)',
                color: 'white',
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
                letterSpacing: '0.5px',
              }}
            >
              BOOK TASTING
            </button>
          </div>

          <div>
            <div className="overflow-hidden rounded-lg shadow-lg">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1759209402969-be3ea5027356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVmJTIwY29va2luZyUyMGtpdGNoZW4lMjBwcm9mZXNzaW9uYWx8ZW58MXx8fHwxNzY5NjA4ODQyfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Chef cooking experience"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
