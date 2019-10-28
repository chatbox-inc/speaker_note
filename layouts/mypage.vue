<template>
  <div>
    <l-header />
    <div v-show="user" class="l-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import lHeader from "~/components/Header"
export default {
  components: {
    lHeader
  },
  data() {
    return {
      user: null
    }
  },
  async mounted() {
    console.log("mounted")
    const user = await this.$_auth.auth()
    console.log("mounted")
    if (!user) {
      this.$router.push({ path: '/', query: {redirect: this.$route.path}})
    } else {
      this.user = user
    }
  }
}
</script>

<style lang="scss" scoped>
.l-container {
  max-width: 640px;
  margin: 0 auto;
  padding-top: 80px;
}
</style>
