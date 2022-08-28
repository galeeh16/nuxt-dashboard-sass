<template>
    <div class="card" style="height: 352px;">
        <div class="card-header">
            <h5 class="card-title mb-0">Role Designers</h5>
        </div>
        <div class="card-body">
            <div>
                <apex-chart width="100%" type="bar" :options="options" :series="series" :height="250"></apex-chart>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';

let options = ref({
    chart: {
        toolbar: {
            show: false
        }
    },
    fill: {
        colors: ['#8a2aff']
    },
    plotOptions: {
        bar: {
            distributed: false, // different color each bar
            columnWidth: '70%',
            borderRadius: 5,
        },
    },
    xaxis: {
        categories: [2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022]
    }
});

let series = ref([
    {
        name: 'Total Designer',
        data: [30, 35, 40, 49, 60, 70, 91, 112, 144]
    },
    
]);
</script>