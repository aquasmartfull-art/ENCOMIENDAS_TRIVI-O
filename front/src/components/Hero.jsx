import WhatsAppButton from './WhatsAppButton'
import { SERVICES } from '../data/config'
import { serviceIcons } from './Icons'

export default function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-brand-950 pt-28 pb-20 sm:pt-32">
      <div className="absolute inset-0 stripes" />
      <div className="absolute -top-40 -right-40 h-[32rem] w-[32rem] rounded-full bg-brand-600/40 blur-3xl" />
      <div className="absolute -bottom-40 -left-32 h-[28rem] w-[28rem] rounded-full bg-lime-brand/20 blur-3xl" />
      <div className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-brand-600 via-lime-brand to-brand-600" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-lime-brand/40 bg-lime-brand/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-lime-glow">
            <span className="h-2 w-2 rounded-full bg-lime-brand" /> Huila · Guadalupe
          </span>
          <h1 className="mt-5 text-4xl font-black italic leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-6xl">
            ¡ENVÍOS <span className="text-gradient">NACIONALES!</span>
          </h1>
          <p className="mt-3 text-xl font-bold text-white/90 sm:text-2xl">Llevamos tus paquetes a todo Colombia</p>
          <p className="mt-5 max-w-xl text-base text-white/70">
            Encomiendas, carga, compras y mudanzas desde el Huila hacia todas las capitales y ciudades del país.
            Cotiza en segundos por WhatsApp.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <WhatsAppButton size="lg" message="¡Hola Super Envíos Triviño! 👋 Quiero cotizar un envío." />
            <a
              href="#servicios"
              className="inline-flex items-center rounded-full border-2 border-white/25 px-7 py-4 text-base font-extrabold text-white transition hover:border-lime-brand hover:text-lime-brand"
            >
              Ver servicios
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {SERVICES.map((s) => {
              const Icon = serviceIcons[s.icon]
              return (
                <span key={s.id} className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1.5 text-sm font-bold text-white ring-1 ring-white/10">
                  <span className="grid h-7 w-7 place-items-center rounded-full bg-lime-brand text-brand-950">
                    <Icon className="h-4 w-4" />
                  </span>
                  {s.title}
                </span>
              )
            })}
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-6 rounded-full border-[10px] border-lime-brand/20" />
          <div className="absolute inset-14 rounded-full border-2 border-dashed border-lime-brand/30" />
          <div className="absolute inset-x-10 bottom-10 h-10 rounded-[50%] bg-black/50 blur-xl" />
          <img
            src="/images/camion-inicio.png"
            alt="Camión de Super Envíos Triviño S.A.S. - Encomiendas y carga"
            width="616"
            height="405"
            className="relative mx-auto w-full max-w-xl object-contain animate-drive drop-shadow-[0_25px_35px_rgba(0,0,0,.55)]"
          />
          <div className="relative mx-auto -mt-2 w-fit -skew-x-12 rounded-md bg-gradient-to-r from-brand-600 to-lime-brand px-6 py-2 shadow-lg">
            <p className="skew-x-12 text-sm font-black uppercase italic text-brand-950 sm:text-base">
              Atención rápida, <span className="text-white">segura</span> y confiable
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
