import path from 'node:path';
import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  if (command === 'serve' || mode === 'demo') {
    // Config for demo site
    return {
      plugins: [react()],
    };
  }

  // Config for library build
  return {
    plugins: [
      react(),
      dts({
        insertTypesEntry: true,
        tsconfigPath: './tsconfig.lib.json',
      }),
    ],
    build: {
      lib: {
        entry: path.resolve(__dirname, 'lib/index.ts'),
        name: 'react-layout',
        fileName: (format) => `react-layout.${format}.js`,
      },
      rollupOptions: {
        external: ['react', 'react-dom'],
        output: {
          globals: {
            react: 'React',
            'react-dom': 'ReactDOM',
          },
        },
      },
    },
    test: {
      globals: true,
      environment: 'jsdom',
      setupFiles: './tests/setup.ts',
      coverage: {
        provider: 'v8',
        reporter: ['text', 'html', 'clover', 'json', 'lcov'],
        exclude: ['demos/**', 'scripts/**'],
      },
      css: {
        modules: {
          classNameStrategy: 'non-scoped',
        },
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern", "legacy"
          importers: [],
        },
      },
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  };
});
