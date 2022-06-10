import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import JogadoresView from "../views/JogadoresView.vue";
import TimesView from "../views/TimesView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: "/", name: "home", component: HomeView },
    { path: "/Jogadores", name: "jogadores", component: JogadoresView },
    { path: "/Times", name: "times", component: TimesView },
  ],
});

export default router;
