import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Universe from './pages/Universe'
import Characters from './pages/Characters'
import Themes from './pages/Themes'
import Excerpt from './pages/Excerpt'
import Author from './pages/Author'
import Contact from './pages/Contact'

function AppRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/universe" element={<Universe />} />
        <Route path="/characters" element={<Characters />} />
        <Route path="/themes" element={<Themes />} />
        <Route path="/excerpt" element={<Excerpt />} />
        <Route path="/author" element={<Author />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return <AppRoutes />
}
