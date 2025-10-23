import OnePieceCard from '../OnePieceCard';

export default function Section3() {
  const strawhats = [
    { character: "Luffy", role: "Captain", emoji: "👒", color: "border-red-400" },
    { character: "Zoro", role: "Swordsman", emoji: "⚔️", color: "border-green-400" },
    { character: "Nami", role: "Navigator", emoji: "🗺️", color: "border-orange-400" },
    { character: "Usopp", role: "Sniper", emoji: "🎯", color: "border-lime-400" },
    { character: "Sanji", role: "Cook", emoji: "👨‍🍳", color: "border-yellow-400" },
    { character: "Chopper", role: "Doctor", emoji: "🦌", color: "border-pink-400" },
    { character: "Robin", role: "Archaeologist", emoji: "📚", color: "border-purple-400" },
    { character: "Franky", role: "Shipwright", emoji: "🤖", color: "border-blue-400" },
    { character: "Brook", role: "Musician", emoji: "🎸", color: "border-gray-400" },
    { character: "Jinbe", role: "Helmsman", emoji: "🐋", color: "border-cyan-400" },
  ];

  return (
    <section
      id="favorites"
      className="relative flex min-h-[85vh] items-center justify-center bg-gradient-to-b from-white to-orange-50 py-16 scroll-mt-10 overflow-hidden"
    >
      {/* 🌍 Background peta samar */}
      <div
        className="absolute inset-0 bg-[url('/images/map-bg.png')] bg-cover bg-center opacity-10"
        aria-hidden="true"
      ></div>

      {/* ☠️ Logo Jolly Roger transparan */}
      <div className="absolute inset-0 flex items-center justify-center opacity-10 pointer-events-none">
        <img
          src="/images/jollyroger.png"
          alt="Jolly Roger"
          className="w-[400px] md:w-[600px]"
        />
      </div>

      {/* 🧩 Konten utama */}
      <div className="relative z-10 flex w-4/5 flex-col gap-8">
        {/* Header */}
        <div className="text-center">
          <p className="mb-2 text-3xl font-bold text-orange-600">
            🏴‍☠️ Straw Hat Crew Favorites 🏴‍☠️
          </p>
          <p className="text-gray-600">
            Karakter One Piece favoritku! Mereka menginspirasi aku buat terus semangat belajar 💪
          </p>
        </div>

        {/* Grid karakter */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {strawhats.slice(0, 8).map((member, index) => (
            <OnePieceCard key={index} {...member} />
          ))}
        </div>

        {/* Brook & Jinbe di tengah */}
        <div className="flex justify-center gap-6 mt-6">
          {strawhats.slice(8).map((member, index) => (
            <OnePieceCard key={index} {...member} />
          ))}
        </div>

        {/* Quote */}
        <div className="mt-8 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 p-6 text-center shadow-lg">
          <p className="text-2xl font-bold text-white">
            "I'm gonna be King of the Pirates!" - Monkey D. Luffy
          </p>
          <p className="mt-2 text-sm text-orange-100">
            Sama kayak Luffy yang punya mimpi jadi Raja Bajak Laut, aku juga punya mimpi buat jadi Web Developer yang handal! 🔥
          </p>
        </div>
      </div>

      {/* 🌊 Wave di bawah */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-0">
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" className="h-[100px] w-full">
          <path
            d="M0.00,49.98 C150.00,150.00 349.20,-49.98 500.00,49.98 L500.00,150.00 L0.00,150.00 Z"
            fill="#fde68a"
          ></path>
        </svg>
      </div>
    </section>
  );
}
