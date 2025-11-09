export default function Footer() {
  return (
    <footer id="contact" className="border-t border-black/5 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-lg font-semibold">About Anne</h3>
          <p className="mt-3 text-gray-600 leading-relaxed">Anne crafts heartfelt, made-to-order gifts and paintings that capture your moments and memories. Each piece is designed with care and a personal touch.</p>
        </div>
        <div>
          <h3 className="text-lg font-semibold">Get in touch</h3>
          <form className="mt-4 grid sm:grid-cols-2 gap-3">
            <input className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Your name" />
            <input className="rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Email" type="email" />
            <textarea className="sm:col-span-2 rounded-lg border border-gray-300 px-3 py-2 h-24 focus:outline-none focus:ring-2 focus:ring-pink-500" placeholder="Tell us about your idea" />
            <button className="sm:col-span-2 inline-flex justify-center rounded-lg bg-pink-600 text-white px-4 py-2 font-medium hover:bg-pink-700 transition-colors">Send</button>
          </form>
        </div>
      </div>
      <div className="py-6 text-center text-sm text-gray-500">© {new Date().getFullYear()} Anne — Handmade & Personalized</div>
    </footer>
  );
}
