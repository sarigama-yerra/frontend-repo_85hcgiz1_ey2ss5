import React from 'react'
import Hero from './components/Hero'
import Metaphysics from './components/Metaphysics'
import Movement from './components/Movement'
import CTA from './components/CTA'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      {/* soft starfield */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(147,197,253,.08),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(167,139,250,.06),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(125,211,252,.07),transparent_40%)]" />

      <header className="relative mx-auto max-w-6xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-gradient-to-br from-cyan-300 to-violet-400 shadow ring-1 ring-white/40" />
          <span className="text-sm font-semibold tracking-widest uppercase text-white/80">Lumivitae</span>
        </div>
        <nav className="hidden sm:flex items-center gap-6 text-sm text-white/80">
          <a href="#movement" className="hover:text-white">Movement</a>
          <a href="#cta" className="hover:text-white">Get Bottle</a>
        </nav>
      </header>

      <main className="relative">
        <Hero />
        <Metaphysics />
        <Movement />
        <CTA />

        {/* Details */}
        <section id="details" className="relative py-20 sm:py-28">
          <div className="mx-auto max-w-6xl px-6">
            <div className="grid gap-10 lg:grid-cols-3">
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-lg font-semibold">Molecular Hydrogen</h4>
                <p className="mt-2 text-blue-100/80">Infuses your water with H₂ — a gentle antioxidant messenger that supports balance and recovery while inviting inner calm.</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-lg font-semibold">Crystal-Clear Ritual</h4>
                <p className="mt-2 text-blue-100/80">One touch activation. A two to five minute ceremony that turns ordinary water into living remembrance.</p>
              </div>
              <div className="rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur">
                <h4 className="text-lg font-semibold">Crafted for the Path</h4>
                <p className="mt-2 text-blue-100/80">Durable, elegant, travel-ready. Bring coherence to your day at home, work, or on the pilgrimage of life.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Order */}
        <section id="order" className="relative py-16">
          <div className="mx-auto max-w-3xl px-6">
            <div className="rounded-3xl border border-white/20 bg-white/10 p-8 sm:p-10 backdrop-blur-2xl">
              <div className="flex flex-col items-center text-center">
                <h3 className="text-2xl sm:text-3xl font-extrabold">Reserve Your Bottle</h3>
                <p className="mt-3 text-blue-100/90">Limited availability. Join the wave and receive ceremony guidance and community invitations.</p>
                <form className="mt-6 grid w-full gap-3 sm:grid-cols-[1fr_auto]">
                  <input type="email" required placeholder="you@lightmail.com" className="w-full rounded-xl border border-white/20 bg-white/70 px-4 py-3 text-slate-900 placeholder-slate-500 focus:outline-none" />
                  <button type="submit" className="rounded-xl bg-cyan-300 px-6 py-3 font-semibold text-slate-900 shadow-xl shadow-cyan-400/40 transition hover:-translate-y-0.5">Notify Me</button>
                </form>
                <p className="mt-3 text-xs text-white/70">By joining, you align with our mission to nurture Heaven on Earth through water, light, and community.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="relative border-t border-white/10 py-10">
        <div className="mx-auto max-w-6xl px-6 flex flex-col sm:flex-row items-center justify-between gap-6 text-sm text-white/70">
          <p>© {new Date().getFullYear()} Lumivitae Collective</p>
          <div className="flex items-center gap-6">
            <a href="#movement" className="hover:text-white">The 144,000</a>
            <a href="#order" className="hover:text-white">Reserve</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App