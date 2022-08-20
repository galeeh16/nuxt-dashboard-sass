import VueFeather from 'vue-feather';

export default defineNuxtPlugin((nuxtApp) => {
    if (process.client) {
        nuxtApp.vueApp.component('vue-feather', VueFeather)
    }
})