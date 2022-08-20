<template>
    <div class="card" style="height: 332px;">
        <div class="card-header border-bottom">
            <h5 class="card-title mb-0">Designers and Squads</h5>
        </div>
        <div class="card-body">
            <div>
                <ApexChart width="100%" type="bar" :options="options" :series="series" :height="250"></ApexChart>
            </div>
        </div>
    </div>
</template>

<script setup>
import ApexChart from '../ApexChart.vue';
import { ref } from 'vue';

let options = ref({
    chart: {
        toolbar: {
            show: false
        }
    },
    fill: {
        colors: ['#0084ff', '#00c261']
    },
    plotOptions: {
        bar: {
            distributed: false, // different color each bar
            columnWidth: '70%',
            borderRadius: 4,
        },
    },
    xaxis: {
        categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    }
});

let series = ref([
    {
        name: 'Total Designer',
        data: [40, 35, 20, 49, 60, 70, 91, 12, 44]
    },
    {
        name: 'Total Squads',
        data: [14, 45, 15, 79, 56, 12, 78, 16, 29]
    },

]);

</script>