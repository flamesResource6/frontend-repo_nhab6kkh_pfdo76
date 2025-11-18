import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollSections() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end end'] })
  const y1 = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])
  const y2 = useTransform(scrollYProgress, [0, 1], ['0%', '10%'])

  const sections = [
    {
      title: 'A Collapsing World',
      text: 'Cities flicker under surveillance. Resources dwindle. Secrets seep into the streets.',
    },
    {
      title: 'The Souffle',
      text: 'A whisper through the wires—breath of the world or myth of the lost?',
    },
    {
      title: 'Found Family',
      text: 'Aylin finds kinship where the Programme expects none: loyalty forged in fire.',
    },
  ]

  return (
    <div ref={ref} className="relative overflow-hidden">
      <motion.div style={{ y: y1 }} className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-violet-500/20 blur-3xl" />
      <motion.div style={{ y: y2 }} className="pointer-events-none absolute -right-16 top-64 h-72 w-72 rounded-full bg-cyan-400/20 blur-3xl" />

      <div className="mx-auto max-w-6xl px-6 py-24">
        <div className="grid gap-10 md:grid-cols-3">
          {sections.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.1 }}
              className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl shadow-[0_0_40px_rgba(56,189,248,0.15)]"
            >
              <div className="text-sm tracking-widest text-amber-200/80">CHAPTER {i + 1}</div>
              <h3 className="mt-2 text-2xl font-semibold text-white">{s.title}</h3>
              <p className="mt-3 text-cyan-200/90">{s.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
