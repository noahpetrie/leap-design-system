import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  publicDir: false,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use '@carbon/colors' as *;\n`,
        includePaths: [
          'node_modules',
          'node_modules/@carbon/styles/scss',
          'node_modules/@carbon/react/scss',
        ],
      },
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.js'),
      formats: ['es', 'cjs'],
      fileName: (format) => `leap-design-system.${format === 'es' ? 'mjs' : 'cjs'}`,
    },
    rollupOptions: {
      external: [
        'react',
        'react-dom',
        'react/jsx-runtime',
        'prop-types',
        /^@carbon\//,
      ],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
        assetFileNames: 'leap-design-system.[ext]',
      },
    },
    cssCodeSplit: false,
    outDir: 'lib',
    emptyOutDir: true,
  },
});
