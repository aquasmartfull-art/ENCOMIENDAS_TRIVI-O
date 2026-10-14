const base = { fill: 'none', stroke: 'currentColor', strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' }

export const BoxIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M21 8l-9-5-9 5 9 5 9-5z" /><path d="M3 8v8l9 5 9-5V8" /><path d="M12 13v8" /><path d="M7.5 5.5l9 5" /></svg>
)
export const TruckIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M1 4h13v12H1z" /><path d="M14 8h4l4 4v4h-8z" /><circle cx="5.5" cy="18.5" r="2" /><circle cx="17.5" cy="18.5" r="2" /></svg>
)
export const CartIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><circle cx="9" cy="20" r="1.5" /><circle cx="18" cy="20" r="1.5" /><path d="M1 2h3l2.7 12.4a2 2 0 002 1.6h9.7a2 2 0 002-1.6L22 6H5.2" /></svg>
)
export const HomeIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 10.5L12 3l9 7.5" /><path d="M5 9v11h14V9" /><path d="M10 20v-6h4v6" /></svg>
)
export const BoltIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M13 2L3 14h9l-1 8 10-12h-9z" /></svg>
)
export const ShieldIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M9 12l2 2 4-4" /></svg>
)
export const HeartIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M20.8 4.6a5.5 5.5 0 00-7.8 0L12 5.7l-1-1.1a5.5 5.5 0 00-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 000-7.8z" /></svg>
)
export const PinIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" /><circle cx="12" cy="10" r="3" /></svg>
)
export const MenuIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M3 6h18M3 12h18M3 18h18" /></svg>
)
export const CloseIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M18 6L6 18M6 6l12 12" /></svg>
)
export const ArrowIcon = (p) => (
  <svg viewBox="0 0 24 24" {...base} {...p}><path d="M9 18l6-6-6-6" /></svg>
)
export const WhatsAppIcon = (p) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...p}>
    <path d="M17.47 14.38c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.46-2.4-1.48-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.07-.15-.67-1.61-.92-2.21-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.48s1.07 2.88 1.21 3.08c.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.63.71.23 1.36.2 1.87.12.57-.09 1.76-.72 2.01-1.41.25-.69.25-1.29.17-1.41-.07-.13-.27-.2-.57-.35zM12.05 21.5h-.01a9.43 9.43 0 01-4.8-1.32l-.35-.2-3.57.93.95-3.48-.22-.36a9.4 9.4 0 01-1.44-5.02c0-5.2 4.24-9.44 9.45-9.44 2.52 0 4.89.99 6.67 2.77a9.37 9.37 0 012.76 6.68c0 5.2-4.24 9.44-9.44 9.44zm8.04-17.48A11.3 11.3 0 0012.05.7C5.78.7.68 5.8.68 12.06c0 2 .52 3.96 1.52 5.68L.6 23.6l6-1.57a11.34 11.34 0 005.44 1.38h.01c6.26 0 11.36-5.1 11.36-11.36 0-3.03-1.18-5.89-3.32-8.03z" />
  </svg>
)

export const serviceIcons = { box: BoxIcon, truck: TruckIcon, cart: CartIcon, home: HomeIcon }
