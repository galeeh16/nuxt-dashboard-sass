export const GlobalSettings = {
    development: {
        apiUrl: process.env.NUXT_API_URL || 'http://localhost:7000'
    },
    production: {
        apiUrl: 'http://10.17.8.40:7000'
    }
}
