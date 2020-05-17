// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from "vue-router"
import Users from "./components/Users"
import Test from "./components/Test"
import VueResource from "vue-resource"

Vue.config.productionTip = false

Vue.use(VueRouter)
Vue.use(VueResource)

const router = new VueRouter({
  model: "history",
  base: __dirname,
  routes: [
    {
      path:"/",component:Users
    },
    {
      path:"/Test",component:Test
    }
  ]
});
/* eslint-disable no-new */
new Vue({
  router,
  template: `
    <div id="app">
      <ul>
        <li>
          <router-link to="/">Users</router-link>
          <router-link to="/Test">Test</router-link>
        </li>
      </ul>
      <router-view></router-view>
    </div>
  `
}).$mount("#app")
