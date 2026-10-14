import { WHATSAPP_NUMBERS, waLink } from '../data/config'
import { WhatsAppIcon } from './Icons'
import WhatsAppButton from './WhatsAppButton'

export default function Contact() {
  return (
    <section id="contacto" className="relative overflow-hidden bg-brand-950 py-20 sm:py-24">
      <div className="absolute inset-0 stripes" />
      <div className="absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-brand-600/30 blur-3xl" />
      <div className="relative mx-auto max-w-3xl px-4 text-center sm:px-6">
        <h2 className="text-3xl font-black italic tracking-tight text-white sm:text-5xl">
          ¡Escríbenos <span className="text-gradient">hoy!</span>
        </h2>
        <p className="mt-4 text-white/75">Atendemos por WhatsApp en nuestras dos líneas.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {WHATSAPP_NUMBERS.map((n) => (
            <a
              key={n.number}
              href={waLink('¡Hola Super Envíos Triviño! 👋 Quiero información sobre sus servicios.', n.number)}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-4 rounded-2xl bg-white/5 p-5 text-left ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-lime-brand"
            >
              <span className="relative grid h-14 w-14 shrink-0 place-items-center rounded-full bg-whatsapp text-white">
                <span className="absolute inset-0 rounded-full bg-whatsapp animate-ping-soft" />
                <WhatsAppIcon className="relative h-7 w-7" />
              </span>
              <span>
                <span className="block text-xs font-extrabold uppercase tracking-widest text-lime-brand">WhatsApp · {n.label}</span>
                <span className="block text-2xl font-black tracking-wide text-white">{n.display}</span>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-10">
          <WhatsAppButton size="lg" message="¡Hola Super Envíos Triviño! 👋 Quiero cotizar un envío." />
        </div>
      </div>
    </section>
  )
}
