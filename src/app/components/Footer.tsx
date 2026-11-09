export function Footer() {
  const footerLinks = {
    shop: [
      { label: 'All Products', href: '#' },
      { label: 'Seasonings', href: '#' },
      { label: 'Gift Sets', href: '#' },
      { label: 'Best Sellers', href: '#' },
    ],
    company: [
      { label: 'About Chef Rod', href: '#' },
      { label: 'Our Story', href: '#' },
      { label: 'Press & Media', href: '#' },
      { label: 'Contact Us', href: '#' },
    ],
    experiences: [
      { label: 'Private Dining', href: '#' },
      { label: 'Catering Services', href: '#' },
      { label: 'Cooking Classes', href: '#' },
      { label: 'Events', href: '#' },
    ],
    support: [
      { label: 'Shipping Info', href: '#' },
      { label: 'Returns', href: '#' },
      { label: 'FAQ', href: '#' },
      { label: 'Recipes', href: '#' },
    ],
  };

  return (
    <footer
      className="pt-20 pb-8"
      style={{ backgroundColor: 'var(--brand-cream)' }}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 mb-16">
          {/* Shop Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--brand-dark)',
                letterSpacing: '0.5px',
              }}
            >
              SHOP
            </h4>
            <ul className="space-y-3">
              {footerLinks.shop.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-[var(--brand-blue)] transition-colors"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--brand-dark)',
                letterSpacing: '0.5px',
              }}
            >
              COMPANY
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-[var(--brand-blue)] transition-colors"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Experiences Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--brand-dark)',
                letterSpacing: '0.5px',
              }}
            >
              EXPERIENCES
            </h4>
            <ul className="space-y-3">
              {footerLinks.experiences.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-[var(--brand-blue)] transition-colors"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h4
              className="mb-4"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '14px',
                fontWeight: 600,
                color: 'var(--brand-dark)',
                letterSpacing: '0.5px',
              }}
            >
              SUPPORT
            </h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-700 hover:text-[var(--brand-blue)] transition-colors"
                    style={{
                      fontFamily: 'var(--font-inter)',
                      fontSize: '14px',
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Center Logo */}
        <div className="text-center mb-12">
          <span
            className="font-['Playfair_Display'] tracking-tight"
            style={{
              fontSize: '36px',
              fontWeight: 700,
              color: 'var(--brand-dark)',
            }}
          >
            ROD'S
          </span>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-300">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p
              className="text-gray-600 text-center md:text-left"
              style={{
                fontFamily: 'var(--font-inter)',
                fontSize: '13px',
              }}
            >
              © {new Date().getFullYear()} Chef Rod's. All rights reserved.
            </p>
            
            <div className="flex gap-6">
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--brand-blue)] transition-colors"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                }}
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--brand-blue)] transition-colors"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                }}
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-600 hover:text-[var(--brand-blue)] transition-colors"
                style={{
                  fontFamily: 'var(--font-inter)',
                  fontSize: '13px',
                }}
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
