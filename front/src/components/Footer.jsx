import Logo from './Logo'
import { WHATSAPP_NUMBERS } from '../data/config'

export default function Footer() {
  return (
    <footer className="border-t-4 border-lime-brand bg-black py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 md:flex-row md:text-left">
        <div>
          <Logo />
          <p className="mt-2 text-xs font-bold uppercase tracking-widest text-white/50">Encomiendas y carga · Huila, Guadalupe</p>
        </div>
        <p className="text-sm text-white/60">
          WhatsApp: {WHATSAPP_NUMBERS.map((n) => n.display).join(' · ')}
        </p>
        <p className="text-xs text-white/40">© {new Date().getFullYear()} Super Envíos Triviño S.A.S.</p>
      </div>
    </footer>
  )
}
