import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import svgPaths from '@/imports/svg-zlnv7x2zrk';
import imgPrimaryLogoPng1 from 'figma:asset/8dbec7d185f4cfdc25e5452734fb76cd610c2b86.png';

// Search Icon Component
function SearchIcon() {
  return (
    <div className="h-[25.556px] w-[25.556px] overflow-clip relative shrink-0">
      <div className="absolute inset-[69.42%_12.51%_12.5%_69.41%]">
        <div className="absolute inset-[-23.04%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6.75093 6.75093">
            <path d={svgPaths.p11ead980} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[12.5%_20.83%_20.83%_12.5%]">
        <div className="absolute inset-[-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 19.1667 19.1667">
            <path d={svgPaths.p3999280} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Shopping Cart Icon Component
function ShoppingCartIcon() {
  return (
    <div className="h-[25.556px] w-[25.556px] overflow-clip relative shrink-0">
      <div className="absolute inset-[83.33%_62.5%_8.33%_29.16%]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25926 4.25926">
            <path d={svgPaths.p337348f0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[83.33%_16.66%_8.33%_75.01%]">
        <div className="absolute inset-[-50%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4.25926 4.25926">
            <path d={svgPaths.p337348f0} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.54%_7.97%_33.13%_8.53%]">
        <div className="absolute inset-[-7.14%_-4.99%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 23.4685 17.0376">
            <path d={svgPaths.p30024180} stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.12963" />
          </svg>
        </div>
      </div>
    </div>
  );
}

// Grid Icon Component (3x3 dots)
function GridIcon() {
  return (
    <div className="relative shrink-0 size-[36px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 36 36">
        <g>
          <path d={svgPaths.p1a25bf00} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p3cc62600} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a3f3480} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2a416380} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.peb08000} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p177abb80} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p29046800} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p1cb1ec00} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
          <path d={svgPaths.p2c024300} fill="black" stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
        </g>
      </svg>
    </div>
  );
}

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-[20px] left-[20px] right-[20px] z-50 bg-white rounded-[50px] shadow-lg">
        <div className="max-w-[1755px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-[80px] lg:h-[100px]">
            {/* Left - Logo */}
            <div className="flex-shrink-0">
              <img
                src={imgPrimaryLogoPng1}
                alt="Chef Rod's Logo"
                className="h-[50px] lg:h-[76px] w-auto object-contain"
              />
            </div>

            {/* Center - Empty for clean spacing */}
            <div className="flex-1" />

            {/* Right - Icons (Desktop) */}
            <div className="hidden md:flex items-center gap-[31px]">
              <button
                aria-label="Search"
                className="flex items-center justify-center size-[46px] rounded-full hover:bg-gray-50 transition-colors"
              >
                <SearchIcon />
              </button>

              <button
                aria-label="Shopping cart"
                className="flex items-center justify-center size-[46px] rounded-full hover:bg-gray-50 transition-colors"
              >
                <ShoppingCartIcon />
              </button>

              <button
                aria-label="Apps menu"
                className="flex items-center justify-center size-[46px] rounded-full hover:bg-gray-50 transition-colors"
              >
                <GridIcon />
              </button>
            </div>

            {/* Mobile - Hamburger Menu */}
            <button
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-50 rounded-full transition-colors"
            >
              <Menu className="w-6 h-6" strokeWidth={1.5} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Slide-in Menu */}
          <div className="absolute right-0 top-0 bottom-0 w-[280px] bg-white shadow-xl">
            <div className="p-6">
              <button
                aria-label="Close menu"
                onClick={() => setMobileMenuOpen(false)}
                className="absolute top-6 right-6 p-2 hover:bg-gray-100 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="mt-16 flex flex-col gap-6">
                <button
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <SearchIcon />
                  <span className="text-base font-medium">Search</span>
                </button>

                <button
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <ShoppingCartIcon />
                  <span className="text-base font-medium">Cart</span>
                </button>

                <button
                  className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors"
                  style={{ fontFamily: 'var(--font-inter)' }}
                >
                  <GridIcon />
                  <span className="text-base font-medium">Menu</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}