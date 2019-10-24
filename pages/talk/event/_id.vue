<template>
  <section v-if="form && event">
    <talk-form :user="user" :event="event" :origin="form"/>
    <div class="text-center">
      <button class="btn btn-primary text-center" @click="addInfo">
        追加する
      </button>
    </div>
  </section>
</template>

<script>
import userMapper from "@/store/user"
import StageUsecase from "@/service/usecase/StageUsecase"
import TalkForm from "~/components/form/TalkForm.vue"

export default {
  layout: "mypage",
  components: {
    TalkForm
  },
  data() {
    return {
      form: null
    }
  },
  computed: {
    ...userMapper.mapGetters(["user"])
  },
  async asyncData({ params, $axios }) {
    const event = await new StageUsecase($axios).get(params.id)
    return {
      event: {
        team_id: event.team_id,
        connoass_event_id: event.connoass_event_id,
        title: event.event_name,
        event_start_at: event.event_start_at,
        event_end_at: event.event_end_at,
        address: event.address,
        params
      }
    }
  },
  async mounted(){
    // const user = await this.$_auth.auth()
    // console.log(user)
    this.form = {
      talk_title: "",
      talk_summary: "",
      user_name: "",
      user_img: "",
      user_title: "",
      user_profile: "",
    }

  },
  methods: {
    ...userMapper.mapMutations(["initUser", "setUser"]),

    async addInfo() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        console.error("エラー内容を確認してください。")
        return
      }
      try {
        this.$loader.on()
        await new StageUsecase(this.$axios).create(this.form)
      } catch (error) {
        console.error(error)
      } finally {
        this.$loader.off()
      }
    }
  }
}
</script>

<style lang="scss" scoped></style>
