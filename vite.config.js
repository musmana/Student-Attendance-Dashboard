import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Student-Attendance-Dashboard/',
  server: {
    port: 3000
  },
  // Add this build configuration
  build: {
    rollupOptions: {
      output: {
        // Ensure JSX files are treated as JS
        entryFileNames: `assets/[name].js`,
        chunkFileNames: `assets/[name].js`,
        assetFileNames: `assets/[name].[ext]`
      }
    }
  }
})