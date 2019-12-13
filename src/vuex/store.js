import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
var state = { count: 1, value: 0 }
var mutations = {
    incCount() {
        state.count++;
    },
    changeValue(state, newVal) {
        state.value = newVal
    }
}
var getterfl = {
    completedCountChange(state) {
        return state.count * 2 + '位';
    }
}
var actionfl = {
    asynIncCount(context) {
        context.commit('incCount');
    }
}
const store = new Vuex.Store({
    state,//state: state  简写
    mutations: mutations,//属性的简写是 mutations
    getters: getterfl,
    actions: actionfl,
})
export default store;