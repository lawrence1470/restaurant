export default function HistorySection() {
  return (
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
  );
}
