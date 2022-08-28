<template>
    <div class="card" style="height: 332px;">
        <div class="card-header border-bottom">
            <h5 class="card-title mb-0">Designers and Squads</h5>
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
    colors: ['#8a2aff', '#02d46b'], // untuk warna dot dibawah chart
    fill: {
        colors: ['#8a2aff', '#02d46b'] // warna chart
    },
    plotOptions: {
        bar: {
            distributed: false, // different color each bar
            columnWidth: '70%',
            borderRadius: 4,
        },
    },
    xaxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022]
    }
});

let series = ref([
    {
        name: 'Total Designer',
        data: [40, 49, 60, 70, 91, 42, 44]
    },
    {
        name: 'Total Squads',
        data: [45, 79, 56, 32, 78, 56, 39]
    },

]);

</script>