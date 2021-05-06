import Vue from 'vue'
import App from './App.vue'
import router from './router'
// import {foxSingleMixin} from './fox/index'

Vue.config.productionTip = false

new Vue({
    // mixins: [foxMixin],
    router,
    render: h => h(App)
}).$mount('#app')
