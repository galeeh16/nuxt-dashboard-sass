<template>
  <div class="text-center position-fixed">
    <h1 class="mt-5">{{ props.error.statusCode }}</h1>
    <div v-if="props.error.statusCode">
      <h4 class="text-muted mt-5 mb-5">{{ props.error.statusMessage }}</h4>
      <h5>{{ props.error.description }}</h5>
    </div>
    
    <button @click="handleError" type="button" class="btn btn-primary mt-5"><i class="bi bi-arrow-left"></i> Back to Home</button>
  </div>
</template>

<script setup>
const props = defineProps({
  error: { 
    url: String, 
    statusCode: String, 
    statusMessage: String, 
    message: String, 
    description: String|Object|Array|Number, 
    data: String|Object|Array|Number, 
  }     
});

const handleError = () => clearError({ redirect: '/' });
</script>

<style scoped>
  h1 {
    font-size: 100px !important;
  }
  div.position-fixed {
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(45deg, #fefde9, #f1caca);
  }
</style>>