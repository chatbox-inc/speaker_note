import { createNamespacedHelpers } from "vuex"

import { putTalk, getTalk, getTalkList } from "~/service/usecase/talkUsecase"

export default {
  ...createNamespacedHelpers("talk"),
  state() {
    return {
      talklist: []
    }
  },
  mutations: {
    SET_TALKLIST(state, list) {
      state.talklist = list
    }
  },
  actions: {
    async submitTalk(ctx, { event_id, form }) {
      const { code } = await putTalk(this.$axios, { event_id, form })
      return code
    },
    async loadTalkList() {
      return getTalkList(this.$axios)
    },
    async getTalk(ctx, { code }) {
      return getTalk(this.$axios, { code })
    }
  }
}
