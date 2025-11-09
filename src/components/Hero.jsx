export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-rose-50 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <p className="inline-block rounded-full bg-pink-100 text-pink-700 px-3 py-1 text-xs font-medium">Handmade & Personalized</p>
          <h1 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-gray-900">Customized Gifts & Paintings</h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">Celebrate moments with one-of-a-kind creations. Paintings, mugs, keychains, frames, and more — designed just for you.</p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#shop" className="inline-flex items-center justify-center rounded-full bg-pink-600 text-white px-6 py-3 font-medium hover:bg-pink-700 transition-colors">Customize Now</a>
            <a href="#about" className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 font-medium text-gray-700 hover:bg-gray-50 transition-colors">Learn More</a>
          </div>
        </div>
        <div className="relative aspect-square md:aspect-auto md:h-[420px]">
          <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-pink-200/60 blur-2xl" />
          <div className="absolute -left-8 -bottom-8 h-40 w-40 rounded-full bg-rose-200/60 blur-2xl" />
          <img
            src="https://images.unsplash.com/photo-1526947425960-945c6e72858f?q=80&w=1200&auto=format&fit=crop"
            alt="Handmade gifts"
            className="relative z-10 rounded-2xl shadow-xl w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
