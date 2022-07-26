import { createApp } from "vue";

// import { createStore } from "vuex";
import { createRouter, createWebHistory } from "vue-router";

import App from "./App.vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "../public/css/style.css";

//import store
import store from "./store/store.js";

//routes
import HomeMain from "./components/HomeMain";
import CashSale from "./components/dashboard/CashSale.vue";
import CreditSale from "./components/dashboard/CreditSale.vue";
import NewProduct from "./components/dashboard/NewProduct.vue";
import NewstaffForm from "./components/dashboard/NewstaffForm.vue";
import NoticeSection from "./components/dashboard/NoticeSection.vue";
import ProcureSection from "./components/dashboard/ProcureSection.vue";
import ReportsPage from "./components/dashboard/ReportsPage.vue";
import CashClientList from "./components/CashClients.vue";
import CreditClientList from "./components/CreditClients.vue";
import SuppliersList from "./components/SuppliersList.vue";
import ProductsList from "./components/ProductsList.vue";
import BranchReport from "./components/BranchReport.vue";
import NotFound from "./components/NotFound.vue";

//instantiating the vue app
const app = createApp(App);

//using store
app.use(store);
//instantiating the vue router
const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", component: HomeMain },

    { path: "/dashboard", component: CashSale, meta: { requireAuth: true } },
    {
      path: "/dashboard/cashsale",
      component: CashSale,
      meta: { requireAuth: true },
    },

    {
      path: "/dashboard/creditsale",
      component: CreditSale,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard/newproduct",
      component: NewProduct,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard/newstaff",
      component: NewstaffForm,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard/notices",
      component: NoticeSection,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard/procurement",
      component: ProcureSection,
      meta: { requireAuth: true },
    },
    {
      path: "/dashboard/reports",
      component: ReportsPage,
      meta: { requireAuth: true },
    },
    {
      path: "/reports/cashclients",
      component: CashClientList,
      meta: { requireAuth: true, directorOnly: true },
    },
    {
      path: "/reports/creditclients",
      component: CreditClientList,
      meta: { requireAuth: true, directorOnly: true },
    },
    {
      path: "/reports/suppliers",
      component: SuppliersList,
      meta: { requireAuth: true },
    },
    {
      path: "/reports/productslist",
      component: ProductsList,
      meta: { requireAuth: true, directorOnly: true },
    },
    {
      path: "/reports/branchreport",
      component: BranchReport,
      meta: { requireAuth: true, directorOnly: true },
    },
    {
      path: "/:catchAll(.*)",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

router.beforeEach(function (to, from, next) {
  if (to.meta.requireAuth && !store.getters.isLoggedIn) {
    console.log("not logged in", to.meta, store.getters.isLoggedIn);
    next("/");
  }
  //  else if (to.meta.requireAuth && store.getters.isLoggedIn) {
  //   console.log("logged in", to.meta, store.getters.isLoggedIn);
  //   next();
  // }
   if (store.getters.isLoggedIn && !to.meta.directorOnly &&!store.getters.authenticatedUser.role==='director') {
    next('/')
  } else {
    console.log("auth status", store.getters.isLoggedIn);
    next();
  }
});

//using view router
app.use(router);

//mounting the app
app.mount("#app");
