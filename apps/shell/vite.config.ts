import { federation } from '@module-federation/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'shell',
      remotes: {
        home: 'home@http://localhost:3001/remoteEntry.js',
      },
      shared: ['react', 'react-dom'],
      dts: false,
    }),
  ],
  build: {
    target: 'esnext',
  },
})
