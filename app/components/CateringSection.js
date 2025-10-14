export default function CateringSection() {
  return (
    <section className="py-20 px-6 bg-light-beige" id="catering">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-[4/3] bg-warm-brown/10 rounded-lg overflow-hidden">
          <div className="absolute inset-0 flex items-center justify-center text-warm-brown/30 text-2xl">
            Catering Image
          </div>
        </div>
        <div>
          <p className="text-sm uppercase tracking-wider text-warm-brown mb-2">Wherever you need it</p>
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6">Catering</h2>
          <p className="text-lg text-dark-brown/80 mb-8 leading-relaxed">
            We make catering for groups large or small, easy and stress-free, with delicious,
            quality meals delivered right on time. Enjoy seamless service tailored to your needs
            and simplify your event planning with us.
          </p>
          <a
            href="#catering"
            className="inline-block px-8 py-3 bg-dark-brown text-cream rounded-full hover:bg-accent-brown transition-colors font-medium"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
