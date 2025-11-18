import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Contact() {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const submit = (e) => {
    e.preventDefault()
    setSent(true)
    setTimeout(() => setSent(false), 3000)
    setEmail(''); setName(''); setMessage('')
  }

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navbar />

      <section className="pt-28 pb-10">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl sm:text-5xl font-bold">Join the Resistance</h1>
          <p className="mt-3 text-cyan-200/90">Minimal, elegant, and secure.</p>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 pb-24">
        <form onSubmit={submit} className="relative overflow-hidden rounded-2xl border border-white/10 bg-slate-900/60 p-6 backdrop-blur-xl">
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm text-cyan-200/80">Name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 outline-none focus:border-cyan-400/40" />
            </div>
            <div>
              <label className="text-sm text-cyan-200/80">Email</label>
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 outline-none focus:border-cyan-400/40" />
            </div>
          </div>
          <div className="mt-4">
            <label className="text-sm text-cyan-200/80">Message</label>
            <textarea rows={5} value={message} onChange={(e) => setMessage(e.target.value)} className="mt-1 w-full rounded-xl border border-white/10 bg-slate-950/60 p-3 outline-none focus:border-cyan-400/40" />
          </div>
          <div className="mt-6 flex items-center justify-between">
            <button className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-violet-500 via-cyan-400 to-amber-300 px-6 py-3 font-semibold text-slate-900">Send</button>
            <div className="text-cyan-200/80">or subscribe: <a href="#" className="underline hover:text-white">Newsletter</a></div>
          </div>
          {sent && (
            <div className="mt-4 rounded-xl border border-white/10 bg-emerald-400/10 p-3 text-emerald-200">Message sent. We will reach out soon.</div>
          )}
        </form>
      </section>

      <Footer />
    </div>
  )
}
