import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    files: [],
    step: 1
}

// mutations are operations that actually mutates the state.
const mutations = {
    ADD_FILE (state, file){
        state.files.push(file)
    },
    REMOVE_FILE (state, file){
        state.files.$remove(file);
    },
    NEXT_STEP (state) {
        if(state.step < 4)
            state.step++
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})