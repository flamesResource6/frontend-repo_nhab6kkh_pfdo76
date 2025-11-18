import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const chars = ['Aylin', 'Cal', 'Tobias', 'Mo', 'Pape', 'Iris', 'Joseph', 'Maxine']

export default function Characters() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Found Family</h1>
          <p className="mt-3 text-cyan-200/90">Loyalty, healing, and evolution—bound by choice.</p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {chars.map((c, i) => (
          <motion.div
            key={c}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ delay: i * 0.05 }}
            className="group relative h-72 overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60"
          >
            <img src={`https://source.unsplash.com/collection/404339/400x400?sig=${i}`} className="h-full w-full object-cover opacity-70 transition duration-700 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute inset-0 flex items-end p-4">
              <div className="w-full">
                <div className="text-lg font-semibold">{c}</div>
                <div className="text-cyan-200/80">“We decided to be us.”</div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <Footer />
    </div>
  )
}
