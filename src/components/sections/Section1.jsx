export default function Section1() {
  return (
    <section
      id="home"
      className="flex h-screen items-center justify-center bg-gradient-to-b from-orange-50 via-white to-gray-50"
    >
      <div className="flex flex-col items-center">
        {/* Teks sambutan */}
        <p className="mb-2 text-xl text-gray-700">⛵ Welcome Nakama!! to</p>

        {/* Teks utama */}
        <div className="flex items-center gap-2">
          <p className="cursor-default text-8xl font-bold text-orange-600">MY</p>
          <p
            className="cursor-none text-8xl font-bold text-transparent transition-all duration-500 hover:text-orange-500"
            style={{
              WebkitTextStroke: '3px #ea580c',
            }}
          >
            JOURNEY
          </p>
          <span className="text-6xl">🏴‍☠️</span>
        </div>

        {/* Nama */}
        <p className="mt-4 text-2xl font-semibold text-gray-600">- ACHMAD -</p>
      </div>
    </section>
  );
}
