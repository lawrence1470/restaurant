export default function WelcomeSection() {
  return (
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
  );
}
