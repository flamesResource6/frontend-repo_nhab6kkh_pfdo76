import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

export default function Author() {
  const milestones = [
    { year: '2019', text: 'First spark. A city at the edge, a girl at the threshold.' },
    { year: '2021', text: 'Draft survives the Programme. The Collectors do not.' },
    { year: '2023', text: 'Revisions, found family, truth sharpened.' },
    { year: '2025', text: 'Le Péril breathes.' },
  ]
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-6 grid gap-10 md:grid-cols-2 items-center">
          <div>
            <h1 className="text-3xl sm:text-5xl font-bold">About the Author</h1>
            <p className="mt-3 text-cyan-200/90">Warmth in a cold world. Stories as shelter.</p>
          </div>
          <div className="relative h-64 w-full overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60">
            <img src="https://images.unsplash.com/photo-1531123897727-8f129e1688ce?q=80&w=1200&auto=format&fit=crop" className="h-full w-full object-cover opacity-80" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent"></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6">
          <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(167,139,250,0.25),transparent_40%),radial-gradient(circle_at_80%_70%,rgba(56,189,248,0.25),transparent_40%)] blur-2xl"></div>
          <div className="grid gap-6 md:grid-cols-4">
            {milestones.map((m, i) => (
              <motion.div key={m.year} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <div className="text-amber-200/90">{m.year}</div>
                <div className="mt-1 font-medium">{m.text}</div>
              </motion.div>
            ))}
          </div>
          <div className="mt-8">
            <a href="#" className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-300 px-6 py-3 font-semibold text-slate-900">Follow the journey</a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
