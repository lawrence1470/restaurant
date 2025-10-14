'use client';

import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const windowHeight = window.innerHeight;

      // Text animation phase: 0 to ~800px (approximately 1 viewport height)
      // After 800px, allow normal scrolling
      const animationThreshold = windowHeight;
      const progress = Math.min(scrolled / animationThreshold, 1);

      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Exact color interpolation from Concrete Club Studio
  const interpolateColor = (start, end, progress) => {
    const r = Math.round(start[0] + (end[0] - start[0]) * progress);
    const g = Math.round(start[1] + (end[1] - start[1]) * progress);
    const b = Math.round(start[2] + (end[2] - start[2]) * progress);
    return `rgb(${r}, ${g}, ${b})`;
  };

  const backgroundColor = interpolateColor(
    [225, 211, 114], // warm yellow-beige start
    [243, 238, 201], // light cream end
    scrollProgress
  );

  const textColor = interpolateColor(
    [70, 45, 74],    // dark purple-brown start
    [47, 38, 49],    // darker purple-brown end
    scrollProgress
  );

  // Calculate translateX for second line
  // Max movement: reduced to prevent text going off screen
  // Movement happens during first viewport scroll
  const maxTranslateX = typeof window !== 'undefined' ? window.innerWidth * 0.25 : 300;
  const translateX = scrollProgress * maxTranslateX;

  return (
    <>
      {/* Fixed intro container matching Concrete Club structure */}
      <section
        className="intro"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          width: '100%',
          height: '100vh',
          zIndex: 10,
          overflow: 'visible'
        }}
        role="banner"
      >
        {/* Sticky wrapper with color transitions - full width background */}
        <div
          className="intro__wrapper"
          style={{
            position: 'sticky',
            top: 0,
            width: '100%',
            height: '100vh',
            background: backgroundColor,
            color: textColor,
            transition: 'background 0.3s ease-out, color 0.3s ease-out',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {/* Content container with max-width */}
          <div style={{
            position: 'relative',
            width: '100%',
            maxWidth: '1200px',
            height: '100%',
            margin: '0 auto',
            padding: '0 25px'
          }}>
            {/* Title with exact Concrete Club styling */}
            <h1
              className="intro__title"
              style={{
                position: 'absolute',
                top: '50%',
                left: '25px',
                width: '74.33%',
                maxWidth: '892px',
                fontSize: 'clamp(48px, 16vw, 180px)',
                fontWeight: 400,
                lineHeight: '0.757',
                letterSpacing: '-0.03em',
                fontFamily: 'Georgia, "Times New Roman", serif',
                color: 'inherit',
                margin: 0,
                display: 'flex',
                flexDirection: 'column',
                transform: `translateY(calc(-50% + ${scrollProgress * -30}px))`,
                opacity: 1 - scrollProgress * 0.3,
                transition: 'transform 0.1s ease-out, opacity 0.1s ease-out'
              }}
            >
              <span>This is not</span>
              <span style={{
                transform: `translateX(${translateX}px)`,
                transition: 'transform 0.1s ease-out'
              }}>
                just bread.
              </span>
            </h1>

            {/* Optional decorative element */}
            <div
              className="intro__grid"
              style={{
                position: 'absolute',
                bottom: '10%',
                right: '5%',
                opacity: 0.6 - scrollProgress * 0.6,
                transition: 'opacity 0.3s ease-out'
              }}
            >
              <div
                style={{
                  width: 'clamp(100px, 15vw, 180px)',
                  height: 'clamp(100px, 15vw, 180px)',
                  borderRadius: '50%',
                  border: `2px solid ${textColor}`,
                  opacity: 0.3
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Spacer to create scroll range - 200vh ensures content stays hidden until animation completes */}
      <div style={{ height: '200vh', position: 'relative', zIndex: 1 }} />
    </>
  );
}
