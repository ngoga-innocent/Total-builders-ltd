import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { VitePWA } from 'vite-plugin-pwa';
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'logo.png', 'logo.png'],
      manifest: {
        name: 'Total Builders Ltd',
        short_name: 'Builders',
        description: 'We build trust, partnerships, and resilient structures.',
        theme_color: '#fd9800',
        background_color: '#ffffff',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: 'logo.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'logo.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ],
  server: {
    host: '0.0.0.0',
    // host: true,
    port: 5173,
    allowedHosts: ['.'],
    fs: {
      allow: ['.']
    }
  },
  build: {
    outDir: 'dist'
  },
  preview: {
    // 👇 This is important for React Router support in preview
    port: 4173,
    open: true,
    strictPort: true,
    host:'0.0.0.0',
    allowedHosts: ['.ngrok-free.app'],
  }
})
