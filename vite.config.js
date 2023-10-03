import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
base:"/react-dictionary-app/"
export default defineConfig({
  plugins: [react()],
})
