import { useEffect, useRef, useState } from 'react'
import Navbar from '../components/Navbar'
import Particles from '../components/Particles'
import Hero from '../components/Hero'
import ScrollSections from '../components/ScrollSections'
import Footer from '../components/Footer'

export default function Home() {
  const audioRef = useRef(null)
  const [playing, setPlaying] = useState(false)
  const [theme, setTheme] = useState('dark')

  useEffect(() => {
    if (!audioRef.current) return
    audioRef.current.volume = 0.2
  }, [])

  const toggleAudio = () => {
    if (!audioRef.current) return
    if (playing) {
      audioRef.current.pause()
      setPlaying(false)
    } else {
      audioRef.current.play()
      setPlaying(true)
    }
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar onToggleAudio={toggleAudio} isPlaying={playing} onToggleTheme={() => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))} theme={theme} />
      <Particles />
      <Hero />

      <section id="learn" className="relative">
        <ScrollSections />
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24">
        <div className="grid gap-10 md:grid-cols-2 items-center">
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Cover Reveal</h3>
            <p className="mt-2 text-cyan-200/90">An elegant, ominous design—etched circuits and runes glowing faintly. Hover to unveil.</p>
            <div className="mt-6 group relative aspect-[3/4] w-full overflow-hidden rounded-xl border border-white/10">
              <img src="https://images.unsplash.com/photo-1526312426976-593c2e615b9f?q=80&w=1200&auto=format&fit=crop" className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
            <h3 className="text-2xl font-semibold">Pre-order</h3>
            <p className="mt-2 text-cyan-200/90">Secure your copy and step into the world of Le Péril before the breach widens.</p>
            <a id="preorder" href="#" className="mt-6 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-300 px-6 py-3 font-semibold text-slate-900 shadow-[0_0_30px_rgba(56,189,248,0.35)]">Reserve Now</a>
          </div>
        </div>
      </section>

      <Footer />

      <audio ref={audioRef} loop src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_f3c3b0b7e1.mp3?filename=ambient-piano-112191.mp3" />
    </div>
  )
}
