import { createNamespacedHelpers } from "vuex"

import { getEvent } from "~/service/usecase/eventUsecase"

export default {
  ...createNamespacedHelpers("event"),
  state() {
    return {
      events: {}
    }
  },
  mutations: {
    SET_EVENT(state, event) {
      state.events[event.id] = event
    }
  },
  actions: {
    async loadEvent({ state, commit }, { id }) {
      if (!state.events[id]) {
        const { event } = await getEvent(this.$axios, { id })
        commit("SET_EVENT", event)
      }
      return state.events[id]
    }
  }
}
