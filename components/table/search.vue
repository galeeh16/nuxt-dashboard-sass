<template>
  <div>
    <input 
    type="text" 
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
    v-bind="$attrs" 
    class="form-control"
    style="max-width: 300px;"/>
  </div>
</template>

<script setup>
defineProps({
  modelValue: {
    required: true,
    type: [String, Number],
    default: ''
  },
})
</script>