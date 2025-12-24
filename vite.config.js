import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    open: true,
    proxy: {
    
      '/api-services': {
        target: 'https://tmdsv.hubsys.io/TM_UAT', // <--- OBRIGATÓRIO SER UAT
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api-services/, ''),
        configure: (proxy, _options) => {
          proxy.on('proxyReq', (proxyReq, req, _res) => {
            // IMITANDO O INSOMNIA:
            proxyReq.removeHeader('Origin');
            proxyReq.removeHeader('Referer');
            proxyReq.setHeader('User-Agent', 'Insomnia/2023.5.8');
          });
        }
      },
    }
  }
})