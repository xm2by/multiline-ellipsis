import Vue from 'vue'
import App from './App.vue'
import ellipsis from './components/multilineEllipsis/index'

Vue.config.productionTip = false

Vue.use(ellipsis)

new Vue({
  render: h => h(App),
}).$mount('#app')
