<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from "./components/Header.vue";

export default {
  name: "app",
  components: {
    Header,
  },
};
</script>



<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
  margin-bottom: 80px;
  color: #131416
}

a {
  text-decoration: inherit;
  color: inherit;
}

/* Let's get this party started */
::-webkit-scrollbar {
    width: 6px;
}
 
/* Track */
::-webkit-scrollbar-track {
    -webkit-box-shadow: transparent; 
    -webkit-border-radius: 4px;
    border-radius: 4px;
}
 
/* Handle */
::-webkit-scrollbar-thumb {
    -webkit-border-radius: 4px;
    border-radius: 8px;
    background: #666 ; 
}
</style>