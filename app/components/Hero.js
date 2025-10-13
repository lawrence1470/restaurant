export default function Hero() {
  return (
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
  );
}
