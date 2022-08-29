import { ref } from 'vue';

export function useDropdownStatus() {
  let status = ref([
    {
      value: '1',
      label: 'Supported'
    },
    {
      value: '2',
      label: 'Unsupported yet'
    },
    {
      value: '3',
      label: 'Not supported anymore'
    }
  ]);

  return {
    status
  }
}