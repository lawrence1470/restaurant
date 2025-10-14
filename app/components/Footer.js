export default function Footer() {
  return (
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
  );
}
