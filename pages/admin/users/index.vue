<template>
    <div class="card">
        <div class="card-header">
            <h5 class="mb-0">Management Users</h5>
        </div>
        <div class="card-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos accusantium quasi deleniti incidunt reprehenderit. Eos suscipit dolores, iusto fugiat aperiam asperiores sapiente magnam cupiditate nulla? Nesciunt consequuntur ducimus assumenda ex.</p>

            <div class="mt-4">
                <table class="table table-bordered table-hover">
                    <thead>
                        <tr>
                            <th class="text-center text-nowrap">No</th>
                            <th class="text-center text-nowrap">Name</th>
                            <th class="text-center text-nowrap">Email</th>
                            <th class="text-center text-nowrap">Created At</th>
                            <th class="text-center text-nowrap">Updated At</th>
                            <th class="text-center text-nowrap">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="i in 10" :key="i">
                            <td class="text-center">{{ i }}</td>
                            <td>Galih Anggoro Jati</td>
                            <td>galihando@gmail.com</td>
                            <td>20/08/2022 18:00</td>
                            <td>-</td>
                            <td class="text-center d-flex justify-content-center">
                                <button type="button" class="btn btn-sm btn-dark me-2 d-flex"><Icon type="edit-3" :size="13" class="me-1" /> Edit</button>
                                <button type="button" class="btn btn-sm btn-danger d-flex"><Icon type="trash-2" :size="14" class="me-1" /> Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/icon/index.vue';
useHead({
    title: 'Management Users'
})
</script>