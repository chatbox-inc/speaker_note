<template>
  <div class="delete-button">
    <button class="btn text-center bg-danger" @click="openModal">
      削除する
    </button>
    <div v-show="showModal" class="delete-modal">
      <div class="delete-modal_text">
        <h1>削除しますか？</h1>
        <button @click="closeModal">
          close
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  el: "delete-button",
  data: function() {
    return {
      showModal: false
    }
  },
  methods: {
    openModal: function() {
      confirm("hoge")
      this.showModal = true
    },
    closeModal: function() {
      this.showModal = false
    }
  }
}
</script>

<style lang="scss" scoped>
.delete-button {
  margin-top: 100px;
}
.delete-modal {
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #dadedf;

  &_text {
    z-index: 2;
    width: 50%;
    padding: 1px;
    background: #fff;
  }
}
</style>
