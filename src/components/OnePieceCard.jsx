export default function OnePieceCard({ character, role, emoji, color }) {
  return (
    <div className={`flex flex-col items-center gap-2 rounded-xl border-2 ${color} bg-white p-6 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl`}>
      {/* Emoji karakter */}
      <span className="text-5xl">{emoji}</span>
      
      {/* Nama karakter */}
      <p className="text-lg font-bold text-gray-800">{character}</p>
      
      {/* Role/jabatan */}
      <p className="text-sm text-gray-600">{role}</p>
    </div>
  );
}