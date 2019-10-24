import { createNamespacedHelpers } from "vuex"
import {getProfile} from "~/service/usecase/loginUsecase";

export const dispatchLoginAction = ($store) => $store.dispatch("user/LOGIN")

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
    },
    initUser(state) {
      state.user = null
    }
  },
  actions: {
    async LOGIN({commit}){
      const {user} = await getProfile(app.$axios)
      commit("SET_USER",user)

    }
  }
}
