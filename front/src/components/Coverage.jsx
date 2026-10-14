import { MUNICIPIOS, waLink } from '../data/config'
import { PinIcon } from './Icons'

export default function Coverage() {
  return (
    <section id="cobertura" className="bg-white py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid items-end gap-6 lg:grid-cols-2">
          <div>
            <span className="inline-block -skew-x-12 rounded bg-lime-brand px-4 py-1 text-sm font-black uppercase italic text-brand-950">
              <span className="inline-block skew-x-12">Cobertura</span>
            </span>
            <h2 className="mt-4 text-3xl font-black tracking-tight text-brand-900 sm:text-4xl">
              Llegamos a los municipios del Huila
            </h2>
          </div>
          <p className="text-gray-600 lg:text-right">
            Toca tu municipio y pregúntanos directamente por WhatsApp. También hacemos envíos a todo Colombia.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2.5">
          {MUNICIPIOS.map((m) => (
            <a
              key={m}
              href={waLink(`¡Hola Super Envíos Triviño! 📍 ¿Tienen servicio de envíos en *${m}*? Quisiera más información.`)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1.5 rounded-full border border-brand-700/20 bg-brand-900/[0.03] px-4 py-2 text-sm font-bold text-brand-800 transition hover:border-brand-600 hover:bg-brand-700 hover:text-white"
            >
              <PinIcon className="h-4 w-4 text-brand-500 group-hover:text-lime-glow" />
              {m}
            </a>
          ))}
          <a
            href={waLink('¡Hola Super Envíos Triviño! 🇨🇴 Quiero hacer un envío nacional fuera del Huila. ¿Me pueden cotizar?')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-yellow-400 via-blue-600 to-red-600 px-4 py-2 text-sm font-black text-white shadow transition hover:brightness-110"
          >
            + Todo Colombia
          </a>
        </div>
      </div>
    </section>
  )
}
