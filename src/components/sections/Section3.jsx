import OnePieceCard from '../OnePieceCard';

export default function Section3() {
  const strawhats = [
    { character: "Luffy", role: "Captain", emoji: "👒", color: "border-red-400" },
    { character: "Zoro", role: "Swordsman", emoji: "⚔️", color: "border-green-400" },
    { character: "Nami", role: "Navigator", emoji: "🗺️", color: "border-orange-400" },
    { character: "Sanji", role: "Cook", emoji: "👨‍🍳", color: "border-yellow-400" },
    { character: "Chopper", role: "Doctor", emoji: "🦌", color: "border-pink-400" },
    { character: "Robin", role: "Archaeologist", emoji: "📚", color: "border-purple-400" },
  ];

  return (
    <section
      id="favorites"
      className="flex min-h-[85vh] items-center justify-center bg-gradient-to-b from-white to-orange-50 py-16 scroll-mt-20"
    >
      <div className="flex w-4/5 flex-col gap-8">
        <div className="text-center">
          <p className="mb-2 text-3xl font-bold text-orange-600">🏴‍☠️ Straw Hat Crew Favorites 🏴‍☠️</p>
          <p className="text-gray-600">
            Karakter One Piece favoritku! Mereka menginspirasi aku buat terus semangat belajar 💪
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-3">
          {strawhats.map((member, index) => (
            <OnePieceCard key={index} {...member} />
          ))}
        </div>

        <div className="mt-8 rounded-xl bg-gradient-to-r from-orange-400 to-red-400 p-6 text-center shadow-lg">
          <p className="text-2xl font-bold text-white">
            "I'm gonna be King of the Pirates!" - Monkey D. Luffy
          </p>
          <p className="mt-2 text-sm text-orange-100">
            Sama kayak Luffy yang punya mimpi jadi Raja Bajak Laut, aku juga punya mimpi buat jadi Web Developer yang handal! 🔥
          </p>
        </div>
      </div>
    </section>
  );
}
