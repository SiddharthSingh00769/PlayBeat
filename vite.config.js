import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [], 
  build: {
    outDir: 'dist', 
    rollupOptions: {
      input: {
        main: './index.html', 
        index1: './index1.html', 
        index2: './index2.html', 
        landing: './landing.html', 
        signup: './signup.html', 
      },
    },
  },
});