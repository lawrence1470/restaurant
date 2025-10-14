export default function CarouselText() {
  return (
    <section className="py-6 bg-dark-brown overflow-hidden">
      <div className="whitespace-nowrap">
        <div className="inline-block animate-scroll">
          <span className="text-[5rem] font-bold text-cream/15 mx-6 tracking-wider">
            FRESH • LOCAL • SEASONAL • HANDCRAFTED •
          </span>
          {/* Duplicate for seamless loop */}
          <span className="text-[5rem] font-bold text-cream/15 mx-6 tracking-wider">
            FRESH • LOCAL • SEASONAL • HANDCRAFTED •
          </span>
        </div>
      </div>
    </section>
  );
}
