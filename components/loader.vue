<template>
  <div class="backdrop">
    <div class="load">
      <div class="bar" />
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.bar {
  float: left;
  width: 15px;
  height: 6px;
  border-radius: 2px;
  background-color: #4b9cdb;
}
.load .bar {
  animation: loading 2s cubic-bezier(0.17, 0.37, 0.43, 0.67) infinite;
}
@keyframes loading {
  0%,
  100% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(80px, 0);
    background-color: #f5634a;
    width: 25px;
  }
}
.backdrop {
  width: 100vw;
  height: 100vh;
  background: rgba($color: #fff, $alpha: 0.5);
  position: fixed;
  z-index: 999;
}
.load {
  position: absolute;
  top: 45%;
  left: 47%;
}
</style>
