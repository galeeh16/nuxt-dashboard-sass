import Paginate from 'vuejs-paginate-next';

export default defineNuxtPlugin((nuxtApp) => {
  if (process.client) {
    nuxtApp.vueApp.use(Paginate);
    nuxtApp.vueApp.component('paginate', Paginate);
  }
});