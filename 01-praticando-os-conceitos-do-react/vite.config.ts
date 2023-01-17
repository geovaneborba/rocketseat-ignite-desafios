import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://geovaneborba.github.io/rocketseat-ignite-desafios/01-praticando-os-conceitos-do-react/",
});
