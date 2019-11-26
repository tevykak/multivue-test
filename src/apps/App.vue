<template>
  <div id="app" :class="$appName">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <a :href="toggleHref">{{ toggleHrefTitle }}</a>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  computed: {
    toggleHref () {
      return this.$appName === 'generic' ? '/admin' : '/'
    },
    toggleHrefTitle () {
      return this.$appName === 'generic' ? 'Go to admin' : 'Go to generic'
    }
  }
}
</script>
