import { defineNuxtConfig } from 'nuxt'
import { GlobalSettings } from './env'

const appEnv = process.env.NODE_ENV || 'development';

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static', // biar ketika page di refresh bukan di endpoint / ga 404
    ssr: false, // gatau liat di https://github.com/nuxt/nuxt.js/issues/7172
    app: {
        head: {
            link: [
                { 
                    rel: 'icon', 
                    type: 'image/x-icon', 
                    href: '/favicon.ico' 
                },
                { 
                    rel: 'shortcut icon', 
                    type: 'image/png', 
                    href: '@/assets/images/nuxt-logo.png' 
                },
            ],
            script: [
                {
                    src: '/bootstrap.bundle.min.js',
                    type: "text/javascript",
                    defer: true,
                    async: false
                }
            ]
        }
    },
    css: [
        "@/assets/app.css",
    ],

    runtimeConfig: {
        customUrl: GlobalSettings[appEnv].apiUrl, // hanya diaksesnya di SSR bukan di client/public
        secretKeyToken: 'VYW4auAOodIOk9WNM2wQutvRzfnpuiFdxQ1SGEAfguLSYwSwOjufvCt5rcpVMyOP',
        public: {
          apiUrl: GlobalSettings[appEnv].apiUrl, // can be overridden by NUXT_PUBLIC_API_BASE environment variable
        }
    },
    // build: {
    //     vendor: [
    //         'vue3-apexchart'
    //     ]
    // },
    modules: [
        '@nuxtjs/google-fonts'
    ],
    googleFonts: {
        download: true,
        inject: true,
        families: {
            'Inter': [100, 300, 400, 500, 600, 700],
        }
    },
    plugins: [
        { src: '~/plugins/feathericons.ts' },
        { src: '~/plugins/apexchart.ts' },
        { src: '~/plugins/bootstrap.ts' },
    ],    
});
