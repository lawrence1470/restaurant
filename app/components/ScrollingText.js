export default function ScrollingText() {
  return (
    <section className="py-16 bg-dark-brown overflow-hidden">
      <div className="whitespace-nowrap">
        <div className="inline-block animate-scroll">
          <span className="text-[8rem] font-bold text-cream/10 mx-8">
            FRESH • LOCAL • SEASONAL • HANDCRAFTED •
          </span>
          {/* Duplicate for seamless loop */}
          <span className="text-[8rem] font-bold text-cream/10 mx-8">
            FRESH • LOCAL • SEASONAL • HANDCRAFTED •
          </span>
        </div>
      </div>
    </section>
  );
}
