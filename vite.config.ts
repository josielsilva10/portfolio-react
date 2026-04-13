import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import path from "node:path"
import { defineConfig } from "vite"
import { vitePluginManusRuntime } from "vite-plugin-manus-runtime"

// Debug plugin (mantido do seu projeto)
function vitePluginManusDebugCollector() {
  return {
    name: "manus-debug-collector"
  }
}

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    vitePluginManusRuntime(),
    vitePluginManusDebugCollector()
  ],

  resolve: {
    alias: {
      "@": path.resolve(import.meta.dirname, "client", "src"),
      "@shared": path.resolve(import.meta.dirname, "shared"),
      "@assets": path.resolve(import.meta.dirname, "attached_assets")
    }
  },

  envDir: path.resolve(import.meta.dirname),
  root: path.resolve(import.meta.dirname, "client"),

  build: {
    outDir: path.resolve(import.meta.dirname, "dist/public"),
    emptyOutDir: true
  },

  server: {
    port: 3000,
    strictPort: false,
    host: true
  }
})
