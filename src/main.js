// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routes from './routes'

import store from './store/index'

Vue.use(VueRouter)

const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app');


