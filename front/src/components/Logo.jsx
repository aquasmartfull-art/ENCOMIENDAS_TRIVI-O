export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${className}`}>
      <span className="relative grid h-11 w-11 place-items-center rounded-full bg-brand-900 ring-2 ring-lime-brand shadow-lg shadow-lime-brand/30">
        <svg viewBox="0 0 24 24" className="h-6 w-6 text-lime-brand" fill="currentColor">
          <path d="M12 2l2.9 6.5L22 9.2l-5.3 4.7 1.5 7.1L12 17.4 5.8 21l1.5-7.1L2 9.2l7.1-.7z" />
        </svg>
      </span>
      <span className="leading-none">
        <span className="block text-lg font-black italic tracking-tight text-white">
          Super<span className="text-lime-brand">Envíos</span>
        </span>
        <span className="block text-[11px] font-extrabold tracking-[0.3em] text-white/80">TRIVIÑO</span>
      </span>
    </a>
  )
}
