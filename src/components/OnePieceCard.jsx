export default function OnePieceCard({ character, role, emoji, color }) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-xl border-2 ${color} bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl w-56 h-36`} // ⬅️ Tambah w-56 h-36
    >
      {/* Emoji karakter */}
      <span className="text-5xl">{emoji}</span>

      {/* Nama karakter */}
      <p className="text-lg font-semibold">{character}</p>

      {/* Peran karakter */}
      <p className="text-sm text-gray-500">{role}</p>
    </div>
  );
}
