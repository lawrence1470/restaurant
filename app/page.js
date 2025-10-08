'use client';

import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
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
    <>
      {/* Navigation */}
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

      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center bg-cream px-6 pt-20"
        role="banner"
      >
        <div className="max-w-5xl text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight mb-6 text-balance">
            This is not just bread. This is our philosophy. It's about time.
          </h1>
          <p className="text-lg md:text-xl text-dark-brown/80 max-w-2xl mx-auto">
            Time for slowing down. Time for connection. Enjoying simple pleasures.
          </p>
          <div className="mt-12">
            <svg className="w-6 h-6 mx-auto animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </div>
      </section>

      {/* Catering Section */}
      <section className="py-20 px-6 bg-light-beige" id="catering">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] bg-warm-brown/10 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30 text-2xl">
              Catering Image
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-warm-brown mb-2">Wherever you need it</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Catering</h2>
            <p className="text-lg text-dark-brown/80 mb-8 leading-relaxed">
              We make catering for groups large or small, easy and stress-free, with delicious,
              quality meals delivered right on time. Enjoy seamless service tailored to your needs
              and simplify your event planning with us.
            </p>
            <a
              href="#catering"
              className="inline-block px-8 py-3 bg-dark-brown text-cream rounded-full hover:bg-accent-brown transition-colors font-medium"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Better Choice Section */}
      <section className="py-20 px-6 bg-cream">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-sm uppercase tracking-wider text-warm-brown mb-2">Better Choice</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Enjoy the taste of living better
            </h2>
            <p className="text-lg text-dark-brown/80 mb-8 leading-relaxed">
              Enjoy delicious and healthy meals with our Better Choices, created in collaboration
              with nutritionists and inspired by sustainable dining. Each dish meets strict
              nutritional criteria, ensuring a perfect balance of flavor and well-being.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a
                href="#menu"
                className="inline-block px-8 py-3 bg-dark-brown text-cream rounded-full hover:bg-accent-brown transition-colors font-medium"
              >
                View Menu
              </a>
              <a
                href="#learn"
                className="inline-block px-8 py-3 border-2 border-dark-brown text-dark-brown rounded-full hover:bg-dark-brown hover:text-cream transition-colors font-medium"
              >
                Learn More
              </a>
            </div>
          </div>
          <div className="relative aspect-[4/3] bg-warm-brown/10 rounded-lg overflow-hidden order-1 md:order-2">
            <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30 text-2xl">
              Healthy Food Image
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-20 px-6 bg-light-beige" id="about">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-[4/3] bg-warm-brown/10 rounded-lg overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30 text-2xl">
              Restaurant Image
            </div>
          </div>
          <div>
            <p className="text-sm uppercase tracking-wider text-warm-brown mb-2">Welcome Home</p>
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">
              Please take your time
            </h2>
            <p className="text-lg text-dark-brown/80 mb-8 leading-relaxed">
              Our restaurants, much like the vibrant community around them, embody a blend of
              new and contemporary design with traditional bakery roots. Every detail is crafted
              to make you feel at home.
            </p>
            <a
              href="#locations"
              className="inline-block px-8 py-3 bg-dark-brown text-cream rounded-full hover:bg-accent-brown transition-colors font-medium"
            >
              Find Location
            </a>
          </div>
        </div>
      </section>

      {/* Menu Philosophy Section */}
      <section className="py-32 px-6 bg-dark-brown text-cream" id="menu">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wide">
            Simple. Fresh. Honest.
          </h2>
          <p className="text-sm uppercase tracking-widest mb-6 text-cream/80">Our Dishes</p>
          <p className="text-xl md:text-2xl leading-relaxed mb-12 text-cream/90">
            Our menu celebrates natural, honest ingredients, prepared fresh every day.
            And at the heart of it all is the bread that brings everything together.
          </p>
          <a
            href="#menu"
            className="inline-block px-10 py-4 bg-cream text-dark-brown rounded-full hover:bg-light-beige transition-colors font-medium text-lg"
          >
            Get Inspired by our Menu
          </a>
        </div>
      </section>

      {/* Tradition Section */}
      <section className="py-32 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-serif font-bold mb-12 tracking-wide">
            Four Ingredients. Millions of Loaves. One Tradition.
          </h2>
          <div className="relative aspect-video bg-warm-brown/10 rounded-lg overflow-hidden mb-12">
            <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30 text-2xl">
              Bakery Video/Image
            </div>
          </div>
          <a
            href="#atelier"
            className="inline-block px-10 py-4 bg-dark-brown text-cream rounded-full hover:bg-accent-brown transition-colors font-medium text-lg"
          >
            Tour the Atelier
          </a>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 px-6 bg-light-beige" id="magazine">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Our stories. Your stories. History.
          </h2>
          <div className="flex justify-center gap-8 text-2xl font-serif text-warm-brown">
            <span>©1990</span>
            <span>—</span>
            <span>2025</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {/* Story Card 1 */}
          <article className="bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] bg-warm-brown/10">
              <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30">
                Story Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold mb-3">Our History</h3>
              <p className="text-dark-brown/80 mb-4 leading-relaxed">
                A journey that started with passion for authentic bread making and grew into
                a beloved community gathering place.
              </p>
              <a href="#history" className="text-warm-brown hover:text-accent-brown font-medium">
                Read article →
              </a>
            </div>
          </article>

          {/* Story Card 2 */}
          <article className="bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] bg-warm-brown/10">
              <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30">
                Story Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold mb-3">Communal Tables</h3>
              <p className="text-dark-brown/80 mb-4 leading-relaxed">
                Relationships forged around a communal table, where friends reconnect and
                new friendships begin.
              </p>
              <a href="#tables" className="text-warm-brown hover:text-accent-brown font-medium">
                Read article →
              </a>
            </div>
          </article>

          {/* Story Card 3 */}
          <article className="bg-cream rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
            <div className="relative aspect-[4/3] bg-warm-brown/10">
              <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30">
                Story Image
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-serif font-bold mb-3">Our Story</h3>
              <p className="text-dark-brown/80 mb-4 leading-relaxed">
                From a single bakery to a beloved gathering place, celebrating simple
                pleasures and authentic connections.
              </p>
              <a href="#story" className="text-warm-brown hover:text-accent-brown font-medium">
                Read article →
              </a>
            </div>
          </article>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-brown text-cream py-16 px-6" role="contentinfo">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Experience */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 text-cream/60">Experience</h3>
              <ul className="space-y-2">
                <li><a href="#home" className="hover:text-warm-brown transition-colors">Home</a></li>
                <li><a href="#about" className="hover:text-warm-brown transition-colors">Atelier</a></li>
                <li><a href="#magazine" className="hover:text-warm-brown transition-colors">Magazine</a></li>
                <li><a href="#menu" className="hover:text-warm-brown transition-colors">Menu</a></li>
                <li><a href="#locations" className="hover:text-warm-brown transition-colors">Locations</a></li>
              </ul>
            </div>

            {/* Support */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 text-cream/60">Support & Services</h3>
              <ul className="space-y-2">
                <li><a href="#careers" className="hover:text-warm-brown transition-colors">Careers</a></li>
                <li><a href="#faq" className="hover:text-warm-brown transition-colors">FAQ</a></li>
                <li><a href="#allergens" className="hover:text-warm-brown transition-colors">Allergens</a></li>
                <li><a href="#accessibility" className="hover:text-warm-brown transition-colors">Accessibility</a></li>
              </ul>
            </div>

            {/* Order */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 text-cream/60">Place Your Order</h3>
              <ul className="space-y-2">
                <li><a href="#catering" className="hover:text-warm-brown transition-colors">Catering</a></li>
                <li><a href="#order" className="hover:text-warm-brown transition-colors">Order Online</a></li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h3 className="text-sm uppercase tracking-wider mb-4 text-cream/60">Follow Us</h3>
              <div className="flex gap-4">
                <a href="#instagram" aria-label="Instagram" className="hover:text-warm-brown transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a href="#facebook" aria-label="Facebook" className="hover:text-warm-brown transition-colors">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-cream/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-cream/60">
            <p>©2025 Le Restaurant. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#privacy" className="hover:text-cream transition-colors">Privacy Policy</a>
              <a href="#cookies" className="hover:text-cream transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
