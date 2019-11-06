import { createNamespacedHelpers } from "vuex"

import { putTalk, getTalk, getTalkList, deleteTalk } from "~/service/usecase/talkUsecase"
import { editTalk } from "../service/usecase/talkUsecase"

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
    },
    async deleteTalk(ctx, { code }){
      return deleteTalk(this.$axios, { code })
    },
    async editTalk(ctx, { talk_id, form }){
      const { code } = await editTalk(this.$axios, { talk_id, form })
      return { code }
    }
  }
}
