import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],

	// AÑADE ESTE BLOQUE:
	server: {
		host: true, // Esto hace que Vite escuche en 0.0.0.0, haciéndolo accesible desde la red.
		port: 5173, // Opcional, pero bueno para asegurar el puerto
	},
});
