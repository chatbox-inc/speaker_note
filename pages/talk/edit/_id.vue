<template>
  <section v-if="form && event">
    <div class="alert alert-secondary">
      提出頂いた登壇情報は、イベント管理者の確認中です。
    </div>
    <talk-form :event="event" :origin="form" @submit="submitForm" @delete="delTalk" @edit="submitForm" />
  </section>
</template>

<script>
import TalkForm from "~/components/form/TalkForm.vue"
import talkMapper from "~/store/talk"

export default {
  layout: "mypage",
  components: {
    TalkForm
  },
  data() {
    return {
      form: null,
      event: null
    }
  },
  computed: {
    talk_code() {
      return this.$route.params.id
    }
  },
  async mounted() {
    await this.$_auth.auth()
    const { event, talk } = await this.getTalk({
      code: this.talk_code
    })
    this.form = {
      ...talk
    }
    this.event = event
  },
  methods: {
    ...talkMapper.mapActions(["getTalk","deleteTalk","editTalk"]),
    async submitForm(form) {
      try {
        this.$loader.on()
        const { code } = await this.editTalk({
          talk_id: this.talk_code,
          form
        })
        this.$router.push(`/talk/edit/${code}`)
      } catch (error) {
        console.error(error)
      } finally {
        this.$loader.off()
      }
    },
    async delTalk(){
      await this.deleteTalk({
        code: this.talk_code
      })
      this.$router.push('/mypage')
    }
  }
}
</script>

<style lang="scss" scoped></style>
