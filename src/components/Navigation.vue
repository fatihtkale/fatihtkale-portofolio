<template>
    <div class="flex flex-col items-center bg-zinc-700">
        <footer class="fixed bg-[#53535352] border border-[#ffffff2e] backdrop-blur-[13px] drop-shadow-md bottom-2 p-4 mb-4 rounded-[16px] mx-auto w-auto shadow-2xl z-10 flex items-end" :style="{ height: '80px' }" @mousemove="updatePosition" @mouseleave="resetPosition">
            <div class="flex items-end gap-x-4" :style="{ height: '96px' }">
                <button ref="buttonA" class="rounded-xl bg-green-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonA), height: computedSize(buttonA) }">A</button>
                <button ref="buttonB" class="rounded-xl bg-yellow-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonB), height: computedSize(buttonB) }">B</button>
                <button ref="buttonC" class="rounded-xl bg-red-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonC), height: computedSize(buttonC) }">C</button>
                <button ref="buttonD" class="rounded-xl bg-purple-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonD), height: computedSize(buttonD) }">D</button>
                <button ref="buttonE" class="rounded-xl bg-indigo-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonE), height: computedSize(buttonE) }">E</button>
                <button ref="buttonF" class="rounded-xl bg-pink-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonF), height: computedSize(buttonF) }">F</button>
                <button ref="buttonG" class="rounded-xl bg-red-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonG), height: computedSize(buttonG) }">G</button>
                <button ref="buttonH" class="rounded-xl bg-green-500 text-white text-2xl font-bold" :style="{ width: computedSize(buttonH), height: computedSize(buttonH) }">H</button>
            </div>
        </footer>
    </div>
</template>
  
<script lang="ts" setup>
import { ref } from 'vue';

const x = ref(10000);
const y = ref(10000);
const buttonA = ref(null);
const buttonB = ref(null);
const buttonC = ref(null);
const buttonD = ref(null);
const buttonE = ref(null);
const buttonF = ref(null);
const buttonG = ref(null);
const buttonH = ref(null);

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
    return 1.0; // Default scale factor
};

const computedSize = (el: any) => `${Math.round(48 * scalefactor(el))}px`;
</script>
