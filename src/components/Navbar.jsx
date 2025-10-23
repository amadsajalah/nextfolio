import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex justify-between bg-gradient-to-r from-orange-50 to-amber-50 px-5 py-3 shadow-md backdrop-blur">
      <div className="w-1/6">
        <p className="cursor-default text-2xl font-bold text-orange-600">NAKAMA</p>
      </div>

      <div className="flex w-4/6 justify-center gap-5 text-lg font-bold">
        {['Home', 'About', 'Favorites'].map((item) => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            className="relative flex cursor-pointer items-center text-gray-700 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-orange-500 after:transition-all after:duration-300 after:content-[''] hover:text-orange-600 hover:after:w-full"
          >
            {item}
          </a>
        ))}
      </div>

      <div className="flex w-1/6 justify-end gap-2">
        {/* Instagram */}
        <a 
          href="https://instagram.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-orange-200"
        >
          <svg className="w-7 h-7 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 ..."/>
          </svg>
        </a>

        {/* TikTok */}
        <a 
          href="https://tiktok.com/@yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-orange-200"
        >
          <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67..."/>
          </svg>
        </a>

        {/* GitHub */}
        <a 
          href="https://github.com/yourusername" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cursor-pointer rounded-full p-2 transition-all duration-300 hover:scale-110 hover:bg-orange-200"
        >
          <svg className="w-7 h-7 text-gray-800" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12..."/>
          </svg>
        </a>
      </div>
    </nav>
  );
}
