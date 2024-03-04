import MainPage from "../pages/MainPage.vue";
import FormPage from "../pages/FormPage.vue";
import ComplitedForm from "../pages/ComplitedForm.vue";

const routes = [
  { path: "/", component: MainPage },
  { path: "/form-create", component: FormPage },
  { path: "/complited-from", component: ComplitedForm },
];

export default routes;
