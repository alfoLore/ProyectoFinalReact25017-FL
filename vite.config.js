/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
  ,tailwindcss()
  ],
})
*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Permite conexiones desde cualquier dirección
    port: 5173, // Puerto 5173
  },
})
