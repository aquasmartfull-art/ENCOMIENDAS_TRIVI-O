import { SERVICES, waLink } from '../data/config'
import { serviceIcons, WhatsAppIcon } from './Icons'

export default function Services() {
  return (
    <section id="servicios" className="relative bg-gradient-to-b from-white to-[#eef8ef] py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-block -skew-x-12 rounded bg-lime-brand px-4 py-1 text-sm font-black uppercase italic text-brand-950">
            <span className="inline-block skew-x-12">Servicios</span>
          </span>
          <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-900 sm:text-4xl">¿Qué necesitas enviar hoy?</h2>
          <p className="mt-3 text-gray-600">Elige un servicio y te abrimos WhatsApp con el mensaje listo para enviar.</p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const Icon = serviceIcons[s.icon]
            return (
              <article
                key={s.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl bg-brand-900 p-6 text-white shadow-xl shadow-brand-900/20 ring-1 ring-brand-700 transition hover:-translate-y-1.5"
              >
                <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-lime-brand/15 transition group-hover:scale-150" />
                <span className="relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-lime-glow to-brand-500 text-brand-950 shadow-lg ring-4 ring-white/10">
                  <Icon className="h-7 w-7" />
                </span>
                <h3 className="relative mt-5 text-xl font-black italic">{s.title}</h3>
                <p className="relative mt-2 flex-1 text-sm leading-relaxed text-white/75">{s.description}</p>
                <a
                  href={waLink(s.message)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-whatsapp px-4 py-2.5 text-sm font-extrabold text-white transition hover:brightness-110"
                >
                  <WhatsAppIcon className="h-4 w-4" /> Solicitar {s.title.toLowerCase()}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
