import Vue from 'vue'
import App from './App.vue'
import router from "./router/router";
import VueRouter from "vue-router";
import Vuex from "vuex"

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueRouter)

const store = new Vuex.Store(
    {
        state: {
            token: ""
        },
        mutations: {
            setToken(state, token) {
                state.token = token
            }
        }
    }
)

new Vue({
    render: h => h(App),
    router: router,
    store: store
}).$mount('#app')
