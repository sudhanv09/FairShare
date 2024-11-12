import { defineConfig } from 'vite'
import solid from 'vite-plugin-solid'
import path from 'path';
import { fileURLToPath } from "node:url"

export default defineConfig({
  plugins: [solid()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './src'),
      "lucide-solid/icons": fileURLToPath(
        new URL(
          "./node_modules/lucide-solid/dist/source/icons",
          import.meta.url,
        ),
      ),
    }
  }
})
