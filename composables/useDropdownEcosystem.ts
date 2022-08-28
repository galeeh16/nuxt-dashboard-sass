import { ref } from 'vue';

export async function useDropdownEcosystem() {
  let ecosystems = ref([]);
  let url = useRuntimeConfig().public.apiUrl;

  const response = await fetch(`${url}/api/v1/dropdown/ecosystems`)
  const data = await response.json();
  
  ecosystems.value = data.data.map(row => {
    return {
      value: row.ecosystem_id,
      label: row.kode_ecosystem + ' - (' + row.nama_ecosystem + ')',
    }
  });

  return {
    ecosystems
  }
}