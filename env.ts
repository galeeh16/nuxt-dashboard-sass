export const GlobalSettings = {
    development: {
        apiUrl: process.env.NUXT_API_URL || 'http://10.30.8.40:7000'
    },
    production: {
        apiUrl: 'http://10.17.8.40:7000'
    }
}
