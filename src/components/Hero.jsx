export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center px-6">

      <div className="absolute top-24 left-16 text-5xl rotate-12">
        ⭐
      </div>

      <div className="absolute top-40 right-16 text-5xl -rotate-12">
        ☁️
      </div>

      <div className="absolute bottom-28 left-20 text-5xl">
        🌼
      </div>

      <div className="absolute bottom-24 right-20 text-5xl">
        ✨
      </div>

      <div className="text-center">

        <div className="inline-block bg-[#F6DD6A] border-4 border-black rounded-[25px] px-6 py-2 rotate-[-2deg] shadow-[4px_4px_0px_black]">
          AI Engineering Student
        </div>

        <h1 className="text-7xl md:text-9xl mt-8 mb-6">
          Hi, I'm Arya
        </h1>

        <p className="text-2xl md:text-3xl max-w-2xl mx-auto">
          Building Computer Vision &
          AI Applications
        </p>

        <button className="mt-10 bg-[#E8A0C8] border-4 border-black px-8 py-4 rounded-full text-2xl shadow-[4px_4px_0px_black] hover:translate-x-1 hover:translate-y-1 transition-all">
          View Projects →
        </button>

      </div>
    </section>
  );
}