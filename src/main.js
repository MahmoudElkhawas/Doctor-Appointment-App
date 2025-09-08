import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "aos/dist/aos.css";
import AOS from "aos";

const app = createApp(App);

app.use(router);

app.mount("#app");

AOS.init({
  duration: 1200,
  once: true,
  easing: "ease-in-out",
});
