<template>
  <section v-if="form">
    <div class="card mb-3">
      <div class="card-header">
        イベント情報
      </div>
      <div class="card-body">
        <h5 class="card-title">
          {{ event.title }}
        </h5>
        <p class="card-text">
          日時: {{ event.event_start_at }} <br />
          場所: {{ event.address }}
        </p>
      </div>
    </div>

    <section>
      <h2 class="h4 mb-4">
        トーク情報
      </h2>
      <div class="form-group">
        <label>トークタイトル</label>
        <input
          v-model="$v.form.talk_title.$model"
          class="form-control"
          type="text"
          maxlength="20"
          @change="inputForm('talk_title')"
        />
      </div>
      <val-message name="talk_title" :v="$v">
        トークタイトルを入力してください。
      </val-message>
      <div class="form-group">
        <label>トーク詳細</label>
        <textarea
          class="form-control"
          v-model="$v.form.talk_summary.$model"
          rows="5"
          @change="inputForm('talk_summary')"
        />
      </div>
      <val-message name="talk_summary" :v="$v">
        トーク詳細を入力してください。
      </val-message>
    </section>

    <section class="mb-5 pl-2">
      <h2 class="h3 mb-5">
        登壇者情報
      </h2>
      <div class="row position-relative">
        <div class="col-3">
          <img :src="$v.form.user_img.$model" alt="" class="img-fluid rounded-circle" />
        </div>
        <div class="pt-4 col-9">
          <p class="p-settingStage__profName">
            {{ $v.form.user_name.$model }}
          </p>
          <p class="p-settingStage__profComp">
            {{ $v.form.user_title.$model }}
          </p>
        </div>
        <nuxt-link to="/mypage" class="p-link">
          戻る
        </nuxt-link>
      </div>
    </section>
    <div class="text-center">
      <button class="btn btn-primary text-center" @click="addInfo">
        追加する
      </button>
    </div>
  </section>
</template>

<script>
import validations from "~/service/validations/talkform"
import ValMessage from "~/components/form/ValMessage.vue"

export default {
  components: {
    ValMessage
  },
  props: {
    user: {
      type: Object,
      required: true
    },
    event: {
      type: Object,
      required: true
    },
    origin: {
      type: Object,
      required: true
    },
  },
  data() {
    return {
      form: null
    }
  },
  mounted(){
    this.form = {
      ...origin,
    }
  },
  methods: {
    inputForm(key) {
      // this.$v.form[key].$touch()
      // if (this.$v.form[key].$invalid) {
      //   return
      // }
    },
    async addInfo() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        console.error("エラー内容を確認してください。")
        return
      }
    }
  },
  validations
}
</script>

<style lang="scss" scoped></style>
