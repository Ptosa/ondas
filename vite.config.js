import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/ondas',
  plugins: [react()],
  assetsInclude: [
    '**/*.png',
    '**/*.jpg',
    '**/*.jpeg',
    '**/*.gif',
    '**/*.svg',
    '**/*.ico',
    '**/*.webp',
    '**/*.mp4',
    '**/*.webm',
    '**/*.ogg',
    '**/*.mp3',
    '**/*.wav',
    '**/*.flac',
    '**/*.aac',
    '**/*.xlsx',
  ],
});
