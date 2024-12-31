import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

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
        author: "keiko233",
        defaulticon: "Save Xfolio images quickly and easily",
      },
    }),
  ],
});
