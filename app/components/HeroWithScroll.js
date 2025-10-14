'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export default function HeroWithScroll() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  return (
    <section
      ref={heroRef}
      className="relative flex w-full flex-col overflow-hidden bg-cream text-foreground md:flex-row min-h-screen"
      role="banner"
    >
      {/* Animated Background Gradient */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: useTransform(
            scrollYProgress,
            [0, 0.5, 1],
            [
              'linear-gradient(135deg, #F5F1E8 0%, #E8DCC8 100%)',
              'linear-gradient(135deg, #E8DCC8 0%, #D4C5AA 100%)',
              'linear-gradient(135deg, #D4C5AA 0%, #C4B299 100%)'
            ]
          )
        }}
      />

      {/* Left Side: Content with Parallax */}
      <motion.div
        className="relative z-10 flex w-full flex-col justify-between p-8 md:w-1/2 md:p-12 lg:w-3/5 lg:p-16"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, -100]),
          opacity: useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.4])
        }}
      >
        {/* Top Section: Logo & Main Content */}
        <div>
          <motion.header
            className="mb-12"
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <motion.div
              className="flex items-center"
              style={{
                x: useTransform(scrollYProgress, [0, 0.5], [0, -30])
              }}
            >
              <div>
                <p className="text-4xl font-serif font-bold text-dark-brown">Le Restaurant</p>
                <p className="text-xs tracking-widest text-warm-brown uppercase mt-1">Artisan Bakery · NYC</p>
              </div>
            </motion.div>
          </motion.header>

          <div>
            {/* Main Heading with Word-by-Word Reveal */}
            <div className="mb-8 space-y-2">
              <div className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none text-dark-brown"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                  style={{
                    x: useTransform(scrollYProgress, [0, 0.3], [0, -50])
                  }}
                >
                  This is
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none text-dark-brown"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.6 }}
                  style={{
                    x: useTransform(scrollYProgress, [0, 0.3], [0, -70])
                  }}
                >
                  not just
                </motion.h1>
              </div>

              <div className="overflow-hidden">
                <motion.h1
                  className="text-6xl md:text-7xl lg:text-8xl font-serif font-bold leading-none"
                  initial={{ y: 100 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1, ease: "easeOut", delay: 0.8 }}
                  style={{
                    x: useTransform(scrollYProgress, [0, 0.3], [0, -90]),
                    background: useTransform(
                      scrollYProgress,
                      [0, 0.3],
                      ['linear-gradient(135deg, #8B6F47 0%, #A0825A 100%)', 'linear-gradient(135deg, #A0825A 0%, #C4A574 100%)']
                    ),
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text'
                  }}
                >
                  bread.
                </motion.h1>
              </div>
            </div>

            {/* Animated Divider */}
            <motion.div
              className="my-8 h-1 bg-warm-brown"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 120, opacity: 1 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 1 }}
              style={{
                scaleX: useTransform(scrollYProgress, [0, 0.2], [1, 0.5])
              }}
            />

            {/* Description with Scroll-Linked Reveal */}
            <motion.div
              className="max-w-lg mb-10"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <motion.p
                className="text-lg leading-relaxed text-dark-brown/90"
                style={{
                  opacity: useTransform(scrollYProgress, [0, 0.3], [1, 0.6])
                }}
              >
                This is our{' '}
                <motion.span
                  className="font-semibold text-warm-brown"
                  style={{
                    textShadow: useTransform(
                      scrollYProgress,
                      [0, 0.2],
                      ['0 0 0px rgba(139, 111, 71, 0)', '0 0 20px rgba(139, 111, 71, 0.3)']
                    )
                  }}
                >
                  philosophy
                </motion.span>
                . It&apos;s about time for slowing down, time for connection, enjoying simple pleasures.
              </motion.p>
            </motion.div>

            {/* CTA Button with Hover Animation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
            >
              <motion.a
                href="#menu"
                className="group inline-flex items-center gap-3 px-8 py-4 bg-dark-brown text-cream rounded-full font-medium text-lg overflow-hidden relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  boxShadow: useTransform(
                    scrollYProgress,
                    [0, 0.2],
                    ['0 4px 20px rgba(64, 47, 32, 0.2)', '0 8px 30px rgba(64, 47, 32, 0.4)']
                  )
                }}
              >
                <motion.span
                  className="absolute inset-0 bg-accent-brown"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
                <span className="relative z-10">Explore Menu</span>
                <motion.span
                  className="relative z-10"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
            </motion.div>
          </div>
        </div>

        {/* Bottom Section: Contact Info with Stagger */}
        <motion.footer
          className="mt-16 w-full"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.6 }}
          style={{
            opacity: useTransform(scrollYProgress, [0, 0.4], [1, 0])
          }}
        >
          <div className="grid grid-cols-1 gap-6 text-sm text-dark-brown/70 sm:grid-cols-3">
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-warm-brown">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" x2="22" y1="12" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
              <span>lerestaurant.com</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-warm-brown">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
              </svg>
              <span>212-555-BREAD</span>
            </motion.div>
            <motion.div
              className="flex items-center gap-3"
              whileHover={{ x: 5 }}
              transition={{ duration: 0.2 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0 text-warm-brown">
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>New York City</span>
            </motion.div>
          </div>
        </motion.footer>
      </motion.div>

      {/* Right Side: Image with Scroll-Linked Parallax and Scale */}
      <motion.div
        className="relative w-full min-h-[500px] bg-cover bg-center md:w-1/2 md:min-h-full lg:w-2/5 overflow-hidden"
        style={{
          y: useTransform(scrollYProgress, [0, 1], [0, 150]),
          scale: useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1.2])
        }}
      >
        <motion.div
          className="absolute inset-0"
          initial={{ clipPath: 'polygon(100% 0, 100% 0, 100% 100%, 100% 100%)' }}
          animate={{ clipPath: 'polygon(0% 0, 100% 0, 100% 100%, 0% 100%)' }}
          transition={{ duration: 1.4, ease: "circOut", delay: 0.2 }}
        >
          <div className="relative w-full h-full bg-warm-brown/20">
            <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30 text-2xl font-serif">
              Artisan Bakery Image
            </div>
          </div>
          {/* Image Overlay with Scroll-Linked Opacity */}
          <motion.div
            className="absolute inset-0 bg-dark-brown"
            style={{
              opacity: useTransform(scrollYProgress, [0, 0.5], [0, 0.3])
            }}
          />
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 hidden md:block"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 2 }}
        style={{
          opacity: useTransform(scrollYProgress, [0, 0.2], [1, 0])
        }}
      >
        <motion.div
          className="flex flex-col items-center gap-2 text-dark-brown/60"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="1" y="1" width="18" height="28" rx="9" />
            <motion.circle
              cx="10"
              cy="8"
              r="2"
              fill="currentColor"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
