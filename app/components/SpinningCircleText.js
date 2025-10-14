'use client';

export default function SpinningCircleText({
  text = "FRESH • LOCAL • SEASONAL • HANDCRAFTED •",
  textColor,
  opacity = 1,
  rotation = 0
}) {
  return (
    <svg
      width="clamp(120px, 18vw, 200px)"
      height="clamp(120px, 18vw, 200px)"
      viewBox="0 0 200 200"
      style={{
        width: 'clamp(120px, 18vw, 200px)',
        height: 'clamp(120px, 18vw, 200px)',
        opacity,
        transform: `rotate(${rotation}deg)`,
        transition: 'opacity 0.3s ease-out'
      }}
      role="img"
      aria-label="Fresh Local Seasonal Handcrafted"
    >
      <defs>
        <path
          id="circlePath"
          d="M 100, 100 m -75, 0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
        />
      </defs>
      <text
        style={{
          fill: textColor,
          fontSize: '14px',
          fontWeight: '600',
          letterSpacing: '0.15em',
          fontFamily: 'var(--font-geist-sans), sans-serif'
        }}
      >
        <textPath href="#circlePath" startOffset="0%">
          {text}
        </textPath>
      </text>
    </svg>
  );
}
