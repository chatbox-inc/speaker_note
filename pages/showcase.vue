<template>
  <section>
    <div class="container mt-5">
      <h1>showcase</h1>
      <p>
        <router-link to="/event/150932">
          イベントページ
        </router-link>
      </p>
      <p>
        <a tabindex="0" @click="$_auth.logout">
          ログアウト
        </a>
      </p>
    </div>
  </section>
</template>

<script>
export default {
  layout: "default"
}
</script>

<style lang="scss" scoped></style>
