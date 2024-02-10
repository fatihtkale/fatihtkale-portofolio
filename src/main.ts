import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
// @ts-ignore
import * as VueDraggableResizable from 'vue-draggable-resizable'

createApp(App)
    .component("vue-draggable-resizable", VueDraggableResizable)
    .mount('#app')
