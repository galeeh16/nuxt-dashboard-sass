<template>
  <div class="d-flex justify-content-between mt-3 mt-lg-3 mt-xl-0">
    <div>
      Showing {{ dataLength }} of {{ totalData }} entries
    </div>

    <paginate
      v-model="page"
      :page-count="totalPage"
      :page-range="pageRange"
      :margin-pages="2"
      :click-handler="changePage"
      :prev-text="'Prev'"
      :next-text="'Next'"
      :container-class="'pagination'"
      :page-class="'page-item'"
    >
    </paginate>
  </div>
</template>

<script setup>
defineProps({
  page: Number, 
  dataLength: Number,
  totalData: Number,
  totalPage: Number,
  changePage: Function,
  pageRange: {
    required: false,
    default: 3,
    type: Number
  }
});
</script>