// Número de WhatsApp (formato internacional sin "+")
export const WHATSAPP = { display: '320 499 0858', number: '573204990858' }

export const waLink = (message) =>
  `https://wa.me/${WHATSAPP.number}?text=${encodeURIComponent(message)}`

export const SERVICES = [
  {
    id: 'encomiendas',
    title: 'Encomiendas',
    icon: 'box',
    description: 'Enviamos tus paquetes y documentos de forma segura entre municipios del Huila y a todo Colombia.',
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
    description: 'Trasteos y mudanzas con cuidado de tus muebles y enseres, de casa a casa o de municipio a municipio.',
    message: '¡Hola Super Envíos Triviño! 🏠 Necesito hacer una *mudanza*. ¿Me pueden cotizar?',
  },
]

export const MUNICIPIOS = [
  'Neiva', 'Pitalito', 'Garzón', 'La Plata', 'Campoalegre', 'Gigante', 'Palermo',
  'Rivera', 'Aipe', 'Hobo', 'Yaguará', 'Tello', 'Baraya', 'Villavieja',
  'Algeciras', 'Tesalia', 'Paicol', 'Nátaga', 'La Argentina', 'Isnos',
  'San Agustín', 'Timaná', 'Acevedo', 'Suaza', 'Guadalupe', 'Altamira',
  'Tarqui', 'El Pital', 'El Agrado', 'Oporapa', 'Saladoblanco', 'Elías',
  'Palestina', 'Íquira', 'Teruel', 'Santa María', 'Colombia',
]
