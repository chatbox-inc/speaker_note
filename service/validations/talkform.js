import { required } from "vuelidate/lib/validators"

export default {
  form: {
    talk_title: {
      // 必須,20 文字以内
      required
    },
    talk_summary: {
      // 必須,200 文字以内
      required
    },
    user_name: {
      // 必須,20 文字以内
      required
    },
    user_img: {
      // 必須,url形式
      required
    },
    user_title: {
      // 必須,20 文字以内
      required
    },
    user_profile: {
      // 必須,200 文字以内
      required
    }
  }
}
