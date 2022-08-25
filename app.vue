<template>
  <NuxtLayout>
    <NuxtLoadingIndicator color="#8a2aff" :height="2" :duration="1000" :throttle="100" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
import '@vueform/multiselect/themes/default.css';
</script>