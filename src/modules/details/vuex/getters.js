// Vuex 状态的 getters 内部其实就是计算属性，
// 这就意味着你能够以响应式的方式（并且更高效）地计算派生属性。
export const files = state => state.files
export const step = state => state.step