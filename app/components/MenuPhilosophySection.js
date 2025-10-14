export default function MenuPhilosophySection() {
  return (
    <section className="py-32 px-6 bg-dark-brown text-cream" id="menu">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-serif font-bold mb-8 tracking-wide">
          Simple. Fresh. Honest.
        </h2>
        <p className="text-sm uppercase tracking-widest mb-6 text-cream/80">Our Dishes</p>
        <p className="text-xl md:text-2xl leading-relaxed mb-12 text-cream/90">
          Our menu celebrates natural, honest ingredients, prepared fresh every day.
          And at the heart of it all is the bread that brings everything together.
        </p>
        <a
          href="#menu"
          className="inline-block px-10 py-4 bg-cream text-dark-brown rounded-full hover:bg-light-beige transition-colors font-medium text-lg"
        >
          Get Inspired by our Menu
        </a>
      </div>
    </section>
  );
}
