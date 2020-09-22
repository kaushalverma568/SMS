<template>
  <div id="app">
    <Header />
    <Promoation />
    <Videos />
    <Blog />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Promoation from './components/Promoation.vue'
import Blog from './components/Blog.vue'
import Videos from './components/Videos.vue'

export default {
  name: 'App',
  components: {
    Header,
    Promoation,
    Blog,
    Videos
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 80px;
  overflow: hidden;
  margin-bottom: 80px;
}
</style>
