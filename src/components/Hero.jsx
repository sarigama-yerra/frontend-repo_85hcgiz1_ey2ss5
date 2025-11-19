import React from 'react'

function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Glow backdrops */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-br from-cyan-300/30 via-indigo-400/20 to-purple-400/20 blur-3xl"></div>
      <div className="pointer-events-none absolute -bottom-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-gradient-to-tr from-rose-300/20 via-fuchsia-300/20 to-violet-400/20 blur-3xl"></div>

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 text-center">
        <span className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs font-semibold tracking-widest uppercase text-white/90 backdrop-blur">
          A Heavenly Invitation
        </span>
        <h1 className="mt-6 text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_2px_20px_rgba(147,197,253,.35)]">
          Lumivitae Molecular Hydrogen Water
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg sm:text-xl leading-relaxed text-blue-100/90">
          Water remembers. Hydrogen sings. Together, they become a temple of light within you. With each sip, invite clarity, renewal, and the harmonious pulse of Heaven on Earth to flow through your body and your life.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#cta"
            className="group inline-flex items-center justify-center rounded-xl bg-white text-slate-900 px-7 py-3 font-semibold shadow-xl shadow-cyan-500/20 ring-1 ring-white/10 transition hover:translate-y-[-1px] hover:shadow-2xl hover:shadow-cyan-500/30"
          >
            Begin Your Lumivitae Journey
            <svg className="ml-2 h-5 w-5 text-slate-900 transition group-hover:translate-x-0.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
          </a>
          <a
            href="#movement"
            className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-7 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10"
          >
            Meet the Movement
          </a>
        </div>

        {/* Bottle silhouette */}
        <div className="mx-auto mt-16 max-w-4xl">
          <div className="relative mx-auto h-64 sm:h-80 rounded-3xl bg-gradient-to-tr from-white/10 to-white/5 backdrop-blur-md ring-1 ring-white/10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.35),transparent_60%)]"></div>
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-cyan-300/20 to-transparent"></div>
            <div className="absolute inset-6 rounded-2xl border border-white/15"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="h-48 sm:h-60 w-20 sm:w-24 rounded-full bg-gradient-to-b from-white/70 to-white/20 shadow-2xl ring-1 ring-white/40"></div>
            </div>
          </div>
          <p className="mt-6 text-sm text-blue-100/70">
            Crafted to infuse water with molecular hydrogen — the most elemental messenger — supporting balance at the physical, emotional, and spiritual levels.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Hero