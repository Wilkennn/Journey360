import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    plugins: [react()],
    server: {
      port: 3000,
      open: true,
      proxy: {
        "/api/proxy": {
          target: env.HUBSYS_URL,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/api\/proxy/, ""), 
          configure: (proxy, _options) => {
            proxy.on("proxyReq", (proxyReq, req, _res) => {
              console.log("[VITE PROXY] Redirecionando para Hubsys...");
              
              proxyReq.removeHeader("Origin");
              proxyReq.removeHeader("Referer");

              proxyReq.setHeader("X-USER", env.HUBSYS_API_STATIC_USER);
              proxyReq.setHeader("X-TOKEN", env.HUBSYS_API_STATIC_TOKEN);
              proxyReq.setHeader("X-API-KEY", env.HUBSYS_API_STATIC_PASSWORD);
            });
          },
        },
      },
    },
  };
});
