import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    count: 0
}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
    INCREMENT (state) {
        state.count++
    },
    DECREMENT (state) {
        state.count--
    }
}

export default new Vuex.Store({
    state,
    mutations
})