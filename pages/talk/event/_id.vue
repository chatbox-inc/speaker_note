<template>
  <section v-if="form && event">
    <talk-form :event="event" :origin="form" @submit="submitForm" />
  </section>
</template>

<script>
import eventMapper from "~/store/event"
import talkMapper from "~/store/talk"
import TalkForm from "~/components/form/TalkForm.vue"

export default {
  layout: "mypage",
  components: {
    TalkForm
  },
  data() {
    return {
      form: null,
      event: null,
      talk: null
    }
  },
  computed: {
    event_id() {
      return this.$route.params.id
    }
  },
  async mounted() {
    const user = await this.$_auth.auth()
    if (user) {
      this.event = await this.loadEvent({ id: this.event_id })
      this.form = {
        talk_title: "",
        talk_summary: "",
        user_name: user.name,
        user_img: user.avatar_url,
        user_title: user.title,
        user_profile: user.profile
      }
    }
  },
  methods: {
    ...eventMapper.mapActions(["loadEvent"]),
    ...talkMapper.mapActions(["submitTalk"]),
    async submitForm(form) {
      this.$loader.on()
      const code = await this.submitTalk({
        event_id: this.event_id,
        form
      })
      this.$router.push(`/talk/edit/${code}`)
      this.$loader.off()
    }
  }
}
</script>

<style lang="scss" scoped></style>
