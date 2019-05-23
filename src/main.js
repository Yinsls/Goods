import Vue from 'vue'
import App from './App.vue'
import router from './router'
import MintUI from 'mint-ui'
import store from './store'
import axios from 'axios'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'mint-ui/lib/style.css'

import 'vue-layer-mobile/need/layer.css'
import layer from 'vue-layer-mobile'

let publicV_ = new Vue(); //虚拟平台，为提供组件间信息交互

// Vue.prototype.$datas = require("./data.json")
Vue.prototype.publicV = publicV_
Vue.prototype.$axios = axios
Vue.config.productionTip = false

Vue.use(MintUI)
Vue.use(ElementUI)
Vue.use(layer)



new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
