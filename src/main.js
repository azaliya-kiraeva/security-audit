import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import ru from "element-plus/dist/locale/ru.mjs";

const app = createApp(App);

app.use(router);
app.use(ElementPlus, {
  locale: ru,
});

app.mount("#app");
