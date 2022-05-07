import { workspaceRoot } from 'nx/src/utils/app-root';
import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    react(),
    tsconfigPaths({ projects: [resolve(workspaceRoot, 'tsconfig.base.json')] }),
  ],
  test: {
    environment: 'happy-dom',
    setupFiles: ['./test-setup.ts'],
  },
});
