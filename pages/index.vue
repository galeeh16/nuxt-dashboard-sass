<script setup>
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
  <div>
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
  </div>
</template>