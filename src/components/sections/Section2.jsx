export default function Section2() {
  return (
    <section
      id="about"
      className="min-h-[85vh] bg-white py-20 flex flex-col items-center justify-center scroll-mt-20"
    >
      {/* Judul */}
      <div className="mb-10 flex flex-col gap-2">
        <p className="text-center text-2xl font-bold text-gray-800">About Me</p>
        <div className="flex items-center justify-center gap-3">
          <div className="h-1 w-16 border-b-2 border-orange-500" />
          <div className="h-3 w-3 rotate-45 bg-orange-500" />
          <div className="h-1 w-16 border-b-2 border-orange-500" />
        </div>
      </div>

      {/* Isi */}
      <div className="w-4/5 md:w-1/2 text-center">
        <p className="text-xl font-semibold text-orange-600">Pelajar & Web Enthusiast</p>
        <p className="mb-3 text-2xl font-bold capitalize text-gray-800">
          Sedang Belajar Membuat Website Keren! 🚀
        </p>
        <p className="italic text-gray-700 leading-relaxed">
          Halo semuanya! Aku Achmad, seorang pelajar yang sedang belajar web development. 
          Meskipun masih tahap belajar, aku udah bikin beberapa website sederhana yang belum sempat direalisasikan. 
          Aku suka eksplorasi teknologi baru dan pengen terus berkembang di bidang programming. 
          Semoga kedepannya bisa bikin project yang lebih keren lagi! 💪
        </p>
        <div className="mt-6 inline-block rounded-lg bg-orange-100 px-4 py-2">
          <p className="text-sm font-medium text-orange-700">
            ⚡ Currently Learning: HTML, CSS, JavaScript & More!
          </p>
        </div>
      </div>
    </section>
  );
}
