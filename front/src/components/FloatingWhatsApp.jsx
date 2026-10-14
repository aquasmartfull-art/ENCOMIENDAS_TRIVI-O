import { waLink } from '../data/config'
import { WhatsAppIcon } from './Icons'

export default function FloatingWhatsApp() {
  return (
    <a
      href={waLink('¡Hola Super Envíos Triviño! 👋 Quiero más información.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escríbenos por WhatsApp"
      className="fixed bottom-5 right-5 z-50 grid h-16 w-16 place-items-center rounded-full bg-whatsapp text-white shadow-2xl shadow-black/40 transition hover:scale-110"
      style={{ marginBottom: 'env(safe-area-inset-bottom, 0px)' }}
    >
      <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping-soft" />
      <WhatsAppIcon className="relative h-8 w-8" />
    </a>
  )
}
