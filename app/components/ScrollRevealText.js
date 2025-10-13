'use client';

import { useRef, useState, useEffect } from 'react';

export default function ScrollRevealText() {
  const sectionRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const section = sectionRef.current;
        const rect = section.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // Check if section is in view
        if (rect.top <= 0 && rect.bottom >= windowHeight) {
          // Calculate progress (0 to 1)
          const sectionHeight = rect.height - windowHeight;
          const scrolled = Math.abs(rect.top);
          const newProgress = Math.min(scrolled / sectionHeight, 1);
          setProgress(newProgress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="min-h-[300vh] relative bg-cream"
    >
      <div className="sticky top-0 h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-2xl md:text-3xl lg:text-4xl font-serif leading-relaxed text-center">
            {/* Phrase 1 */}
            <div className="relative inline-block">
              <span className="text-dark-brown/20">
                Where every dish tells a story of
              </span>
              <span
                className="absolute inset-0 text-dark-brown overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - Math.min(progress * 500, 100)}% 0 0)`
                }}
              >
                Where every dish tells a story of
              </span>
            </div>
            {' '}
            {/* Phrase 2 */}
            <div className="relative inline-block">
              <span className="text-dark-brown/20">
                tradition and flavor,
              </span>
              <span
                className="absolute inset-0 text-dark-brown overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - Math.max(0, Math.min((progress - 0.15) * 500, 100))}% 0 0)`
                }}
              >
                tradition and flavor,
              </span>
            </div>
            {' '}
            {/* Phrase 3 */}
            <div className="relative inline-block">
              <span className="text-dark-brown/20">
                crafted with passion
              </span>
              <span
                className="absolute inset-0 text-dark-brown overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - Math.max(0, Math.min((progress - 0.3) * 500, 100))}% 0 0)`
                }}
              >
                crafted with passion
              </span>
            </div>
            {' '}
            {/* Phrase 4 */}
            <div className="relative inline-block">
              <span className="text-dark-brown/20">
                and served with heart.
              </span>
              <span
                className="absolute inset-0 text-dark-brown overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - Math.max(0, Math.min((progress - 0.5) * 500, 100))}% 0 0)`
                }}
              >
                and served with heart.
              </span>
            </div>
            {' '}
            {/* Phrase 5 */}
            <div className="relative inline-block">
              <span className="text-dark-brown/20">
                Time for slowing down.
              </span>
              <span
                className="absolute inset-0 text-dark-brown overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - Math.max(0, Math.min((progress - 0.65) * 500, 100))}% 0 0)`
                }}
              >
                Time for slowing down.
              </span>
            </div>
            {' '}
            {/* Phrase 6 */}
            <div className="relative inline-block">
              <span className="text-dark-brown/20">
                Time for connection.
              </span>
              <span
                className="absolute inset-0 text-dark-brown overflow-hidden"
                style={{
                  clipPath: `inset(0 ${100 - Math.max(0, Math.min((progress - 0.8) * 500, 100))}% 0 0)`
                }}
              >
                Time for connection.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
