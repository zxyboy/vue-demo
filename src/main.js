import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// new Vue({
//   "el" : "#app",
//   render: h => h(App)
// });

let vue = new Vue({
  render: h => h(App)
})
vue.$mount('#app')
