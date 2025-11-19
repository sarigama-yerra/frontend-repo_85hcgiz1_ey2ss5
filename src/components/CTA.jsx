import React from 'react'

function CTA() {
  return (
    <section id="cta" className="relative py-20 sm:py-24">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <div className="rounded-3xl border border-white/20 bg-white/10 p-10 backdrop-blur-2xl shadow-2xl">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
            Say yes to living water
          </h3>
          <p className="mx-auto mt-3 max-w-2xl text-blue-100/90">
            Join thousands weaving a brighter timeline through simple, sacred hydration. Own the Lumivitae bottle and anchor a daily ritual of light.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#order" className="inline-flex items-center justify-center rounded-xl bg-cyan-300 text-slate-900 px-8 py-3 font-semibold shadow-xl shadow-cyan-400/40 transition hover:-translate-y-0.5">
              Get Lumivitae
            </a>
            <a href="#details" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-8 py-3 font-semibold text-white backdrop-blur transition hover:bg-white/10">
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA