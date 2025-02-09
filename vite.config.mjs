import { defineConfig } from 'vite';
import fs from 'fs-extra';
import path from 'path';

export default defineConfig({
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
  plugins: [
    {
      name: 'copy-assets',
      writeBundle: async () => {
        const srcSong = path.resolve(__dirname, 'song');
        const destSong = path.resolve(__dirname, 'dist/song');
        const srcVideo = path.resolve(__dirname, 'video');
        const destVideo = path.resolve(__dirname, 'dist/video');
        const songPhoto = path.resolve(__dirname, 'song photos');
        const destPhoto = path.resolve(__dirname, 'dist/song photos');


        await fs.copy(srcSong, destSong);

        await fs.copy(srcVideo, destVideo);

        await fs.copy(songPhoto, destPhoto);
      },
    },
  ],
});