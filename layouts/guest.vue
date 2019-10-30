<template>
  <div>
    <l-header />
    <l-loader v-if="loading" />
    <div class="l-container">
      <nuxt />
    </div>
  </div>
</template>

<script>
import lHeader from "~/components/Header"
import lLoader from "~/components/loader"
import loaderMapper from "~/store/loading"
export default {
  components: {
    lHeader,
    lLoader
  },
  computed: {
    ...loaderMapper.mapState(["loading"])
  }
}
</script>

<style lang="scss" scoped>
.l-container {
  max-width: 640px;
  margin: 0 auto;
  height: 100%;
  padding-top: 80px;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI",
    Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
</style>
