<template>
  <section>
    <section class="mb-5">
      <h2 class="h3 mb-4">
        プロフィール編集
      </h2>
      <div class="form-group">
        <label>登壇者名</label>
        <input
          v-model="$v.form.user_name.$model"
          type="text"
          class="form-control"
        />
        <val-message name="user_name" :v="$v">
          登壇者名を入力してください。
        </val-message>
      </div>
      <div class="form-group">
        <label>肩書・所属</label>
        <input
          v-model="$v.form.user_title.$model"
          type="text"
          class="form-control"
        />
        <val-message name="user_title" :v="$v">
          肩書・所属を入力してください。
        </val-message>
      </div>
      <div class="form-group">
        <label>プロフィール</label>
        <textarea
          v-model="$v.form.user_profile.$model"
          type="text"
          class="form-control"
          rows="5"
        />
        <val-message name="user_profile" :v="$v">
          プロフィールを入力してください。
        </val-message>
      </div>
    </section>
    <div class="text-center">
      <button class="btn btn-primary text-center" @click="submit">
        更新
      </button>
    </div>
  </section>
</template>

<script>
import ValMessage from "@/components/form/ValMessage"
import validations from "@/service/validations/profile"
export default {
  name: "Edit",
  layout: "mypage",
  components: {
    ValMessage
  },
  data() {
    return {
      form: null
    }
  },
  mounted() {
    console.log(this.$v.form.user_name)
  },
  methods: {
    submit() {
      this.$v.form.$touch()
      if (this.$v.form.$invalid) {
        console.error("エラー内容を確認してください。")
        return
      } else {
        console.log("submit!")
      }
    }
  },
  validations
}
</script>

<style lang="scss" scoped></style>
