import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 1
}
const mutations = {
  add() {
    this.state.count += 1
  },
  reduce() {
    this.state.count -= 1
  },

}
const store = new Vuex.Store({
  state,
  mutations
})
export default store
