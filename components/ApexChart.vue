<template>
    <apexchart
        :type="type" 
        :options="options" 
        :series="series" 
        :height="height"
    ></apexchart>
</template>

<script setup>
onMounted(() => {
    nextTick(() => {
        window.dispatchEvent(new Event('resize'));
    });
});

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