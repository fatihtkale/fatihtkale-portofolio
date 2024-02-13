<script lang="ts" setup>
import { ref } from 'vue';
import { PhX } from '@phosphor-icons/vue';

const notes = ref([
    {
        title: 'Note 1',
        date: '12/12/2021',
        content: 'Note 1'
    },
    {
        title: 'Note 2',
        date: '12/12/2021',
        content: 'Note 2'
    },
    {
        title: 'Note 3',
        date: '12/12/2021',
        content: 'Note 3'
    }
])

const selectedNote = ref(0)

const setSelectedNote = (note: any) => {
    selectedNote.value = note
}

const emit = defineEmits(['close'])

</script>

<template>
    <div class="w-auto">
        <vue-draggable-resizable class="!w-auto" :resizable="false">
            <div class="absolute left-1/2 -translate-x-1/2 top-1/2 translate-y-1/2 select-none w-[825px] flex ">
                <div class="bg-[#f6f0f0] w-1/5 p-5 rounded-tl-xl rounded-bl-xl">
                    <PhX @click="emit('close')" size="20px" class="bg-red-300 rounded-full text-red-500 p-1"></PhX>
                </div>
                <div class="bg-white w-1/2 text-black">
                    <div class="mx-3 mt-4">
                        <input type="text" class="w-full bg-gray-100 px-3 py-2 rounded-xl outline-none" placeholder="Search"/>
                    </div>
                    <div class="flex flex-col my-5 hover:bg-yellow-300 px-4 py-3" v-for="(note, index) in notes" @click="setSelectedNote(index)">
                        <div class="text-lg font-bold">{{ note.title }}</div>
                        <div>{{ note.date }}</div>
                    </div>
                </div>
                <div class="w-1/3 rounded-br-xl rounded-tr-xl text-black">
                    <textarea :value="notes[selectedNote].content" class="bg-[#f6f0f0] p-3 w-full h-full rounded-br-xl rounded-tr-xl outline-none"></textarea>
                </div>
            </div>
        </vue-draggable-resizable>
    </div>
</template>