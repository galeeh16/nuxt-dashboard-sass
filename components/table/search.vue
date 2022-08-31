<template>
  <div>
    <input 
    type="text" 
    :value="props.modelValue"
    @input="debounceSearch"
    v-bind="$attrs" 
    class="form-control"
    style="max-width: 300px;"/>
  </div>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    required: true,
    type: [String, Number],
    default: ''
  },
  delay: {
    required: false,
    type: Number,
    default: 400
  }
});

const emit = defineEmits(['update:modelValue', 'searching']);

let debounce = ref(null);
let stringInput = ref('');

function debounceSearch(event) {
  stringInput.value = null;
  clearTimeout(debounce.value);
  debounce.value = setTimeout(() => {
    stringInput.value = event.target.value;
    emit('update:modelValue', stringInput.value)
    emit('searching', stringInput.value);
  }, props.delay)
}
</script>