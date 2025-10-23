export default function Section1() {
  return (
    <section className="mb-52 flex min-h-[70vh] items-center justify-center bg-gradient-to-b from-orange-50 to-white">
      <div id="home" className="flex flex-col">
        {/* Teks sambutan */}
        <div className="mb-2 text-xl text-gray-700">
          <p>⛵ Ahoy! Welcome to</p>
        </div>

        {/* Teks utama: MY JOURNEY */}
        <div className="flex items-center gap-2">
          {/* Kata pertama */}
          <p className="cursor-default text-8xl font-bold text-orange-600">MY</p>

          {/* Kata kedua dengan efek outline */}
          <p
            className="cursor-none text-8xl font-bold text-transparent transition-all duration-500 hover:text-orange-500"
            style={{
              WebkitTextStroke: '3px #ea580c',
            }}
          >
            JOURNEY
          </p>
          
          {/* Emoji One Piece */}
          <span className="text-6xl">🏴‍☠️</span>
        </div>
        
        {/* Nama */}
        <div className="mt-4 text-center">
          <p className="text-2xl font-semibold text-gray-600">- ACHMAD -</p>
        </div>
      </div>
    </section>
  );
}