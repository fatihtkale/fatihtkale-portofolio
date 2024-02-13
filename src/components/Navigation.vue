<template>
    <div class="flex flex-col items-center bg-zinc-700">
        <footer class="fixed bg-[#53535352] border border-[#ffffff2e] backdrop-blur-[13px] drop-shadow-md bottom-2 p-4 mb-4 rounded-[16px] mx-auto w-auto shadow-2xl z-10 flex items-end" :style="{ height: '95px' }" @mousemove="updatePosition" @mouseleave="resetPosition">
            <div class="flex items-end gap-x-4" :style="{ height: '100px' }">
                <div ref="buttonA" class="rounded-xl w-full h-full cursor-pointer" :style="{ width: computedSize(buttonA), height: computedSize(buttonA) }">
                    <img src="@/assets/finder.png" class="h-full w-full" alt="">
                </div>
                <a href="https://github.com/fatihtkale" target="_blank" ref="buttonB" class="rounded-xl w-full h-full cursor-pointer" :style="{ width: computedSize(buttonB), height: computedSize(buttonB) }">
                    <img src="@/assets/github.png" class="h-full w-full" alt="">
                </a>
                <div @click="emit('openNotepad')" ref="buttonC" class="rounded-xl w-full h-full cursor-pointer" :style="{ width: computedSize(buttonC), height: computedSize(buttonC) }">
                    <img src="@/assets/notes.png" class="h-full w-full" alt="">
                </div>
            </div>
        </footer>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const emit = defineEmits(['openNotepad']);

const x = ref(10000);
const y = ref(10000);
const buttonA = ref(null);
const buttonB = ref(null);
const buttonC = ref(null);
// const buttonD = ref(null);
// const buttonE = ref(null);
// const buttonF = ref(null);
// const buttonG = ref(null);
// const buttonH = ref(null);

const updatePosition = (event: MouseEvent) => {
    x.value = event.clientX;
    y.value = event.clientY;
};

const resetPosition = () => {
    x.value = 10000;
    y.value = 10000;
};

const scalefactor = (el: any) => {
    if (el) {
        let rect = el.getBoundingClientRect();
        let dx = Math.abs(x.value - (rect.left + rect.right) / 2.0);
        let dy = Math.abs(y.value - (rect.top + rect.bottom) / 2.0);
        let dist = Math.sqrt(dx ** 2 + dy ** 2);
        return Math.min(Math.max(1.0, (2.0 - (dist - 30) / 110)), 2.0);
    }
    return 1.0;
};

const computedSize = (el: any) => `${Math.round(64 * scalefactor(el))}px`;
</script>
