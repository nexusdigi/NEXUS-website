export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      <section className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center">
        
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,153,255,0.15),transparent_70%)]" />

        <h1 className="text-6xl md:text-8xl font-bold tracking-tight z-10">
          NEXUS
        </h1>

        <p className="mt-6 max-w-2xl text-lg md:text-2xl text-gray-300 z-10">
          Digital infrastructure for modern operations,
          support systems and enterprise workflows.
        </p>

        <div className="mt-10 flex gap-4 z-10">
          <button className="px-6 py-3 rounded-2xl bg-white text-black font-medium hover:scale-105 transition">
            Get Started
          </button>

          <button className="px-6 py-3 rounded-2xl border border-white/20 backdrop-blur hover:bg-white/10 transition">
            Contact
          </button>
        </div>

        <div className="absolute w-[600px] h-[600px] bg-cyan-500/10 blur-3xl rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </section>
    </main>
  );
}