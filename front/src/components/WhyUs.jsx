import { BoltIcon, ShieldIcon, HeartIcon } from './Icons'

const items = [
  { icon: BoltIcon, title: 'Atención rápida', text: 'Respondemos tu WhatsApp en minutos y despachamos el mismo día según disponibilidad.' },
  { icon: ShieldIcon, title: 'Segura', text: 'Tus paquetes, carga y muebles viajan protegidos y bien manipulados de principio a fin.' },
  { icon: HeartIcon, title: 'Confiable', text: 'Una empresa huilense que conoce las vías del país y cuida cada envío.' },
]

export default function WhyUs() {
  return (
    <section className="bg-gradient-to-br from-brand-700 via-brand-600 to-brand-500 py-16">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 sm:px-6 md:grid-cols-3">
        {items.map(({ icon: Icon, title, text }) => (
          <div key={title} className="flex gap-4 rounded-2xl bg-brand-950/25 p-6 ring-1 ring-white/15">
            <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lime-glow text-brand-950">
              <Icon className="h-6 w-6" />
            </span>
            <div>
              <h3 className="text-lg font-black uppercase italic text-white">{title}</h3>
              <p className="mt-1 text-sm text-white/85">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
