import { createNamespacedHelpers } from "vuex"

export default {
  ...createNamespacedHelpers("loading"),
  state() {
    return {
      loading: false
    }
  },
  mutations: {
    on(state) {
      state.loading = true
    },
    off(state) {
      state.loading = false
    }
  }
}
