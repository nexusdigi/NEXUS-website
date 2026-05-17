import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black text-white overflow-hidden">
      {/* NAVBAR */}
      <header className="fixed top-0 left-0 z-50 w-full border-b border-white/5 bg-black/20 backdrop-blur-2xl">
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6">
          {/* Small Logo */}
          <a href="#" className="flex items-center">
            <Image
              src="/logo.png"
              alt="NEXUS Logo"
              width={140}
              height={56}
              className="h-auto w-[120px] md:w-[140px] opacity-95 transition duration-300 hover:opacity-100"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-12 rounded-full border border-white/10 bg-white/[0.03] px-10 py-4 shadow-[0_0_40px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
            <a
              href="#"
              className="text-sm font-medium tracking-[0.08em] text-white transition hover:text-cyan-400"
            >
              Home
            </a>

            <a
              href="#products"
              className="text-sm font-medium tracking-[0.08em] text-gray-300 transition hover:text-cyan-400"
            >
              Products
            </a>

            <a
              href="#contact"
              className="text-sm font-medium tracking-[0.08em] text-gray-300 transition hover:text-cyan-400"
            >
              Contact
            </a>
          </nav>

          {/* Contact Button */}
          <a
            href="#contact"
            className="hidden md:flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-6 py-3 text-sm font-medium tracking-wide text-cyan-300 shadow-[0_0_25px_rgba(34,211,238,0.12)] backdrop-blur transition duration-300 hover:scale-105 hover:bg-cyan-400/20 hover:text-white"
          >
            Get in Touch
          </a>
        </div>
      </header>
      {/* HERO */}
      <section className="relative min-h-screen flex flex-col items-center justify-center px-6 pb-12 pt-44 text-center overflow-hidden">
        {/* Cyberpunk Background */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(0,180,255,0.24),transparent_38%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.12),transparent_58%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1050px] h-[1050px] rounded-full bg-cyan-400/10 blur-3xl" />
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1200px] h-[420px] bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.22),transparent_68%)] blur-xl" />

        {/* Digital Horizon */}
        <div className="absolute bottom-[220px] left-1/2 h-[1px] w-[1200px] -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/80 to-transparent shadow-[0_0_45px_rgba(34,211,238,0.8)]" />
        <div className="absolute bottom-0 left-1/2 h-[320px] w-[1400px] -translate-x-1/2 opacity-40 [background-image:linear-gradient(rgba(34,211,238,0.28)_1px,transparent_1px),linear-gradient(90deg,rgba(34,211,238,0.18)_1px,transparent_1px)] [background-size:42px_42px] [transform:translateX(-50%)_perspective(500px)_rotateX(62deg)] origin-bottom" />

        {/* Neon Arcs */}
        <div className="absolute bottom-[180px] left-1/2 h-[420px] w-[1050px] -translate-x-1/2 rounded-t-full border-t border-cyan-400/25" />
        <div className="absolute bottom-[178px] left-1/2 h-[520px] w-[1250px] -translate-x-1/2 rounded-t-full border-t border-blue-500/15" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(0,0,0,0.05),rgba(0,0,0,0.58)_72%,rgba(0,0,0,0.94))]" />

        <div className="relative z-10 flex w-full max-w-7xl flex-col items-center">
          

          {/* Headline */}
          <h1 className="mt-10 max-w-6xl text-5xl font-bold leading-[0.96] tracking-[-0.04em] text-white md:text-8xl">
            The Future of
            <br />
            <span className="text-cyan-400 drop-shadow-[0_0_35px_rgba(34,211,238,0.45)]">
              Digital Operations
            </span>
          </h1>

          {/* Subtitle */}
          <p className="mt-8 max-w-4xl text-base leading-relaxed text-gray-300 md:text-xl">
            We build intelligent digital infrastructure that connects people,
            processes and systems. From support requests and service workflows to
            inspections, QR tracking and operational analytics — NEXUS helps teams
            work faster, smarter and with full transparency.
          </p>

          {/* Buttons */}
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group rounded-2xl bg-cyan-400 px-9 py-4 font-semibold text-black shadow-[0_0_45px_rgba(34,211,238,0.42)] transition duration-300 hover:scale-105 hover:bg-cyan-300">
              Launch Platform
              <span className="ml-5 inline-block transition group-hover:translate-x-1">→</span>
            </button>

            <button className="group rounded-2xl border border-cyan-400/30 bg-black/35 px-9 py-4 font-semibold text-white backdrop-blur transition duration-300 hover:scale-105 hover:bg-white/10">
              Explore Products
              <span className="ml-5 inline-block transition group-hover:translate-x-1">→</span>
            </button>
          </div>

          {/* Product Cards */}
          <div id="products" className="mt-14 grid w-full max-w-6xl grid-cols-1 gap-7 lg:grid-cols-2">
            <div className="group relative overflow-hidden rounded-3xl border border-cyan-400/35 bg-black/45 p-7 text-left shadow-[0_0_60px_rgba(34,211,238,0.12)] backdrop-blur-xl md:p-9">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
              <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl" />

              <div className="flex flex-col items-center text-center gap-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/NexusSupportLogo.png"
                    alt="NEXUS Support Logo"
                    width={180}
                    height={180}
                    className="h-auto w-[170px] drop-shadow-[0_0_35px_rgba(34,211,238,0.25)] transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    NEXUS SUPPORT
                  </h2>
                  <div className="mt-4 h-px w-28 bg-gradient-to-r from-transparent via-cyan-400 to-transparent" />
                  <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-300 md:text-lg">
                    A smart support and ticketing platform for customer requests,
                    emergency cases and internal service teams. Create cases, scan
                    QR or barcodes, upload photos, chat with support and track each
                    status update in real time.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-center">Ticketing</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-center">Live Chat</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-center">Photo Uploads</span>
                <span className="rounded-full border border-cyan-400/20 bg-cyan-400/5 px-4 py-2 text-center">Analytics</span>
              </div>
            </div>

            <div className="group relative overflow-hidden rounded-3xl border border-purple-400/35 bg-black/45 p-7 text-left shadow-[0_0_60px_rgba(168,85,247,0.12)] backdrop-blur-xl md:p-9">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
              <div className="absolute -left-20 top-1/2 h-56 w-56 -translate-y-1/2 rounded-full bg-purple-400/10 blur-3xl" />

              <div className="flex flex-col items-center text-center gap-8">
                <div className="flex items-center justify-center">
                  <Image
                    src="/NexusInspectLogo.png"
                    alt="NEXUS Inspect Logo"
                    width={180}
                    height={180}
                    className="h-auto w-[170px] drop-shadow-[0_0_35px_rgba(168,85,247,0.25)] transition duration-300 group-hover:scale-105"
                  />
                </div>

                <div className="flex flex-col items-center">
                  <h2 className="text-3xl font-bold tracking-tight text-white">
                    NEXUS INSPECT
                  </h2>
                  <div className="mt-4 h-px w-28 bg-gradient-to-r from-transparent via-purple-400 to-transparent" />
                  <p className="mt-6 max-w-xl text-center text-base leading-relaxed text-gray-300 md:text-lg">
                    A digital inspection system for technicians, service teams and
                    field operations. Scan assets, follow checklists, document
                    findings with photos, generate reports and keep every process
                    transparent from start to finish.
                  </p>
                </div>
              </div>

              <div className="mt-10 flex flex-wrap items-center justify-center gap-3 text-sm text-gray-300">
                <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-center">QR & Barcode</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-center">Checklists</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-center">Reports</span>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/5 px-4 py-2 text-center">Analytics</span>
              </div>
            </div>
          </div>
        </div>
        {/* CONTACT */}
        <div
          id="contact"
          className="relative z-10 mt-24 flex w-full max-w-5xl flex-col items-center rounded-[2rem] border border-white/10 bg-white/[0.03] px-8 py-16 backdrop-blur-xl"
        >
          <h2 className="text-4xl font-bold tracking-tight text-white md:text-5xl">
            Let’s Build the Future
          </h2>

          <p className="mt-6 max-w-2xl text-center text-lg leading-relaxed text-gray-400">
            NEXUS develops intelligent digital platforms for modern support,
            inspection and enterprise operations.
          </p>

          <a
            href="mailto:hello@nexusdigi.cc"
            className="mt-10 rounded-2xl bg-cyan-400 px-8 py-4 font-semibold text-black shadow-[0_0_45px_rgba(34,211,238,0.35)] transition hover:scale-105 hover:bg-cyan-300"
          >
            hello@nexusdigi.cc
          </a>
        </div>
      </section>
    </main>
  );
}