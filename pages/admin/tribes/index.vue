<template>
  <div class="card">
    <div class="card-header">
      <h5 class="card-title mb-0">Management Tribes</h5>
    </div>
    <div class="card-body">
       <div class="d-flex justify-content-between align-items-center mb-3">
          <div class="d-flex align-items-center">
            <div class="me-1">Show</div>
            <select name="rows_per_page" id="rows_per_page" class="form-select" v-model="perPage" @change="changePerPage" style="max-width: 66px">
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="25">25</option>
                <option value="50">50</option>
            </select>
            <div class="ms-1">Entries</div>
          </div>

          <input type="text" class="form-control" style="max-width: 300px;" placeholder="Search...">
      </div>

      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th class="text-center text-nowrap">No</th>
              <th class="text-center text-nowrap">Kode Tribe</th>
              <th class="text-center text-nowrap">Nama Tribe</th>
              <th class="text-center text-nowrap">Status Tribe</th>
              <th class="text-center text-nowrap">Ecosystem</th>
              <th class="text-center text-nowrap">Action</th>
            </tr>
          </thead>
          <tbody>
            <template v-if="loading">
              <tr>
                <td colspan="6">
                  <div class="d-flex justify-content-center align-items-center" style="min-height: 80px;">
                    <Loading />
                  </div>
                </td>
              </tr>
            </template>
            <template v-else>
              <tr v-for="(tribe, i) in dataTribes" :key="tribe.tribe_id">
                <td class="text-center">{{ (((page - 1) * perPage) + 1) + i }}</td>
                <td>{{ tribe.kode_tribe }}</td>
                <td class="text-nowrap">{{ tribe.nama_tribe }}</td>
                <td class="text-center">
                  <span v-if="tribe.status_tribe === 'Supported'" class="badge bg-soft-success text-success">{{ tribe.status_tribe }}</span>
                  <span v-else-if="tribe.status_tribe === 'Unsupported yet'" class="badge bg-soft-primary text-primary">{{ tribe.status_tribe }}</span>
                  <span v-else class="badge bg-danger">{{ tribe.status_tribe }}</span>
                </td>
                <td class="text-nowrap">{{ tribe.ecosystem?.kode_ecosystem + ' (' + tribe.ecosystem?.nama_ecosystem + ')'}}</td>
                <td class="d-flex justify-content-center">
                  <button type="button" class="btn bg-soft-primary text-primary border-0 btn-sm me-2">Edit</button>
                  <button type="button" class="btn bg-soft-danger text-danger border-0 btn-sm">Delete</button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <div class="d-flex justify-content-between mt-3 mt-lg-3 mt-xl-0">
        <div>
          Showing {{ dataTribes.length }} of {{ totalData }} entries
        </div>

        <paginate
          v-model="page"
          :page-count="totalPage"
          :page-range="10"
          :margin-pages="2"
          :click-handler="changePage"
          :prev-text="'Prev'"
          :next-text="'Next'"
          :container-class="'pagination'"
          :page-class="'page-item'"
        >
        </paginate>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';

useHead({
  title: 'Management Tribes'
});

let page = ref(1);
let loading = ref(false);
let dataTribes = ref([]);
let totalData = ref(0);
let perPage = ref(10);
let totalPage = ref(0);

let config = useRuntimeConfig();

const getData = async (p = 1) => {
  try {
    loading.value = true;
    const response = await axios.get(`${config.public.apiUrl}/api/v1/admin/tribes?page=${page.value}&limit=${perPage.value}`);
    const { data, meta } = await response.data;

    dataTribes.value = data;
    page.value = p;
    totalPage.value = meta.last_page;
    totalData.value = meta.total;

    loading.value = false;
  } catch (err) {
    loading.value = false;
  }
  

}

onMounted(() => {
  getData(1);
});

const changePage = async (page) => {
  await getData(page);
}

const changePerPage = async () => {
  await getData(1);
}

</script>