<template>
    <vue-feather :type="type" :size="size" v-bind="$attrs" style="display: inline-block; align-self: center; margin-right: 2px;"></vue-feather>
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