<script lang="ts" setup>
import VueDraggableResizable from 'vue-draggable-resizable';

const props = defineProps(['name', 'canmove'])
</script>

<template>
    <div v-if="canmove">
        <vue-draggable-resizable class="!w-fit !h-auto" :resizable="false">
            <div class="w-24 flex flex-col items-center h-24">
                <img src="@/assets/folder.png" alt="folder.icon">
                <span class="drop-shadow-md whitespace-nowrap">{{ props.name }}</span>
            </div>
        </vue-draggable-resizable>
    </div>

    <div v-else class="w-24 flex flex-col items-center h-24">
        <img src="@/assets/folder.png" alt="folder.icon">
        <span class="drop-shadow-md whitespace-nowrap">{{ props.name }}</span>
    </div>
</template>