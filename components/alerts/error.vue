<template>
    <div class="position-fixed" style="z-index: 9999;" v-show="isShowing">
        <div class="my-alert-danger d-flex justify-content-between align-items-center">
            <div></div>
            <div>
                {{ props.message }}
            </div>

            <div style="justify-self: flex-end;">
                <i class="bi bi-x" style="font-size: 25px; cursor: pointer;" @click="isShowing =false"></i>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from 'vue';

const props = defineProps({
    message: {
        required: true,
        default: "Whoops, something went wrong :("
    },
    show: {
        required: true,
        type: Boolean,
        default: true
    }
});

let isShowing = ref(props.show);

</script>

<style scoped lang="scss">
.my-alert-danger {
    transition: all 0.4s ease-in-out;
    width: 100vw;
    background: #dc183f;
    color: #fff;
    padding: 12px 1.5rem;
    min-height: 40px;
    text-align: center;
    font-weight: 500;
}
</style>
