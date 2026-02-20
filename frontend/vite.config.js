import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    host: '0.0.0.0',
    port: 5173,
    // HMR polling: required inside Docker on macOS (inotify doesn't
    // propagate across the VM boundary). Set VITE_POLLING=true in
    // docker-compose.dev.yml; keeps polling OFF in local bare-metal dev.
    watch: {
      usePolling: process.env.VITE_POLLING === 'true',
      interval: 1000,
    },
    hmr: {
      // Tell the browser which host to connect to HMR websocket.
      // VITE_HMR_HOST is set to 'localhost' in docker-compose so the
      // browser (running on your Mac) can reach it via the mapped port.
      host: process.env.VITE_HMR_HOST || 'localhost',
    },
    proxy: {
      '/api': {
        // Inside Docker the backend is reachable at http://backend:8080
        // Outside Docker (bare npm run dev) it's http://localhost:8080
        target: process.env.VITE_API_TARGET || 'http://localhost:8080',
        changeOrigin: true,
      },
    },
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.js',
    css: true,
  },
})

