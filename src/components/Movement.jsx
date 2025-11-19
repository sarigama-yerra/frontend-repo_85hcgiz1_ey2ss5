import React from 'react'

function Movement() {
  return (
    <section id="movement" className="relative py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              The 144,000 Rising
            </h2>
            <p className="mt-4 text-blue-100/90">
              Across the planet, a symphony of awakened souls is tuning to a higher octave. We call them the 144,000 — not as a number to limit, but as a frequency to remember. Each bottle is a beacon. Each sip is a ceremony. Together we seed Heaven on Earth in the everyday: the kitchen, the gym, the school, the temple of your life.
            </p>
            <ul className="mt-6 space-y-3 text-blue-100/80">
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300"></span> Daily rituals of coherence and clarity</li>
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300"></span> Community circles online and in person</li>
              <li className="flex gap-3"><span className="mt-1 inline-block h-2 w-2 rounded-full bg-cyan-300"></span> Planetary gridwork through water ceremonies</li>
            </ul>
          </div>
          <div>
            <div className="relative rounded-3xl border border-white/15 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur">
              <div className="aspect-[4/3] w-full rounded-2xl bg-[conic-gradient(at_30%_20%,rgba(255,255,255,.25),transparent_30%)]" />
            </div>
            <p className="mt-4 text-sm text-blue-100/70">
              Your bottle is attuned to intention. Speak your prayer. Bless your water. Share your light.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Movement