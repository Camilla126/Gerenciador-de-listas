import { createApp } from "vue";
import App from "./App.vue";
import "../src/assets/main.css";
import store from './store'

createApp(App).use(store).mount("#app");
