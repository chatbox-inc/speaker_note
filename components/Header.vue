<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <router-link class="navbar-brand" to="/">
        speaker note stg
      </router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarColor01"
        aria-controls="navbarColor01"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon" />
      </button>
      <div id="navbarColor01" class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link class="nav-link" to="/mypage">
              Mypage
            </nuxt-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/showcase">
              Showcase
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
<script>
export default {}
</script>

<style lang="scss"></style>
