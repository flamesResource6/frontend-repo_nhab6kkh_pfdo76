import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

const sample = `Aylin stepped onto the threshold and the world held its breath.\n\nThe city beyond the Límens shimmered, half-remembered, half-erased, as if the Programme had pulled a sheet of glass over it and left fingerprints. The Souffle thrummed—a quiet chord in her ribs.\n\nShe wasn’t chosen. She was choosing.`

export default function Excerpt() {
  const [fontSize, setFontSize] = useState(20)

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-6">
        <div className="mx-auto max-w-3xl px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Excerpt</h1>
          <p className="mt-3 text-cyan-200/90">A quiet space to read.</p>
        </div>
      </section>

      <section className="relative mx-auto max-w-3xl px-6 pb-24">
        <div className="pointer-events-none absolute -inset-10 -z-10 bg-[url('https://images.unsplash.com/photo-1526404428533-37aa80d1169b?q=80&w=1974&auto=format&fit=crop')] bg-cover bg-center opacity-10 blur-lg"></div>

        <div className="mb-4 flex items-center justify-between">
          <div className="text-cyan-200/80">Font size</div>
          <input type="range" min="16" max="28" value={fontSize} onChange={(e) => setFontSize(Number(e.target.value))} className="w-40" />
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 leading-relaxed shadow-[0_0_40px_rgba(167,139,250,0.15)]" style={{ fontSize }}>
          {sample.split('\n').map((p, i) => (
            <p key={i} className="mb-5 first:mt-0 animate-[fadeIn_0.8s_ease_forwards] opacity-0" style={{ animationDelay: `${i * 120}ms` }}>
              {p}
            </p>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  )
}
