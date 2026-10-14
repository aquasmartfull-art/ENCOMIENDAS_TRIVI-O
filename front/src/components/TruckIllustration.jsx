export default function TruckIllustration({ className = '' }) {
  return (
    <svg viewBox="0 0 520 260" className={className} aria-hidden="true">
      <defs>
        <linearGradient id="truck-box" x1="0" x2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#e6efe8" />
        </linearGradient>
        <linearGradient id="truck-cab" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="1" stopColor="#d9e4dc" />
        </linearGradient>
      </defs>
      {/* líneas de velocidad */}
      <g stroke="#7ed321" strokeWidth="5" strokeLinecap="round" opacity=".7">
        <path d="M10 90h60" />
        <path d="M0 130h45" />
        <path d="M20 170h55" />
      </g>
      {/* furgón */}
      <rect x="80" y="40" width="300" height="150" rx="10" fill="url(#truck-box)" />
      <path d="M80 140 L380 70 L380 190 L80 190 Z" fill="#0f5226" opacity=".95" />
      <path d="M80 165 L380 100 L380 118 L80 183 Z" fill="#7ed321" />
      <path d="M250 62l13 28 30 3-23 20 7 30-27-16-27 16 7-30-23-20 30-3z" fill="#7ed321" stroke="#0a3d1c" strokeWidth="3" />
      {/* cabina */}
      <path d="M385 80h70l45 55v55H385z" fill="url(#truck-cab)" />
      <path d="M398 92h52l34 42h-86z" fill="#0a3d1c" opacity=".85" />
      <rect x="385" y="160" width="115" height="12" fill="#146c30" />
      <rect x="488" y="148" width="14" height="10" rx="2" fill="#a6ec3c" />
      {/* chasis */}
      <rect x="80" y="190" width="425" height="14" rx="4" fill="#1f2a22" />
      {[140, 210, 440].map((cx) => (
        <g key={cx}>
          <circle cx={cx} cy="210" r="28" fill="#111" />
          <circle cx={cx} cy="210" r="13" fill="#9aa59d" />
          <circle cx={cx} cy="210" r="5" fill="#333" />
        </g>
      ))}
    </svg>
  )
}
