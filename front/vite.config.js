import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Permite servir la página en Render (dominio .onrender.com o dominio propio)
  preview: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
