import Vue from 'vue'
import Router from 'vue-router'
import UI from '../src/index'
import App from './App'
import pageList from './pageList.vue'
import routerList from './router.js'

Vue.config.productionTip = false

Vue.use(Router)
Vue.use(UI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router: new Router({
    routes: [
      {
        path: '/',
        name: 'pageList',
        component: pageList
      },
      ...routerList
    ]
  }),
  components: { App },
  template: '<App/>'
})
