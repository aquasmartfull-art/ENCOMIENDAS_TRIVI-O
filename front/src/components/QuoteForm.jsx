import { useMemo, useState } from 'react'
import { SERVICES, MUNICIPIOS, WHATSAPP_NUMBERS, waLink } from '../data/config'
import { serviceIcons, WhatsAppIcon } from './Icons'

const OTRO = 'Otro destino nacional'

const inputCls =
  'w-full rounded-xl border-0 bg-white/10 px-4 py-3 text-white placeholder-white/40 ring-1 ring-white/15 outline-none transition focus:bg-white/15 focus:ring-2 focus:ring-lime-brand'

export default function QuoteForm() {
  const [form, setForm] = useState({
    servicio: SERVICES[0].id,
    nombre: '',
    origen: 'Neiva',
    destino: 'Pitalito',
    destinoOtro: '',
    detalle: '',
    linea: WHATSAPP_NUMBERS[0].number,
  })

  const set = (k) => (e) => setForm({ ...form, [k]: e.target.value })
  const servicio = SERVICES.find((s) => s.id === form.servicio)

  const message = useMemo(() => {
    const destino = form.destino === OTRO ? form.destinoOtro || '(por definir)' : form.destino
    const lines = [
      `¡Hola Super Envíos Triviño! 👋`,
      `Quiero cotizar un servicio de *${servicio.title}*.`,
      '',
      form.nombre ? `👤 Nombre: ${form.nombre}` : null,
      `📍 Origen: ${form.origen}`,
      `🏁 Destino: ${destino}`,
      form.detalle ? `📝 Detalle: ${form.detalle}` : null,
      '',
      '¿Me pueden dar precio y disponibilidad? ¡Gracias!',
    ]
    return lines.filter((l) => l !== null).join('\n')
  }, [form, servicio])

  const onSubmit = (e) => {
    e.preventDefault()
    window.open(waLink(message, form.linea), '_blank', 'noopener,noreferrer')
  }

  return (
    <section id="cotizar" className="relative overflow-hidden bg-brand-900 py-20 sm:py-24">
      <div className="absolute inset-0 stripes opacity-60" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-black italic tracking-tight text-white sm:text-4xl">
            Cotiza tu envío <span className="text-gradient">en segundos</span>
          </h2>
          <p className="mt-4 text-white/75">
            Llena los datos y te llevamos a WhatsApp con el mensaje armado. Solo tienes que darle enviar.
          </p>

          <div className="mt-8 rounded-2xl bg-brand-950/70 p-5 ring-1 ring-lime-brand/30">
            <p className="text-xs font-extrabold uppercase tracking-widest text-lime-brand">Vista previa del mensaje</p>
            <div className="mt-3 rounded-xl rounded-tl-none bg-[#dcf8c6] p-4 text-sm leading-relaxed whitespace-pre-line text-gray-800 shadow">
              {message.replace(/\*/g, '')}
            </div>
          </div>
        </div>

        <form onSubmit={onSubmit} className="space-y-5 rounded-3xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur sm:p-8 lg:col-span-3">
          <fieldset>
            <legend className="mb-3 text-sm font-bold text-white">Servicio</legend>
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {SERVICES.map((s) => {
                const Icon = serviceIcons[s.icon]
                const active = form.servicio === s.id
                return (
                  <label
                    key={s.id}
                    className={`flex cursor-pointer flex-col items-center gap-2 rounded-xl p-3 text-sm font-bold ring-1 transition ${
                      active ? 'bg-lime-brand text-brand-950 ring-lime-brand' : 'bg-white/5 text-white ring-white/15 hover:bg-white/10'
                    }`}
                  >
                    <input type="radio" name="servicio" value={s.id} checked={active} onChange={set('servicio')} className="sr-only" />
                    <Icon className="h-6 w-6" />
                    {s.title}
                  </label>
                )
              })}
            </div>
          </fieldset>

          <div>
            <label className="mb-1.5 block text-sm font-bold text-white" htmlFor="nombre">Tu nombre (opcional)</label>
            <input id="nombre" className={inputCls} placeholder="Ej: María Pérez" value={form.nombre} onChange={set('nombre')} />
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-sm font-bold text-white" htmlFor="origen">Origen</label>
              <select id="origen" className={inputCls} value={form.origen} onChange={set('origen')}>
                {MUNICIPIOS.map((m) => <option key={m} className="text-gray-900">{m}</option>)}
              </select>
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-bold text-white" htmlFor="destino">Destino</label>
              <select id="destino" className={inputCls} value={form.destino} onChange={set('destino')}>
                {MUNICIPIOS.map((m) => <option key={m} className="text-gray-900">{m}</option>)}
                <option className="text-gray-900">{OTRO}</option>
              </select>
            </div>
          </div>

          {form.destino === OTRO && (
            <div>
              <label className="mb-1.5 block text-sm font-bold text-white" htmlFor="destinoOtro">Ciudad de destino</label>
              <input id="destinoOtro" className={inputCls} placeholder="Ej: Bogotá, Cali, Ibagué…" value={form.destinoOtro} onChange={set('destinoOtro')} />
            </div>
          )}

          <div>
            <label className="mb-1.5 block text-sm font-bold text-white" htmlFor="detalle">¿Qué vas a enviar?</label>
            <textarea
              id="detalle"
              rows={3}
              className={inputCls}
              placeholder="Ej: 2 cajas medianas de 10 kg aprox."
              value={form.detalle}
              onChange={set('detalle')}
            />
          </div>

          <div>
            <p className="mb-1.5 text-sm font-bold text-white">Enviar a</p>
            <div className="flex flex-wrap gap-3">
              {WHATSAPP_NUMBERS.map((n) => (
                <label
                  key={n.number}
                  className={`cursor-pointer rounded-full px-4 py-2 text-sm font-bold ring-1 transition ${
                    form.linea === n.number ? 'bg-white text-brand-900 ring-white' : 'text-white ring-white/25 hover:bg-white/10'
                  }`}
                >
                  <input type="radio" name="linea" value={n.number} checked={form.linea === n.number} onChange={set('linea')} className="sr-only" />
                  {n.display}
                </label>
              ))}
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full items-center justify-center gap-3 rounded-full bg-gradient-to-r from-brand-500 to-lime-brand px-6 py-4 text-base font-black uppercase italic tracking-wide text-brand-950 shadow-lg shadow-lime-brand/30 transition hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-6 w-6" /> Enviar por WhatsApp
          </button>
        </form>
      </div>
    </section>
  )
}
