import VueApexCharts from "vue3-apexcharts";

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        // The app.use(VueApexCharts) will make <apexchart> component available everywhere.
        nuxtApp.vueApp.use(VueApexCharts)
    }
})