import { WhatsAppIcon, ArrowIcon } from './Icons'
import { waLink } from '../data/config'

const sizes = {
  md: 'px-5 py-3 text-sm',
  lg: 'px-7 py-4 text-base',
}

export default function WhatsAppButton({ message, number, children = 'Escríbenos hoy', size = 'md', className = '' }) {
  return (
    <a
      href={waLink(message, number)}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2.5 rounded-full bg-gradient-to-r from-brand-500 to-lime-brand font-extrabold uppercase italic tracking-wide text-brand-950 shadow-lg shadow-lime-brand/30 ring-2 ring-white/20 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-lime-brand/40 ${sizes[size]} ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5 shrink-0" />
      <span className="h-5 w-px bg-brand-950/30" />
      {children}
      <ArrowIcon className="h-4 w-4 transition group-hover:translate-x-1" />
    </a>
  )
}
