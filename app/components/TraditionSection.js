export default function TraditionSection() {
  return (
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
  );
}
