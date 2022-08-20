<template>
    <apexchart
        :type="type" 
        :options="options" 
        :series="series" 
        :height="height"
    ></apexchart>
</template>

<script setup>
// const ApexCharts = defineAsyncComponent(() => import("vue3-apexcharts"));
// export default {
//     name: 'ApexChart',
//     components: {
//         [process.client && 'apexchart']: () => import('vue3-apexcharts'),
//     },
//     props: {
//         options: Object,
//         series: Array,
//         type: String,
//         height: {
//             required: false,
//             type: Number,
//             default: 200
//         }
//     }
// }

defineProps({
    options: Object,
    series: Array,
    type: String,
    height: {
        required: false,
        type: Number,
        default: 200
    }
})
</script>
