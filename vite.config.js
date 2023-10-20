import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import ViteFonts from "vite-plugin-fonts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    ViteFonts({
      google: {
        families: ["Paytone One", "Prompt", "Pacifico"],
      },
      custom: {
        Robotech: "/fonts/ROBOTECH GP.ttf",
      },
    }),
  ],
});
