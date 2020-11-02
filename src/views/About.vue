<template>
    <div class="about">
        <h1>This is an about page</h1>
        <Modal :isOpen="modalIsOpen" @close-modal="onModalClose">123</Modal>
        <button @click="onModalOpen">Open</button>
        <Suspense>
            <template #default>
                <div>
                    <AsyncShow />
                    <DogShow />
                </div>
            </template>
            <template #fallback>
                <h1>loading...</h1>
            </template>
        </Suspense>
        <p>{{ error }}</p>
    </div>
</template>
<script lang="ts">
import Modal from "@/components/Modal.vue";
import AsyncShow from "@/components/AsyncShow.vue";
import DogShow from "@/components/DogShow.vue";

import { ref, onErrorCaptured } from "vue";
export default {
    components: {
        Modal,
        AsyncShow,
        DogShow
    },
    setup() {
        const error = ref(null);
        onErrorCaptured((e: any) => {
            error.value = e;
            return true;
        });

        const modalIsOpen = ref(false);
        const onModalOpen = () => {
            modalIsOpen.value = true;
        };
        const onModalClose = () => {
            modalIsOpen.value = false;
        };
        return {
            modalIsOpen,
            onModalOpen,
            onModalClose,
            error
        };
    }
};
</script>