<script lang="ts" setup>
import Folder from './Folder.vue'
import { PhX } from '@phosphor-icons/vue';
const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}
</script>

<template>
    <vue-draggable-resizable class="!w-fit !h-auto" :resizable="false">
        <div class="absolute -left-1/2 translate-x-1/2 top-1/2 translate-y-1/2 bg-[#2f2f2fda] border border-[rgba(255,255,255,0.08)] backdrop-blur-[13px] drop-shadow-md rounded-[16px] shadow-2xl z-10 w-[745px] select-none">
            <div class="mb-7 flex justify-between items-center bg-[#ffffff13] rounded-tr-xl backdrop-blur-[900px]  rounded-tl-xl p-2">
                <div>
                    <h1 class="text-3xl font-bold">Projekter</h1>
                </div>
                <div @click="close" class="bg-red-400 rounded-full p-0.5 mr-2">
                    <PhX size="16px"></PhX>
                </div>
            </div>
            <div class="m-5">
                <div class="flex px-10 pb-4">
                    <div class="flex flex-row flex-wrap gap-[70px] items-center">
                        <a href="https://define-professional.dk/" target="_blank">
                            <Folder :canmove="false" name="define-professional" />
                        </a>
                        <a href="https://github.com/fatihtkale/ApexSharp" target="_blank">
                            <Folder :canmove="false" name="apex-sharp" />
                        </a>
                        <a href="https://github.com/disco-oauth/disco-oauth" target="_blank">
                            <Folder :canmove="false" name="disco-oauth" />
                        </a>
                        <a href="https://github.com/fatihtkale/VueCinema" target="_blank">
                            <Folder :canmove="false" name="vueCinema" />
                        </a>
                        <a href="https://drive.google.com/file/d/1lWhANEQOaSFAVrPapFoZRX0KpC1bYd6k/view?usp=sharing" _blank="target">
                            <Folder :canmove="false" name="definewater-app" />
                        </a>
                        <a href="https://drive.google.com/drive/folders/1Ow9fhZipIDWrmrPXwP-rkLvmtfaHa5R4?usp=sharing" target="_blank">
                            <Folder :canmove="false" name="find-frisor-app" />
                        </a>
                        <a href="https://fuluflow.com/" target="_blank">
                            <Folder :canmove="false" name="fuluflow.com" />
                        </a>
                        <a href="http://api-cvr.dk/" target="_blank">
                            <Folder :canmove="false" name="api-cvr.dk" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </vue-draggable-resizable>
</template>
