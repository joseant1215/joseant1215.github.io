import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Preparado para https://github.com/joseant1215/joseant1215.github.io
  // Si usas otro nombre de repositorio, cambia '/' por '/NOMBRE-REPO/'.
  base: '/',
})
