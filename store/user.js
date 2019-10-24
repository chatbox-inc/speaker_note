import { createNamespacedHelpers } from "vuex"
import { getProfile } from "~/service/usecase/loginUsecase"

export const dispatchLoginAction = $store => $store.dispatch("user/LOGIN")
export const dispatchLogoutAction = $store => $store.dispatch("user/LOGOUT")

let _getProfilePromise = null

const _getProfileOnce = $axios => {
  if (!_getProfilePromise) {
    _getProfilePromise = getProfile($axios)
  }
  return _getProfilePromise
}

export default {
  ...createNamespacedHelpers("user"),
  state() {
    return {
      user: null //ユーザ情報
    }
  },
  mutations: {
    SET_USER(state, { user }) {
      state.user = user
    }
  },
  actions: {
    async LOGIN({ commit }) {
      const { user } = await _getProfileOnce(this.$axios)
      commit("SET_USER", { user })
      return user
    },
    async LOGOUT({ commit }) {
      commit("SET_USER", { user: null })
    }
  }
}
