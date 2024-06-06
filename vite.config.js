import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@views': fileURLToPath(new URL('./src/views', import.meta.url)),
        },
    },
    plugins: [vue()],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {},
        },
    },
    server: {
        open: true,
    },
    build: {
        target: ['esnext'],
    },
    base: '/palettes',
})
