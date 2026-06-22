// vite.config.ts
export default defineConfig({
  base: '/', // si el repo se llama originalharu.github.io
  // o
  base: '/nombre-del-repo/', // si es un repo cualquiera
  plugins: [react()],
})