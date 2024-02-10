<script lang="ts" setup>
import { PhX } from "@phosphor-icons/vue";

const emit = defineEmits(["close"]);
</script>

<template>
    <vue-draggable-resizable class="!w-fit !h-auto" :resizable="false">
        <div class="relative bg-[#53535352] border border-[rgba(255,255,255,0.18)] backdrop-blur-[13px] drop-shadow-md p-4 rounded-[16px] shadow-2xl z-10 flex items-end m-5 w-fit select-none">
            <div class="absolute top-2 z-10 right-2">
                <PhX @click="emit('close')" class="bg-[#fe5752] border-2 border-[#e04944] p-0.5 rounded-[16px] shadow-2xl h-5 w-5" size="12" weight="regular" color="#80060b" />
            </div>
            <div class="flex flex-col">
                <div class="flex gap-3">
                    <img src="@/assets/fatih.jpg" class="w-64 h-64 rounded-[16px] border border-[#ffffff2e] drop-shadow-md bg-contain bg-no-repeat" alt="">
                    <div class="flex flex-col mt-3">
                        <h1 class="text-3xl font-bold">Fatih Toprakkale</h1>
                        <p class="text-sm font-semibold pt-1">Full Stack Developer</p>
                        <p class="text-sm pt-2">
                            Coding since 2016, currently freelancing,
                            <br> are you looking for a young, fresh, motivated and
                            <br>may i add <span class="font-black">smart</span> man?
                            Then you are in the right place.
                            <br>Let's get in touch.
                        </p>
                        <div class="flex mt-3 gap-3">
                            <a href="tel:60816982" class="bg-[#60606006] border border-[#ffffff2e] backdrop-blur-[13px] drop-shadow-md p-4 rounded-[16px] shadow-2xl z-10 flex items-center gap-4">
                                <img src="@/assets/phone.png" alt="phone" class="w-7">
                                +45 60 81 69 82
                            </a>
                            <a href="mailto:fatihtkale@gmail.com" class="bg-[#60606006] border border-[#ffffff2e] backdrop-blur-[13px] drop-shadow-md p-4 rounded-[16px] shadow-2xl z-10 flex items-center gap-4">
                                <img src="@/assets/mail.png" alt="phone" class="w-8">
                                fatihtkale@gmail.com
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </vue-draggable-resizable>
</template>