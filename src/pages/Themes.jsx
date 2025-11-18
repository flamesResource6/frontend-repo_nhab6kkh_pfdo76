import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const themes = [
  { title: 'Dystopian Fiction', desc: 'Oppressive systems and the people who survive them.' },
  { title: 'Found Family', desc: 'Threads of light between those who choose each other.' },
  { title: 'Self-Discovery', desc: 'Fragments reassemble; a self emerges.' },
  { title: 'Ethical Dilemmas', desc: 'Which cost can you live with?' },
  { title: 'Political Stakes', desc: 'Cities under tension, futures in negotiation.' },
  { title: 'Slow Burn Romance', desc: 'Almost-touch in the static of a ruined sky.' },
]

export default function Themes() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Themes</h1>
          <p className="mt-3 text-cyan-200/90">Symbols, echoes, and questions that haunt.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {themes.map((t, i) => (
          <motion.div
            key={t.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6"
          >
            <div className="pointer-events-none absolute -inset-10 -z-10 bg-[radial-gradient(circle_at_30%_20%,rgba(167,139,250,0.25),transparent_40%),radial-gradient(circle_at_70%_60%,rgba(56,189,248,0.25),transparent_40%)] blur-2xl"></div>
            <h3 className="text-xl font-semibold">{t.title}</h3>
            <p className="mt-2 text-cyan-200/90">{t.desc}</p>
            <div className="mt-6 h-32 rounded-xl bg-gradient-to-br from-white/5 to-white/0"></div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
