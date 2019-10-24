<template>
  <div>
    <l-header />
    <div class="l-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import lHeader from "~/components/Header"
import userMapper from "~/store/user"
export default {
  components: {
    lHeader
  },
  async mounted() {
    const user = await this.$_auth.auth()
    if (user) {
      this.setUser({ user })
    } else {
      this.$router.push("/")
    }
  },
  methods: {
    ...userMapper.mapMutations(["setUser"])
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
