// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueSource from "vue-resource"
import VueRouter from "vue-router"
import Routers from "./routers"

Vue.config.productionTip = false

Vue.use(VueSource)
Vue.use(VueRouter)

Vue.directive("rainbow", {
  bind(el, binding, vnode) {
    el.style.color = "#"+Math.random().toString(16).slice(2,8);
  }
})

// Vue.directive("theme", {
//   bind(el, binding, vnode) {
//     if (binding.value == "wide") {
//       el.style.width = "1260px";
//     }
//   }
// })

// Vue.filter("to-uppercase", (val) => {
//   return val.toUpperCase();
// });

Vue.filter("snippet", (val) => {
  return val.slice(0, 100)+"......";
})

const router = new VueRouter({
  mode: "history",
  routes:Routers
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  router:router
})
