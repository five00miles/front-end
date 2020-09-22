<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" />

    <button @click="btn1">按钮1</button>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
  mounted() {},
  methods: {
    btn1() {
      this.$msgTip
        .showTip({
          content: '第一个'
        })
        .$on('gogo', function (data) {
          // 监听我刚才在组件中的事件
          alert(data)
        })
        .$on('ww', function (dd) {
          // 监听我刚才在组件中的事件
          alert(dd)
        })
    }
  }
}
</script>
