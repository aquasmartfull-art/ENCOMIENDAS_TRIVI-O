// Número de WhatsApp (formato internacional sin "+")
export const WHATSAPP = { display: '320 499 0858', number: '573204990858' }

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`

export const SERVICES = [
  {
    id: 'encomiendas',
    title: 'Encomiendas',
    icon: 'box',
    description: 'Enviamos tus paquetes y documentos de forma segura a todas las capitales del país.',
    message: '¡Hola Super Envíos Triviño! 📦 Quiero enviar una *encomienda*. ¿Me pueden dar información sobre tarifas y tiempos de entrega?',
  },
  {
    id: 'carga',
    title: 'Carga',
    icon: 'truck',
    description: 'Transporte de mercancía y carga pesada o liviana con vehículos adecuados para cada necesidad.',
    message: '¡Hola Super Envíos Triviño! 🚚 Necesito transportar *carga*. ¿Me pueden cotizar el servicio?',
  },
  {
    id: 'compras',
    title: 'Compras',
    icon: 'cart',
    description: 'Hacemos tus compras y te las llevamos hasta la puerta. Tú pides, nosotros nos encargamos.',
    message: '¡Hola Super Envíos Triviño! 🛒 Quiero que me hagan unas *compras* y me las lleven. ¿Cómo funciona el servicio?',
  },
  {
    id: 'mudanzas',
    title: 'Mudanzas',
    icon: 'home',
    description: 'Trasteos y mudanzas con cuidado de tus muebles y enseres, de casa a casa o de ciudad a ciudad.',
    message: '¡Hola Super Envíos Triviño! 🏠 Necesito hacer una *mudanza*. ¿Me pueden cotizar?',
  },
]

// Capitales de los 32 departamentos de Colombia (Bogotá D.C. es capital de Cundinamarca)
export const CIUDADES = [
  'Armenia', 'Arauca', 'Barranquilla', 'Bogotá D.C.', 'Bucaramanga', 'Cali',
  'Cartagena', 'Cúcuta', 'Florencia', 'Ibagué', 'Inírida', 'Leticia',
  'Manizales', 'Medellín', 'Mitú', 'Mocoa', 'Montería', 'Neiva', 'Pasto',
  'Pereira', 'Popayán', 'Puerto Carreño', 'Quibdó', 'Riohacha', 'San Andrés',
  'San José del Guaviare', 'Santa Marta', 'Sincelejo', 'Tunja', 'Valledupar',
  'Villavicencio', 'Yopal',
]
