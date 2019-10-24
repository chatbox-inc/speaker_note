<template>
  <p v-if="showValMessage" class="text-danger">
    <slot />
  </p>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    },
    rule: {
      type: String,
      default: "required"
    },
    v: {
      type: Object,
      required: true
    }
  },
  computed: {
    showValMessage() {
      return !this.v.form[this.name][this.rule] && this.v.form[this.name].$dirty
    }
  }
}
</script>
