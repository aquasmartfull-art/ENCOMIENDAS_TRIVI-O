export default function Logo({ className = '' }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${className}`}>
      <span className="grid h-13 w-13 shrink-0 place-items-center rounded-full bg-white p-0.5 shadow-lg shadow-lime-brand/30 ring-2 ring-lime-brand">
        <img src="/images/logo.png" alt="Super Envíos Triviño S.A.S." width="500" height="500" className="h-full w-full object-contain" />
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
