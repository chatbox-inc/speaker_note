<template>
  <div>
    <l-header />
    <l-loader v-if="loading" />
    <div v-show="user" class="l-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import lHeader from "~/components/Header"
import lLoader from "~/components/loader"
import loaderMepper from "~/store/loading"
export default {
  components: {
    lHeader,
    lLoader
  },
  data() {
    return {
      user: null
    }
  },
  computed: {
    ...loaderMepper.mapState(["loading"])
  },
  async mounted() {
    console.log("mounted")
    const user = await this.$_auth.auth()
    console.log("mounted")
    if (!user) {
      this.$router.push({ path: "/", query: { redirect: this.$route.path } })
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
