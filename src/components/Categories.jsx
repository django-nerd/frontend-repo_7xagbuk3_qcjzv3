const categories = [
  { name: "Paintings", image: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=800&auto=format&fit=crop" },
  { name: "Mugs", image: "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?q=80&w=800&auto=format&fit=crop" },
  { name: "Keychains", image: "https://images.unsplash.com/photo-1578926375605-eaf7559b1458?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxQYWludGluZ3N8ZW58MHwwfHx8MTc2MjY1NTE3OXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" },
  { name: "Frames", image: "https://images.unsplash.com/photo-1490077476659-095159692ab5?q=80&w=800&auto=format&fit=crop" },
];

export default function Categories() {
  return (
    <section id="categories" className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Explore Categories</h2>
          <a href="#shop" className="text-pink-600 hover:text-pink-700 text-sm font-medium">Shop all</a>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {categories.map((c) => (
            <a key={c.name} href="#shop" className="group relative rounded-xl overflow-hidden shadow-sm">
              <img src={c.image} alt={c.name} className="h-40 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-black/0" />
              <span className="absolute bottom-2 left-2 text-white text-sm font-medium">{c.name}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
