import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  server: {
    proxy: {
      // Proxy all requests starting with '/users' to your backend server
      "/users": {
        target: "https://dreamers-backend-git-master-bijons-projects-01181d74.vercel.app/",  // Your backend server
        changeOrigin: true,  // Needed for virtual hosted sites
        rewrite: (path) => path.replace(/^\/users/, "/users"),  // Optional if the backend expects the same '/users' prefix
      }
    }
  },
  plugins: [react()],
})
