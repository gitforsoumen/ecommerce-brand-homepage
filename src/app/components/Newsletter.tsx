import { useState } from 'react';

export function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section
      className="py-12 lg:py-16"
      style={{ backgroundColor: 'var(--brand-pink)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left - Content */}
          <div className="text-center lg:text-left">
            <h3
              className="mb-2"
              style={{
                fontFamily: 'var(--font-serif)',
                fontSize: 'clamp(24px, 4vw, 32px)',
                fontWeight: 700,
                color: 'var(--brand-dark)',
              }}
            >
              Stay Connected
            </h3>
            <p
              className="text-gray-700"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
              }}
            >
              Get exclusive recipes, cooking tips, and special offers.
            </p>
          </div>

          {/* Right - Email Form */}
          <form onSubmit={handleSubmit} className="w-full lg:w-auto">
            <div className="flex flex-col sm:flex-row gap-3 lg:min-w-[400px]">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[var(--brand-red)] focus:border-transparent"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '14px',
                }}
              />
              <button
                type="submit"
                className="px-8 py-3 rounded-full font-medium transition-all hover:scale-[1.02] hover:shadow-lg whitespace-nowrap"
                style={{
                  backgroundColor: 'var(--brand-red)',
                  color: 'white',
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                  letterSpacing: '0.5px',
                }}
              >
                SUBSCRIBE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
