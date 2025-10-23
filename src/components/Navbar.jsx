export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 z-50 flex w-full items-center justify-between bg-orange-50 px-10 py-4 shadow-sm">
      {/* Logo */}
      <h1 className="text-2xl font-bold text-orange-600">NAKAMA</h1>

      {/* Menu */}
      <div className="flex gap-8 text-gray-700 font-semibold">
        <a href="#home" className="hover:text-orange-600 transition-colors">
          Home
        </a>
        <a href="#about" className="hover:text-orange-600 transition-colors">
          About
        </a>
        <a href="#favorites" className="hover:text-orange-600 transition-colors">
          Favorites
        </a>
      </div>

      {/* Sosmed (contoh aja) */}
      <div className="flex gap-3">
        <a href="https://instagram.com" target="_blank" className="text-pink-500 text-xl">📸</a>
        <a href="https://tiktok.com" target="_blank" className="text-black text-xl">🎵</a>
        <a href="https://github.com" target="_blank" className="text-gray-800 text-xl">💻</a>
      </div>
    </nav>
  );
}
