<script setup lang="ts">
import Navigation from './components/Navigation.vue';
import TopBar from './components/TopBar.vue';
import PWidget from './components/ProfileWidget.vue';
import NWidget from './components/NoteWidget.vue'
import { reactive } from 'vue';

const windows = reactive({
  profilewidget: true,
});
</script>

<template>
  <TopBar />
  <div class="flex justify-between">
    <Transition name="bounce">
      <PWidget @close="windows.profilewidget = false" v-if="windows.profilewidget" />
    </Transition>
    <NWidget />
  </div>
  <Navigation />
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