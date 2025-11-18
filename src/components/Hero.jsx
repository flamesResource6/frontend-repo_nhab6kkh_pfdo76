import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <div className="relative h-[92vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-slate-950"></div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-6">
        <div className="max-w-2xl">
          <motion.h1
            className="text-4xl sm:text-6xl font-extrabold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-cyan-200 to-amber-200 drop-shadow-[0_0_12px_rgba(167,139,250,0.35)]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Le Péril
          </motion.h1>

          <motion.p
            className="mt-6 text-lg sm:text-2xl text-cyan-100/90"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1.2 }}
          >
            “Dystopia. Secrets. A collapsing world. One girl who could change everything.”
          </motion.p>

          <motion.div
            className="mt-10 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.1 }}
          >
            <a href="#preorder" className="group relative inline-flex items-center justify-center rounded-2xl px-6 py-3 text-slate-950 font-semibold">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-violet-400 via-cyan-300 to-amber-300 blur-md opacity-70 group-hover:opacity-90 transition"></span>
              <span className="relative rounded-2xl bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-300 px-6 py-3">Pre-order</span>
            </a>
            <a href="#learn" className="inline-flex items-center rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-3 text-cyan-200/90 hover:text-white transition">Learn More</a>
            <a href="/excerpt" className="inline-flex items-center rounded-2xl border border-white/10 bg-slate-900/70 px-6 py-3 text-cyan-200/90 hover:text-white transition">Read Excerpt</a>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
