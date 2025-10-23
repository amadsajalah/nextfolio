export default function Footer() {
  return (
    <footer className="relative flex flex-col items-center justify-center gap-3 border-t border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 py-10">
      <p className="text-sm text-gray-600">
        © {new Date().getFullYear()} ACHMAD — Made with 💪 and ☕ | Inspired by One Piece
      </p>
      <p className="text-xs text-gray-500">
        "The sea is vast, and there's always more to learn!" 🌊
      </p>

      <div className="absolute right-0 bottom-0 left-0 h-[2px] bg-gradient-to-r from-transparent via-orange-400 to-transparent" />
    </footer>
  );
}