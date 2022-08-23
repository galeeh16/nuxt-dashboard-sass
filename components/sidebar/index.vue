<template>
    <div id="sidebar" :class="[props.isSidebarShow ? '' : 'sidebar-hidden']">
        <div class="sidebar-logo position-relative">
            <NuxtLink href="/" class="text-decoration-none">
                <h3 style="font-family: sans-serif; font-weight: 700;" class="text-primary">Admiin </h3>
            </NuxtLink>
        </div>
        <div class="sidebar-nav">
            <ul>
                <li>
                    <NuxtLink to="/" class="d-flex align-items-center"><Icon type="home" /> <span>Dashboard</span></NuxtLink>
                </li>
                <li>
                    <a href="javascript:void(0);" class="has-submenu d-flex align-items-center" data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        <Icon type="layers" /> 
                        <span>Admin</span>
                    </a>
                    <ul id="collapseExample" class="collapse">
                        <li>
                            <NuxtLink href="/admin/users"><span>Users</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/admin/squads"><span>Squads</span></NuxtLink>
                        </li>
                        <li>
                            <NuxtLink href="/admin/products"><span>Products</span></NuxtLink>
                        </li>
                    </ul>

                </li>
                <li>
                    <NuxtLink to="/aboutt"><Icon type="layers" /> <span>Page Not Found</span></NuxtLink>
                </li>
                <li>
                    <NuxtLink to="/not-authorize"><Icon type="layers" /> <span>Private Route</span></NuxtLink>
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