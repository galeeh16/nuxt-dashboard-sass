import { ref } from 'vue';

export function useDropdownStatus() {
  let status = ref([
    {
      value: 'Supported',
      label: 'Supported'
    },
    {
      value: 'Unsupported yet',
      label: 'Unsupported yet'
    },
    {
      value: 'Not supported anymore',
      label: 'Not supported anymore'
    }
  ]);

  return {
    status
  }
}