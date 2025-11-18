export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/60 py-12">
      <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="text-cyan-200/70">© {new Date().getFullYear()} Le Péril — All rights reserved.</div>
        <div className="flex items-center gap-4 text-cyan-200/70">
          <a href="#" className="hover:text-white transition">Twitter</a>
          <a href="#" className="hover:text-white transition">Instagram</a>
          <a href="#" className="hover:text-white transition">Newsletter</a>
        </div>
      </div>
    </footer>
  )
}
