import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "@/components";
import Fragment from "vue-fragment";
import VueSkeletonLoading from "vue-skeleton-loading";

Vue.use(Fragment.Plugin);
Vue.use(VueSkeletonLoading);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
