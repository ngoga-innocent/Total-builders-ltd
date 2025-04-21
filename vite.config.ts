import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss(),],
  server: {
    host: true,
    port: 5173,
    allowedHosts: ['3bfc-41-186-192-191.ngrok-free.app']
  },
})
