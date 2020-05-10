import Vue from 'vue'
import App from './App.vue'
import router from './router';
import Vuetify from 'vuetify';
import VueRouter from 'vue-router';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuetify);

new Vue({
    render: (h) => h(App),
    router,
}).$mount('#app')
