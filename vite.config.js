import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url)),
            '@assets': fileURLToPath(new URL('./src/assets', import.meta.url)),

            // Vue
            '@router': fileURLToPath(new URL('./src/router', import.meta.url)),
            '@store': fileURLToPath(new URL('./src/store', import.meta.url)),
            '@composables': fileURLToPath(new URL('./src/composables', import.meta.url)),
            '@ui': fileURLToPath(new URL('./src/ui', import.meta.url)),
            '@modules': fileURLToPath(new URL('./src/modules', import.meta.url)),

            // Js
            '@utils': fileURLToPath(new URL('./src/utils', import.meta.url)),
            '@services': fileURLToPath(new URL('./src/services', import.meta.url)),

            // Styles
            '@styles': fileURLToPath(new URL('./src/assets/styles', import.meta.url)),
        },
    },
    plugins: [vue()],
    css: {
        devSourcemap: true,
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@frontend/ui-kit/scss/mixins.scss";',
            },
        },
    },
    server: {
        open: true,
    },
    build: {
        target: ['esnext'],
    },
    base: '/',
})
