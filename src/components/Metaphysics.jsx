import React from 'react'

function Metaphysics() {
  const points = [
    {
      title: 'The Song of Hydrogen',
      body:
        'The first note in the cosmic chord. Hydrogen is the original spark, the breath of stars. In water, it becomes a messenger of harmony, guiding your cells back to their native rhythm.'
    },
    {
      title: 'Water as Living Memory',
      body:
        'Water is a crystalline librarian. Structure it with intention, it mirrors Heaven on Earth within you. Lumivitae invites coherence — a geometry of grace in every sip.'
    },
    {
      title: 'Body, Temple of Light',
      body:
        'When hydrogen enters structured water, oxidative noise quiets. The body remembers its blueprint. Vitality becomes devotion. Wellness becomes a way of prayer.'
    }
  ]

  return (
    <section className="relative py-20 sm:py-28">
      <div className="absolute inset-0 bg-[radial-gradient(60%_40%_at_50%_0%,rgba(186,230,253,0.15),transparent)]" />
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-white">
          Metaphysics of Water + Light
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-center text-blue-100/90">
          This is more than hydration. It is remembrance. It is the subtle art of becoming who you truly are — a being of water and light.
        </p>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {points.map((p) => (
            <div key={p.title} className="group rounded-2xl border border-white/15 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10">
              <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-cyan-300/70 to-violet-400/70 text-slate-900 font-bold shadow ring-1 ring-white/30">
                ✶
              </div>
              <h3 className="text-xl font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-blue-100/80">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Metaphysics