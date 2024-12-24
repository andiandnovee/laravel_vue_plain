import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
    plugins: [
        laravel({
            input: ['resources/css/app.css', 'resources/js/app.js'], // Pastikan input CSS dan JS yang benar
            refresh: true, // Refresh otomatis saat ada perubahan
        }),
        vue(), // Plugin Vue untuk Vite
    ],
    resolve: {
        alias: {
            '@components': '/resources/js/components', // Alias untuk folder 'components'
        },
    },
    server: {
        // Mengatur server untuk memastikan akses ke asset lokal
        hmr: {
            protocol: 'ws',
            host: 'localhost',
        },
    },
});
