export default function BetterChoiceSection() {
  return (
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
  );
}
