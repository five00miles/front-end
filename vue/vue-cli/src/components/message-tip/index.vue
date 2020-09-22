<template>
  <div class="container" v-if="show">
    {{ content }}
    <button @click="handleRemove1">事件</button>
  </div>
</template>

<script>
export default {
  name: 'message-tip',
  props: {
    duration: {
      type: Number,
      default: 3000
    },
    content: {
      type: String,
      default: 'q'
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  components: {},
  methods: {
    showLoad() {
      this.show = true
    },
    handleRemove1() {
      this.$emit('gogo', 123456)
    },
    handleRemove() {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
