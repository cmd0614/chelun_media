import Vue from 'vue'
import router from './router'
import App from './App.vue'
import echarts from 'echarts'

Vue.prototype.$echarts = echarts 
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
