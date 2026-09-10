import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { nav, profile } from '../../data/portfolioData.js'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNav = (id) => {
    setOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-colors duration-300 ${
        scrolled ? 'bg-paper/90 backdrop-blur border-b border-line' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-10">
        <button
          onClick={() => handleNav('top')}
          className="font-mono text-sm font-medium tracking-tight text-ink"
        >
          M.SADAB<span className="text-copper">_</span>
        </button>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.slice(1).map((item) => (
            <li key={item.id}>
              <button
                onClick={() => handleNav(item.id)}
                className="font-mono text-xs text-inkSoft transition-colors hover:text-copper"
              >
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden border border-ink px-4 py-2 font-mono text-xs text-ink transition-colors hover:border-copper hover:text-copper md:inline-block"
        >
          Say hello
        </a>

        <button
          className="text-ink md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-line bg-paper md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {nav.slice(1).map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => handleNav(item.id)}
                    className="w-full py-2 text-left font-mono text-sm text-inkSoft hover:text-copper"
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
