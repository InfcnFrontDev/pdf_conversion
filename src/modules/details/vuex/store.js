import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
    files: [],// 文件列表
    step: 1, // 操作步骤
    downloadUrl: '' // 下载地址
}

// mutations are operations that actually mutates the state.
const mutations = {
    ADD_FILE (state, file){
        state.files.push(file)
    },
    REMOVE_FILE (state, file){
        state.files.$remove(file);
    },
    UPDATE_STATUS (state, fid, status){
        state.files.filter(file => file.id == fid).forEach(file => {
            for (let key in status) {
                file.status[key] = status[key]
            }
        });
    },
    SET_OID (state, fid, oid){
        state.files.filter(file => file.id == fid)
            .forEach(file => file.oid = oid);
    },
    NEXT_STEP (state) {
        if (state.step < 4)
            state.step++
    },
    DOWNLOAD_FILE (state, url){
        state.downloadUrl = url
    }
}

export default new Vuex.Store({
    state,
    mutations,
    strict: true
})