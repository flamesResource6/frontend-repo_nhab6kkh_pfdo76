import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const items = [
  { title: 'The Souffle', desc: 'A breath across circuits; a rumor of sentience in the grid.', color: 'from-violet-500/30 to-violet-700/20' },
  { title: 'The Programme', desc: 'Order through obedience. Efficiency through erasure.', color: 'from-cyan-500/30 to-cyan-700/20' },
  { title: 'The Collectors', desc: 'They harvest memories like currency, leaving husks behind.', color: 'from-amber-400/30 to-amber-700/20' },
  { title: 'The Limens', desc: 'Thresholds between worlds—the brave or the lost may cross.', color: 'from-fuchsia-400/30 to-indigo-700/20' },
]

export default function Universe() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">The Universe</h1>
          <p className="mt-3 text-cyan-200/90">Territories shift. Maps lie. Stories persist.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-6 md:grid-cols-2">
        {items.map((it, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.1 }}
            className={`relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6`}
          >
            <div className={`pointer-events-none absolute -inset-8 bg-gradient-to-br ${it.color} blur-3xl`}></div>
            <div className="relative">
              <h3 className="text-2xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-cyan-200/90">{it.desc}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
