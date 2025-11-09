import { ShoppingCart, Star } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-full bg-pink-500 text-white grid place-items-center shadow-sm">
            <Star className="h-5 w-5" />
          </div>
          <span className="font-semibold text-xl tracking-tight">Anne</span>
        </a>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-700">
          <a href="#home" className="hover:text-pink-600 transition-colors">Home</a>
          <a href="#categories" className="hover:text-pink-600 transition-colors">Categories</a>
          <a href="#shop" className="hover:text-pink-600 transition-colors">Shop</a>
          <a href="#contact" className="hover:text-pink-600 transition-colors">Contact</a>
        </nav>

        <button className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-4 py-2 text-sm hover:bg-gray-800 transition-colors">
          <ShoppingCart className="h-4 w-4" />
          Cart
        </button>
      </div>
    </header>
  );
}
