//Styles
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "./assets/styles/main.scss";

//Store
import { createApp } from "vue";
import { createPinia } from "pinia";

//Routes
import { router } from "./router";

import App from "./App.vue";

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");
