<template>
    <div class="card h-100">
        <div class="card-header d-flex justify-content-between">
            <h5 class="card-title mb-0">{{ props.title }}</h5>
            <small class="text-muted font-semibold">Last Month</small>
        </div>
        <div class="card-body">
            <div class="d-flex justify-content-between">
                <h5 class="text-success">{{ props.grow }}</h5>
                <h4>{{ props.total }}</h4>
            </div>
            <!-- <button type="button" class="btn btn-sm btn-primary" v-if="showButton">{{ props.buttonString }}</button> -->
            <NuxtLink :href="href" class="btn btn-sm btn-primary" v-if="showButton">{{ props.buttonString }}</NuxtLink>
        </div>
    </div>
</template>

<script setup>
    const props = defineProps({
        title: {
            required: true,
            type: String,
            default: 'title'
        },
        grow: {
            require: true,
            type: String,
            default: '0%'
        },
        total: {
            required: true,
            type: String,
            default: 'total'
        },
        buttonString: {
            require: true,
            type: String,
            default: 'View'
        },
        showButton: {
            required: false,
            type: Boolean,
            default: true
        },
        href: {
            required: false,
            type: String,
            default: '/'
        }
    });
</script>