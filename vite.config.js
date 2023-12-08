import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";


// https://vitejs.dev/config/

// conditional config to proxy the dart dev server if mode is development (npm run dev) - allows refreshing without restarting server
// target must be host:port of dart server
export default defineConfig(({ mode }) => {
  if (mode === "development") {
    return {
      plugins: [react()],
      server: {
        proxy: {
          "/api": {
            target: "http://localhost:4000",
            changeOrigin: true,
            secure: false,
          },
        },
      },
    };
  } else {
    return {
      plugins: [react()],
    };
  }
});
