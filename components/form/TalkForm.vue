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

    <section class="mb-5">
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
        />
      </div>
      <val-message name="talk_title" :v="$v">
        トークタイトルを入力してください。
      </val-message>
      <div class="form-group">
        <label>トーク詳細</label>
        <textarea
          v-model="$v.form.talk_summary.$model"
          class="form-control"
          rows="5"
        />
      </div>
      <val-message name="talk_summary" :v="$v">
        トーク詳細を入力してください。
      </val-message>
    </section>

    <section class="mb-5">
      <h2 class="h4 mb-4">
        登壇者情報
      </h2>
      <div class="row position-relative">
        <div class="col-3">
          <img
            :src="$v.form.user_img.$model"
            alt=""
            class="img-fluid rounded-circle"
          />
        </div>
        <div class="pt-4 col-9">
          <div class="form-group">
            <label>登壇者名</label>
            <input
              v-model="$v.form.user_name.$model"
              class="form-control"
              type="text"
              maxlength="20"
            />
          </div>
          <val-message name="user_name" :v="$v">
            登壇者名を入力してください。
          </val-message>
          <div class="form-group">
            <label>肩書・所属</label>
            <input
              v-model="$v.form.user_title.$model"
              class="form-control"
              type="text"
              maxlength="20"
            />
          </div>
          <div class="form-group">
            <label>プロフィール</label>
            <textarea
              v-model="$v.form.user_profile.$model"
              class="form-control"
              rows="5"
            />
          </div>
          <val-message name="user_profile" :v="$v">
            登壇者プロフィールを入力してください。
          </val-message>
        </div>
      </div>
    </section>
    <div class="text-center">
      <button class="add-button btn btn-primary text-center" @click="submit">
        追加する
      </button>
      <br>
      <DeleteModal></DeleteModal>
    </div>
  </section>
</template>

<script>
import validations from "~/service/validations/talkform"
import ValMessage from "~/components/form/ValMessage.vue"
import DeleteModal from "~/components/DeleteModal.vue"

export default {
  components: {
    ValMessage,
    DeleteModal
  },
  props: {
    event: {
      type: Object,
      required: true
    },
    origin: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      form: null
    }
  },
  mounted() {
    this.form = {
      ...this.origin
    }
  },
  methods: {
    async submit() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        console.error("エラー内容を確認してください。")
        return
      } else {
        this.$emit("submit", this.form)
      }
    }
  },
  validations
}
</script>

<style lang="scss" scoped>
</style>
