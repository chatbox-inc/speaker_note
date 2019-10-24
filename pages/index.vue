<template>
  <section class="p-top">
    <a href="#" @click="googleLogin">GoogleLogin</a>
  </section>
</template>

<script>
import firebase from "@/plugins/firebase"
import userMapper from "@/store/user.js"

export default {
  name: "Top",
  layout: "guest",
  async mounted() {
    const user = await this.$_auth.auth()
    if (user) {
      this.setUser({ user })
      this.$router.push("/mypage")
    }
  },
  methods: {
    ...userMapper.mapMutations(["setUser"]),
    googleLogin() {
      firebase.auth().signInWithRedirect(new firebase.auth.GoogleAuthProvider())
    }
  }
}
</script>

<style lang="scss" scoped>
.p-top {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
