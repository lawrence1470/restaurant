'use client';

import { useState, useEffect } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-cream/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Left Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#home" className="text-sm font-medium hover:text-warm-brown transition-colors">
              Home
            </a>
            <a href="#about" className="text-sm font-medium hover:text-warm-brown transition-colors">
              Atelier
            </a>
            <a href="#magazine" className="text-sm font-medium hover:text-warm-brown transition-colors">
              Magazine
            </a>
          </div>

          {/* Logo Center */}
          <div className="flex-1 flex justify-center md:flex-initial">
            <a href="#home" className="text-2xl font-serif font-bold tracking-tight" aria-label="Home">
              Le Restaurant
            </a>
          </div>

          {/* Right Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#menu" className="text-sm font-medium hover:text-warm-brown transition-colors">
              Menu
            </a>
            <a href="#order" className="text-sm font-medium hover:text-warm-brown transition-colors">
              Order Online
            </a>
            <a href="#locations" className="text-sm font-medium hover:text-warm-brown transition-colors">
              Locations
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pt-4 pb-2 flex flex-col gap-4">
            <a href="#home" className="text-sm font-medium hover:text-warm-brown transition-colors">Home</a>
            <a href="#about" className="text-sm font-medium hover:text-warm-brown transition-colors">Atelier</a>
            <a href="#magazine" className="text-sm font-medium hover:text-warm-brown transition-colors">Magazine</a>
            <a href="#menu" className="text-sm font-medium hover:text-warm-brown transition-colors">Menu</a>
            <a href="#order" className="text-sm font-medium hover:text-warm-brown transition-colors">Order Online</a>
            <a href="#locations" className="text-sm font-medium hover:text-warm-brown transition-colors">Locations</a>
          </div>
        )}
      </div>
    </nav>
  );
}
