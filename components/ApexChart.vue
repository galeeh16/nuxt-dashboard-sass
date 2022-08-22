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

<!-- 
<template>
  <client-only>
    <component
      :is="apexchart"
      height="160"
      width="320"
      type="area"
      :options="options"
      :series="series"
    />
  </client-only>
</template>

<script>
export default {
  computed: {
    apexchart() {
      return () => {
        if (process.client) {
          return import('vue3-apexcharts')
        }
      }
    }
  }
}
</script> -->