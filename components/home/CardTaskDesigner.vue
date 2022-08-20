<template>
    <div class="card">
        <div class="card-header d-flex justify-content-between">
            <h5 class="card-title mb-0">Task Designers</h5>

            <div style="width: 300px;">
                <Multiselect 
                    v-model="filterTaskDesigner" 
                    :options="dropdownFilterTaskDesigner"
                    :close-on-select="true"
                    :searchable="false"
                    :can-clear="false"
                    placeholder="Select Task Designer"
                ></Multiselect>
            </div>

        </div>
        <div class="card-body">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th class="text-center bg-light">Name</th>
                        <th class="text-center bg-light">Role</th>
                        <th class="text-center bg-light">Job Role</th>
                        <th class="text-center bg-light">Total Squad</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="i in 5" :key="i">
                        <td>Galih Anggoro Jati</td>
                        <td>Member</td>
                        <td>Designer</td>
                        <td class="text-end">{{ i }}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup>
import Multiselect from '@vueform/multiselect';
import { ref } from 'vue';

let filterTaskDesigner = ref('%');

const dropdownFilterTaskDesigner = ref([
    {label: 'All Role', value: '%'}, 
    {label: 'UX Designer', value: '1'},
    {label: 'Programmer', value: '2'},
    {label: 'UI Designer', value: '3'},
    {label: 'UI Engineer', value: '4'},
]);
</script>