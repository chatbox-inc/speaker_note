<template>
  <section class="p-top">
    <div class="jumbotron">
      <h1 class="display-4">
        Speaker Note
      </h1>
      <p class="lead">
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <hr class="my-4" />
      <p>
        It uses utility classes for typography and spacing to space content out
        within the larger container.
      </p>
      <a class="btn btn-primary btn-lg" tabindex="0" @click="googleLogin">
        Login with Google
      </a>
    </div>

    <div>
      <h3>注目のイベント</h3>
      <router-link to="/event/150932">
        イベントページ
      </router-link>
    </div>
  </section>
</template>

<script>
export default {
  name: "Top",
  layout: "guest",
  async mounted() {
    await this.$_auth.auth()
  },
  methods: {
    async googleLogin() {
      const user = await this.$_auth.login()
      if (user) {
        const path = this.$route.query.redirect
        if (path) {
          this.$router.push(path)
        } else {
          this.$router.push("/mypage")
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.p-top {
}
</style>
