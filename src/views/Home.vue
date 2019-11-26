<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld :msg="msg" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

const capitalize = (s) => {
  if (typeof s !== 'string') return ''
  return s.charAt(0).toUpperCase() + s.slice(1)
}

export default {
  name: 'home',
  components: {
    HelloWorld
  },
  computed: {
    msg () {
      return `${capitalize(this.$appName)} app`
    }
  }
}
</script>
