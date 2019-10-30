import { required } from "vuelidate/lib/validators"

export default {
  form: {
    user_name: {
      required
    },
    user_title: {
      required
    },
    user_profile: {
      required
    }
  }
}
