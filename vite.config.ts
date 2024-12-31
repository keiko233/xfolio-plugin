import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import monkey, { cdn } from "vite-plugin-monkey";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    monkey({
      entry: "src/main.tsx",
      userscript: {
        icon: "https://majokeiko.com/logo.jpeg",
        namespace: "npm/vite-plugin-monkey",
        match: ["https://xfolio.jp/*"],
      },
      build: {
        externalGlobals: {
          react: cdn.jsdelivr("React", "umd/react.production.min.js"),
          "react-dom": cdn.jsdelivr(
            "ReactDOM",
            "umd/react-dom.production.min.js",
          ),
        },
      },
    }),
  ],
});
