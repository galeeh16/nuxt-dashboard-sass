<template>
	<div class="card">
		<div class="card-header">
			<h5 class="mb-0">Management Users</h5>
		</div>
		<div class="card-body">
				<button type="button" class="btn btn-primary d-flex"><Icon type="plus-circle" class="me-1" /> Add User</button>

				<div class="mt-4">
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
											<th class="text-center text-nowrap">Name</th>
											<th class="text-center text-nowrap">Email</th>
											<th class="text-center text-nowrap">Is Verified</th>
											<th class="text-center text-nowrap">Location</th>
											<th class="text-center text-nowrap">NIK</th>
											<th class="text-center text-nowrap">Phone</th>
											<th class="text-center text-nowrap">Gender</th>
											<th class="text-center text-nowrap" style="width: 200px;">Action</th>
										</tr>
									</thead>
										<tbody>
											<template v-if="loading">
												<tr>
													<td colspan="7">
														<div class="d-flex justify-content-center align-items-center" style="min-height: 80px;">
															<Loading />
														</div>
													</td>
												</tr>
											</template>
											<template v-else>
												<tr v-for="(user, i) in dataUsers" :key="user.user_id">
													<td class="text-center">{{ (((page - 1) * perPage) + 1) + i }}</td>
													<td>{{ user.name }}</td>
													<td>{{ user.email }}</td>
													<td>{{ user.is_verified }}</td>
													<td>{{ user.job_location }}</td>
													<td>{{ user.nik }}</td>
													<td>{{ user.phone }}</td>
													<td>
														<span v-if="user.gender === 'l'">
															Male
														</span>
														<span v-else>
															Female
														</span>
													</td>
													<td class="text-center d-flex justify-content-center">
														<button type="button" class="btn bg-soft-primary text-primary border-0 btn-sm me-2 d-flex"><Icon type="edit-3" :size="13" class="me-1" /> Edit</button>
														<button type="button" class="btn bg-soft-danger text-danger border-0 btn-sm d-flex"><Icon type="trash-2" :size="14" class="me-1" /> Delete</button>
													</td>
												</tr>
											</template>
										</tbody>
								</table>
						</div>

						<div class="d-flex justify-content-between mt-3 mt-lg-3 mt-xl-0">
							<div>
								Showing {{ dataUsers.length }} of {{ totalData }} entries
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
	</div>
</template>

<script setup>
import Icon from '@/components/icon/index.vue';
import axios from 'axios';
import { ref } from 'vue';

useHead({
    title: 'Management Users'
});

const config = useRuntimeConfig();

let loading = ref(false);
let dataUsers = ref([]);
let perPage = ref(10);
let page = ref(1);
let totalPage = ref(10);
let totalData = ref(0);

const getData = async (p = 1) => {
    try {
        loading.value = true;
        const response = await axios.get(`${config.public.apiUrl}/api/v1/admin/users?page=${page.value}&limit=${perPage.value}`);
        const { data, meta } = await response.data;
        
        dataUsers.value = data;
        totalData.value = meta.total;
        totalPage.value = meta.last_page;
        page.value = p;
        loading.value = false;
    } catch (err) {
        loading.value = false;
    }
    
}

onMounted(() => {
    getData();
});

const changePage = async (page) => {
    await getData(page);
}

const changePerPage = async () => {
    await getData(1);
}

</script>