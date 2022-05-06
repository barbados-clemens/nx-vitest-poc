import {defineConfig} from "vitest/config";
import react from "@vitejs/plugin-react";
import {resolve} from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // TODO(caleb): how to get vite-tsconfig-paths to resolve relative to this file instead of the project root?
      "@nx-vitest-package-scripts/my-react-lib-two": resolve(__dirname, '../my-react-lib-two/src'),
    }
  },
  test: {
    include: ['**/*.test.tsx'],
    environment: "happy-dom",
    setupFiles: ["./test-setup.ts"],
  },
});
