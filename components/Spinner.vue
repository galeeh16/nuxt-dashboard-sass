<template>
  <div class="backdrop" v-if="show">
    <div class="position-fixed bg-white p-4" style="width: 200px; left: 50%; top: 50%; transform: translate(-50%, -50%); z-index: 9999; border-radius: 10px;">
      <div class="d-flex justify-content-center" style="gap: 5px;">
        <div class="spinner-grow text-primary" role="status" style="width: 1.5rem; height: 1.5rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-success" role="status" style="width: 1.5rem; height: 1.5rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-light" role="status" style="width: 1.5rem; height: 1.5rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary" role="status" style="width: 1.5rem; height: 1.5rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
        <div class="spinner-grow text-dark" role="status" style="width: 1.5rem; height: 1.5rem;">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  show: {
    type: Boolean,
    required: true,
    default: false
  }
});
</script>

<style scoped>
.backdrop::after {
  z-index: 9998;
  position: fixed;
  content: '';
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: #000;
  opacity: 0.4;
}
</style>