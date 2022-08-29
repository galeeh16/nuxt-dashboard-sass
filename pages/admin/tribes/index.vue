<template>
  <div class="card">
    
    <Spinner :show="showSpinner" />

    <div class="card-header">
      <h5 class="card-title mb-0">Management Tribes</h5>
    </div>
    <div class="card-body">
      <button type="button" class="btn btn-primary d-flex mb-4" data-bs-toggle="modal" data-bs-target="#modalAddTribe"><Icon type="plus-circle" class="me-1" /> Add Tribe</button>
      
      <ModalAdd @onSubmitForm="submitHandler" />
    
      <div class="d-flex justify-content-between align-items-center mb-3">
        <div class="d-flex align-items-center">
          <div class="me-1">Show</div>
          <select class="form-select" v-model="perPage" @change="changePerPage" style="max-width: 70px">
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
          <div class="ms-1">Entries</div>
        </div>

        <!-- <input type="text" @input="debounceSearch" class="form-control" style="max-width: 300px;" placeholder="Search..."> -->
        <Search v-model="search" :delay="300" placeholder="Search tribe..." @searching="searchData" />
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
              <th class="text-center text-nowrap">Created At</th>
              <th class="text-center text-nowrap" style="width: 160px;">Action</th>
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
                <td>
                  <div class="d-flex align-items-center" style="gap: 4px;">
                    {{ tribe.kode_tribe }}
                    <span v-if="tribe.is_new" class="badge bg-soft-primary text-primary text-sm" style="font-size: 9.5px; padding: 2px 4px;">New</span>
                  </div>
                </td>
                <td class="text-nowrap">{{ tribe.nama_tribe }}</td>
                <td class="text-center">
                  <span v-if="tribe.status_tribe === 'Supported'" class="badge bg-soft-success text-success">{{ tribe.status_tribe }}</span>
                  <span v-else-if="tribe.status_tribe === 'Unsupported yet'" class="badge bg-soft-primary text-primary">{{ tribe.status_tribe }}</span>
                  <span v-else class="badge bg-soft-danger text-danger">{{ tribe.status_tribe }}</span>
                </td>
                <td class="text-nowrap">{{ tribe.ecosystem?.kode_ecosystem + ' (' + tribe.ecosystem?.nama_ecosystem + ')'}}</td>
                <td>{{ tribe.created_at }}</td>
                <td class="d-flex justify-content-center">
                  <button type="button" class="btn bg-soft-primary text-primary border-0 btn-sm me-2 d-flex">
                    <Icon type="edit-3" :size="13" class="me-1" />
                    Edit
                  </button>
                  <button type="button" class="btn bg-soft-danger text-danger border-0 btn-sm d-flex">
                    <Icon type="trash-2" :size="13" class="me-1" />
                    Delete
                  </button>
                </td>
              </tr>
            </template>
          </tbody>
        </table>
      </div>

      <Paginate 
        :page="page"
        :dataLength="dataTribes.length"
        :totalData="totalData"
        :totalPage="totalPage"
        :changePage="changePage"
        :page-range="3"
      />
    </div>

  </div>
</template>

<script setup>
import { ref } from 'vue';
import axios from 'axios';
import Paginate from '@/components/table/paginate.vue';
import Search from '@/components/table/search.vue';
import ModalAdd from '@/components/admin/tribes/add.vue';

useHead({
  title: 'Management Tribes'
});

let showModal = ref(false);
const closeModal = () => {
  showModal.value = false;
}

let showSpinner = ref(false);

let page = ref(1);
let loading = ref(false);
let dataTribes = ref([]);
let totalData = ref(0);
let perPage = ref(10);
let totalPage = ref(0);

let search = ref('');

let config = useRuntimeConfig();

const getData = async (p = 1) => {
  try {
    loading.value = true;
    const response = await axios.get(`${config.public.apiUrl}/api/v1/admin/tribes?page=${p}&limit=${perPage.value}&search=${search.value}`);
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

const searchData = async (searchParam) => {
  try {
    page.value = 1;
    search.value = searchParam;
    loading.value = true;

    const response = await axios.get(`${config.public.apiUrl}/api/v1/admin/tribes?page=${page.value}&limit=${perPage.value}&search=${searchParam}`);
    const { data, meta } = await response.data;

    dataTribes.value = data;
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

const changePage = async (p) => {
  await getData(p);
}

const changePerPage = async () => {
  page.value = 1;
  await getData(1);
}

let modalAddTribe = ref();

const submitHandler = async (params) => {
  showSpinner.value = true;

  try {
    const response = await axios.post(`${config.public.apiUrl}/api/v1/admin/tribes`, params);
    const data = await response.data;
    showSpinner.value = false;

    modalAddTribe.value.hide();

    await getData(1);

  } catch (err) {
    showSpinner.value = false;
    if (err.response) {
      if (err.response.status == 422) {
        alert(err.response.status);
      }
    }
  }
}

onMounted(() => {
  modalAddTribe.value = new bootstrap.Modal('#modalAddTribe');
})

</script>