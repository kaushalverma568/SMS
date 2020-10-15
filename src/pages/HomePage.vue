<template>
  <div class="homepage">
    <Promoation />
    <Videos />
    <Blog />
  </div>
</template>

<script>
import Promoation from "../components/Promoation.vue";
import Blog from "../components/Blog.vue";
import Videos from "../components/Videos.vue";

export default {
  name: "HomePage",
  components: {
    Promoation,
    Blog,
    Videos,
  },
};
</script>

<style lang="sass" scoped>
.homepage
  margin-top: 80px

</style>