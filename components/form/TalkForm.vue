<template>
  <section>
    <h1 class="h3 mb-4">
      登壇情報
    </h1>
    <form action="" class="mb-5">
      <div class="form-group">
        <input
          v-model="$v.form.title.$model"
          type="text"
          class="form-control"
          placeholder="タイトル"
          @change="inputForm('title')"
        />
      </div>
      <p
        v-if="!$v.form.title.required && $v.form.title.$dirty"
        class="text-danger"
      >
        タイトルは必須です
      </p>
      <div class="form-group">
        <textarea
          v-model="$v.form.info.$model"
          class="form-control"
          rows="5"
          placeholder="登壇情報入力"
          @change="inputForm('info')"
        >
        >
        </textarea>
      </div>
      <p
        v-if="!$v.form.info.required && $v.form.info.$dirty"
        class="text-danger"
      >
        タイトルは必須です
      </p>
    </form>
    <div class="pl-3 mb-5">
      <h2 class="h3 mb-3">
        イベント情報
      </h2>
      <dt class="float-left mr-2">
        日時:
      </dt>
      <dd>{{ event_start_at }}</dd>
      <dt class="float-left mr-2">
        場所:
      </dt>
      <dd>{{ address }}</dd>
    </div>
    <div class="mb-5 pl-2">
      <h2 class="h3 mb-5">
        登壇者情報
      </h2>
      <div class="row position-relative">
        <div class="col-3">
          <img :src="user.photoURL" alt="" class="img-fluid rounded-circle" />
        </div>
        <div class="pt-4 col-9">
          <p class="p-settingStage__profName">
            {{ user.displayName }}
          </p>
          <p class="p-settingStage__profComp">
            株式会社hogehoge
          </p>
        </div>
        <nuxt-link to="/mypage" class="p-link">
          戻る
        </nuxt-link>
      </div>
    </div>
    <div class="text-center">
      <button class="btn btn-primary text-center" @click="addInfo">
        追加する
      </button>
    </div>
  </section>
</template>

<script>
import validations from "@/service/validations/stageInfo"

export default {
  data() {
    return {
      form: {
        title: null,
        info: null
      }
    }
  },
  methods: {
    inputForm(name) {
      if (name === "title") {
        this.$v.form.title.$touch()
        if (this.$v.form.title.$invalid) {
          return
        }
      }
      if (name === "info") {
        this.$v.form.info.$touch()
        if (this.$v.form.info.$invalid) {
          return
        }
      }
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
