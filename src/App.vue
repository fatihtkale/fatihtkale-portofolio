<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import TopBar from './components/TopBar.vue';
import PWidget from './components/ProfileWidget.vue';
import NWidget from './components/NoteWidget.vue'
import Folder from './components/Folder.vue'
import FolderPage from './components/FolderPage.vue';
import { ref } from 'vue';
import NotesPage from './components/NotesPage.vue';

const folderWindow = ref(false)
const noteWindow = ref(false)
</script>

<template>
  <TopBar class="z-[9999999]" />
  <div class="relative justify-between w-full">
    <Transition name="bounce">
      <PWidget />
    </Transition>
    <NWidget />
    <NotesPage v-if="noteWindow" @close="noteWindow = false" />
    <FolderPage v-if="folderWindow" @close="folderWindow = false" />

    <div class="absolute w-24 left-[17px] top-[350px]">
      <Folder name="Projekter" canmove="true" @click="folderWindow = true" />
    </div>
  </div>
  <Navigation @openNotepad="noteWindow = true" />
</template>

<style>
@font-face {
  font-family: "San Francisco";
  font-weight: 400;
  src: url("https://applesocial.s3.amazonaws.com/assets/styles/fonts/sanfrancisco/sanfranciscodisplay-regular-webfont.woff");
}

body {
  background-image: url("https://uhdwallpapers.org/uploads/converted/20/06/25/macos-big-sur-wwdc-2560x1440_785884-mm-90.jpg");
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  color: white;
  height: 100%;
  font-family: "San Francisco";
}

@import "vue-draggable-resizable/style.css";

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-in 0.5s reverse;
}

@keyframes bounce-in {
  0% {
    transform: scale(0);
  }

  50% {
    transform: scale(1.25);
  }

  100% {
    transform: scale(1);
  }
}
</style>