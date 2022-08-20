<script setup>
import { computed, ref, onMounted } from 'vue';
import CardDashboard from '@/components/home/CardDashboard.vue';
import CardDashboardDesigner from '@/components/home/CardDashboardDesigner.vue';
import CardDesignerAndSquad from '@/components/home/CardDesignerAndSquad.vue';
import CardTaskDesigner from '@/components/home/CardTaskDesigner.vue';
import CardRoleDesigner from '@/components/home/CardRoleDesigner.vue';

useHead({
  title: 'Home'
});
</script>

<template>
  <div class="container-fluidddd">
    <div class="row mb-4 mt-1">
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-sm-4 mb-4 mb-lg-0">
        <CardDashboard title="Total Users" grow="+0.5%" total="1.024" button-string="View Users" href="/admin/users" />
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-sm-4 mb-4 mb-lg-0">
        <CardDashboard title="Total Products" grow="+30.5%" total="544" button-string="View Products" href="/admin/products" />
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-sm-4 mb-4 mb-lg-0">
        <CardDashboard title="Total Visitors" grow="+2%" total="2.024.890" :showButton="false" />
      </div>
      <div class="col-xl-3 col-lg-4 col-md-6 col-sm-12 mb-sm-4 mb-4 mb-lg-0">
        <CardDashboard title="Total Subsribers" grow="+0.5%" total="6.024" :showButton="false" />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-xl-3 col-lg-4 col-xs-12">
        <CardDashboardDesigner />
      </div>
      <div class="col-xl-9 col-lg-8 col-xs-12">
        <CardDesignerAndSquad />
      </div>
    </div>

    <div class="row mb-4">
      <div class="col-xl-6 col-lg-6 col-xs-12">
        <CardTaskDesigner />
      </div>
      <div class="col-xl-6 col-lg-6 col-xs-12">
        <CardRoleDesigner />
      </div>
    </div>

    <!-- <div class="card">
      <div class="card-header">
        <h5 class="card-title mb-0">Data Todos</h5>
      </div>
      <div class="card-body">
        <button type="button" class="btn btn-primary mb-4" @click="getData"><i class="bi bi-repeat"></i> Refresh Todos</button>

        <div v-if="isLoading">
          <div class="alert alert-secondary">
            Loading...
          </div>
        </div>
        <div v-else>
          <div class="d-flex justify-content-end">
            <input type="text" style="max-width: 300px;" v-model="search" v-on:input="filterInput" class="form-control mb-3" placeholder="Search products by title or id..." />
          </div>

          <table class="table table-hover table-bordered">
            <thead>
              <tr>
                <th class="text-center bg-light">ID</th>
                <th class="text-center bg-light">Title</th>
                <th class="text-center bg-light">Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="post in filtered" :key="post.id">
                <td class="text-center">{{ post.id }}</td>
                <td>{{ post.title }}</td>
                <td class="text-center">
                  <span v-if="post.completed === true" class="badge bg-soft-success text-success fw-semibold px-2 py-2 rounded-pill">Completed</span>
                  <span v-else class="badge bg-soft-danger text-danger fw-semibold px-2 py-2 rounded-pill">Uncompleted</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        
      </div>
    </div> -->


  </div>

</template>