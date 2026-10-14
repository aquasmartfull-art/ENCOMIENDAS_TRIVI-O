import { useEffect, useState } from 'react'
import Logo from './Logo'
import { MenuIcon, CloseIcon, WhatsAppIcon } from './Icons'
import { waLink } from '../data/config'

const links = [
  { href: '#servicios', label: 'Servicios' },
  { href: '#cotizar', label: 'Cotizar' },
  { href: '#cobertura', label: 'Cobertura' },
  { href: '#contacto', label: 'Contacto' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? 'bg-brand-950/95 shadow-lg backdrop-blur' : 'bg-transparent'}`}>
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-sm font-bold text-white/85 transition hover:text-lime-brand">{l.label}</a>
            </li>
          ))}
        </ul>
        <a
          href={waLink('¡Hola Super Envíos Triviño! 👋 Quiero más información sobre sus servicios.')}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden items-center gap-2 rounded-full bg-whatsapp px-4 py-2 text-sm font-extrabold text-white shadow-md transition hover:brightness-110 md:inline-flex"
        >
          <WhatsAppIcon className="h-4 w-4" /> WhatsApp
        </a>
        <button onClick={() => setOpen(!open)} className="rounded-lg p-2 text-white md:hidden" aria-label="Menú">
          {open ? <CloseIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <ul className="space-y-1 border-t border-white/10 px-4 pb-4 pt-2 md:hidden">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)} className="block rounded-lg px-3 py-2.5 font-bold text-white hover:bg-white/10">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  )
}
