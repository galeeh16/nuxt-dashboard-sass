<template>
    <div>        
        <Sidebar :isSidebarShow="isSidebarShow" />

        <div id="content">
            <div class="header mb-3 d-flex justify-content-between">
                <button type="button" @click="toggleSidebar" class="btn btn-link btn-sidebar px-0" style="align-self: start;">
                    <div></div>
                    <div></div>
                    <div></div>
                </button>

                show sidebar: {{ isSidebarShow }}

                <!-- kanan -->
                <div>
                    <div class="d-flex dropdown">
                        <a class="rounded-circle dropdown-toggle bg-soft-primary d-flex align-items-center justify-content-center" 
                            style="width: 45px; height: 45px; border: 3px solid #ab82df; cursor: pointer;"
                            href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false"
                        >
                            GA
                        </a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="#">Action</a></li>
                            <li><a class="dropdown-item" href="#">Another action</a></li>
                            <li><a class="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            <client-only>
                <slot />
            </client-only>
        </div>

    </div>
</template>

<script setup>
import Sidebar from "../components/sidebar/index.vue";
import { ref, onMounted, onUpdated } from 'vue';

useHead({
    title: 'My Nuxt App'
});

// const isSidebarShow = ref(localStorage.getItem('isSidebarShow') || true);
const isSidebarShow = ref(true);

const toggleSidebar = () => {
    isSidebarShow.value = !isSidebarShow.value;
}

function cekWidth () {
    const width = window.innerWidth;

    if (width <= 1040) {
        document.querySelector('#sidebar').classList.add('sidebar-hidden');
        isSidebarShow.value = false;
    } else {
        document.querySelector('#sidebar').classList.remove('sidebar-hidden');
        isSidebarShow.value = true; 
    }
}

onMounted(() => {
    cekWidth();

    window.addEventListener("resize", cekWidth);

    const linkActive = document.querySelectorAll('.router-link-exact-active');

    linkActive.forEach(link => {
        let ulParent = link.parentNode.parentNode; // <ul>...<ul>

        if (ulParent.classList.contains('collapse')) {
            ulParent.classList.add('show');

            if (ulParent.previousElementSibling !== null) {
                ulParent.previousElementSibling.setAttribute('aria-expanded', true);
                ulParent.previousElementSibling.classList.add('has-children-active');
            }
        }
    });
});

onUpdated(() => { 
    // remove semua yg punya class has chidren active 
    document.querySelectorAll('.has-children-active').forEach(link => {
        link.classList.remove('has-children-active');
    })

    // hapus link2 activenya
    const linkActive = document.querySelectorAll('.router-link-exact-active');

    linkActive.forEach(link => {
        let ulParent = link.parentNode.parentNode; // <ul>...<ul>

        if (ulParent.classList.contains('collapse')) {
            ulParent.classList.add('show');

            if (ulParent.previousElementSibling !== null) {
                ulParent.previousElementSibling.classList.add('has-children-active');
                ulParent.previousElementSibling.setAttribute('aria-expanded', true);
            } 
        }

    });
})
</script>