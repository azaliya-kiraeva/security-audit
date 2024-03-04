import MainPage from "../pages/MainPage.vue";
import FormPage from "../pages/FormPage.vue";
import ComplitedForm from "../pages/ComplitedForm.vue";

const routes = [
  { path: "/security-audit/", component: MainPage },
  { path: "/security-audit/form-create", component: FormPage },
  { path: "/security-audit/complited-from", component: ComplitedForm },
];

export default routes;
