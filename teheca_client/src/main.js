import { createApp } from "vue";

// import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";

//import store
// import store from "./store/store.js";

//routes
import HomeMain from "./components/HomeMain";
import Profile from "./components/DashboardSection";
import ViewProfile from "./components/ViewProfile";
import NewApplication from "./components/NewApplicationPage";
import NotFound from "./components/NotFound.vue";
import Register from "./components/dashboard/NewstaffForm";
//instantiating the vue app
const app = createApp(App);

//using store
// app.use(store);
//instantiating the vue router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeMain },

    { path: "/register", component: Register, meta: { requireAuth: false } },
    {
      path: "/apply",
      component: NewApplication,
      meta: { requireAuth: false },
    },
    {
      path: "/profile",
      component: Profile,
      meta: { requireAuth: false },
    },
    {
      path: "/profile/:id",
      component: ViewProfile,
      meta: { requireAuth: false },
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

// router.beforeEach(function (to, from, next) {
//   if (to.meta.requireAuth && !store.getters.isLoggedIn) {
//     console.log("not logged in", to.meta, store.getters.isLoggedIn);
//     next("/");
//   }
//   //  else if (to.meta.requireAuth && store.getters.isLoggedIn) {
//   //   console.log("logged in", to.meta, store.getters.isLoggedIn);
//   //   next();
//   // }
//   if (
//     store.getters.isLoggedIn &&
//     !to.meta.directorOnly &&
//     !store.getters.authenticatedUser.role === "director"
//   ) {
//     next("/");
//   } else {
//     console.log("auth status", store.getters.isLoggedIn);
//     next();
//   }
// });

//using view router
app.use(router);

//mounting the app
app.mount("#app");
