'use client';

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setIsVisible(true);

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "Atelier" },
    { href: "#magazine", label: "Magazine" },
    { href: "#menu", label: "Menu" },
    { href: "#order", label: "Order Online" },
    { href: "#locations", label: "Locations" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        } ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Left Nav - Desktop with stagger animation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(0, 3).map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-warm-brown transition-all duration-300 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${index * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Logo Center with fade-in */}
            <div className="flex-1 flex justify-center md:flex-initial">
              <a
                href="#home"
                className="text-2xl font-serif font-bold tracking-tight opacity-0 animate-fade-in"
                style={{
                  animationDelay: '200ms',
                  animationFillMode: 'forwards'
                }}
                aria-label="Home"
              >
                Le Restaurant
              </a>
            </div>

            {/* Right Nav - Desktop with stagger animation */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.slice(3).map((link, index) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium hover:text-warm-brown transition-all duration-300 opacity-0 animate-fade-in-up"
                  style={{
                    animationDelay: `${(index + 3) * 100}ms`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {link.label}
                </a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 z-[60] relative"
              aria-label="Toggle menu"
              aria-expanded={mobileMenuOpen}
            >
              <svg className="w-6 h-6 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Full-Screen Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-500 ${
          mobileMenuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
        style={{
          backgroundColor: '#F5F0E8'
        }}
      >
        <div className="flex flex-col items-center justify-center h-full px-6">
          {/* Logo at top */}
          <div className="absolute top-8 left-0 right-0 flex justify-center">
            <h2
              className={`text-3xl font-serif font-bold tracking-tight transition-all duration-700 ${
                mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
              }`}
              style={{ transitionDelay: '100ms' }}
            >
              Le Restaurant
            </h2>
          </div>

          {/* Menu Links - centered and animated */}
          <nav className="flex flex-col items-center gap-8 mb-16">
            {navLinks.map((link, index) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`text-2xl font-medium hover:text-warm-brown transition-all duration-500 ${
                  mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: `${(index + 2) * 100}ms`
                }}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Tagline at bottom */}
          <div
            className={`absolute bottom-12 left-0 right-0 text-center transition-all duration-700 ${
              mobileMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '800ms' }}
          >
            <p className="text-sm text-warm-brown/60 tracking-widest">
              FRESH • LOCAL • SEASONAL • HANDCRAFTED
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
