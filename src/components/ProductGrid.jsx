const products = [
  {
    id: 1,
    name: "Custom Portrait Painting",
    price: 89,
    image:
      "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    name: "Personalized Mug",
    price: 24,
    image:
      "https://images.unsplash.com/photo-1460518451285-97b6aa326961?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    name: "Name Keychain",
    price: 12,
    image:
      "https://images.unsplash.com/photo-1524593282122-7efc1c7e1d30?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    name: "Photo Frame Gift",
    price: 39,
    image:
      "https://images.unsplash.com/photo-1519139270028-ab664cf42264?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function ProductGrid() {
  return (
    <section id="shop" className="py-16 bg-pink-50/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-8">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">Shop Popular</h2>
          <p className="text-gray-600 text-sm">Handpicked favorites for every occasion</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <div key={p.id} className="group bg-white rounded-xl overflow-hidden shadow-sm border border-black/5">
              <div className="relative">
                <img src={p.image} alt={p.name} className="h-56 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
              </div>
              <div className="p-4">
                <h3 className="font-medium text-gray-900">{p.name}</h3>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-pink-600 font-semibold">${p.price}</span>
                  <a href="#contact" className="text-sm font-medium text-pink-600 hover:text-pink-700">Customize</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
