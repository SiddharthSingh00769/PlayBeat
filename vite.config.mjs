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
        script1: './movie.js', 
        script2: './music.js',
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
        const img = path.resolve(__dirname, 'img');
        const destImg = path.resolve(__dirname, 'dist/img');

        // Copy directories
        await fs.copy(srcSong, destSong);
        await fs.copy(srcVideo, destVideo);
        await fs.copy(songPhoto, destPhoto);
        await fs.copy(img, destImg);

        // Copy package.json
        const packageJsonSrc = path.resolve(__dirname, 'package.json');
        const packageJsonDest = path.resolve(__dirname, 'dist/package.json');

        try {
          console.log(`Copying package.json from ${packageJsonSrc} to ${packageJsonDest}`);
          await fs.copyFile(packageJsonSrc, packageJsonDest);
          console.log('package.json copied successfully.');
        } catch (error) {
          console.error('Error copying package.json:', error);
        }

        const movieJsonSrc = path.resolve(__dirname, 'movie.json');
        const movieJsonDest = path.resolve(__dirname, 'dist/movie.json');

        try {
          console.log(`Copying movie.json from ${movieJsonSrc} to ${movieJsonDest}`);
          await fs.copyFile(movieJsonSrc, movieJsonDest);
          console.log('movie.json copied successfully.');
        } catch (error) {
          console.error('Error copying movie.json:', error);
        }
      },
    },
  ],
});