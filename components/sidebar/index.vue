<template>
    <div id="sidebar" :class="[props.isSidebarShow ? '' : 'sidebar-hidden']">
        <div class="sidebar-logo position-relative">
            <NuxtLink href="/" class="text-decoration-none d-flex align-items-start">
                <Logo />
                <h3 style="font-family: sans-serif; font-weight: 700;" class="text-primary m-0 ms-2">Admiin </h3>
            </NuxtLink>
        </div>
        <div class="sidebar-nav">
            <ul>
                <li>
                    <NuxtLink to="/" class="d-flex align-items-center"><Icon type="sliders" /> <span class="ms-1">Dashboard</span></NuxtLink>
                </li>
                <li>
                    <a href="javascript:void(0);" class="has-submenu d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <Icon type="layers" /> 
                        <span class="ms-1">Admin</span>
                    </a>
                    <ul id="collapseExample" class="collapse">
                        <li>
                            <NuxtLink href="/admin/users"><span>Users</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/admin/ecosystems"><span>Ecosystems</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/admin/tribes"><span>Tribes</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/admin/products"><span>Products</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/admin/squads"><span>Squads</span></NuxtLink>
                        </li>
                    </ul>

                </li>
                <li>
                    <span class="sidebar-title">Admin</span>
                </li>
                <li>
                    <NuxtLink to="/admin/users"><Icon type="layers" /> <span>Users</span></NuxtLink>
                </li>

            </ul>
        </div>
    </div>
</template>

<script setup>
import Icon from '@/components/icon/index.vue';

const props = defineProps({
    isSidebarShow: Boolean
})
</script>