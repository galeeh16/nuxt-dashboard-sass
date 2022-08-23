<template>
    <vue-feather :type="type" :size="size" v-bind="$attrs"></vue-feather>
</template>

<script setup>

defineProps({
    type: String,
    size: {
        required: false,
        type: Number,
        default: 16
    }
});
</script>

<style scoped>
i {
    display: flex;
    align-self: center;
}
</style>