<template>
  <div>
    <router-link :to="productInformation">
      <div class="item">
        <v-sheet
          v-if="show"
          :color="`grey ${theme.isDark ? 'darken-2' : 'lighten-4'}`"
          class="pa-3 re_position"
        >
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-sheet>

        <div class="thumb">
          <!-- productImg -->
          <img :src="posterImage" :alt="product.title" />
        </div>
        <h2 class="title_product">{{ product.title }}</h2>
        <div class="item-price">{{ product.popularity }}</div>
      </div>
    </router-link>
  </div>
</template>

<script>
const POSTER_PATH = 'http://image.tmdb.org/t/p/w154/'
export default {
  name: "Product",
  props: ['product'],
  data: function () {
    return {
      show: true
    }
  },
  computed: {
    posterImage: function() {
      return `${POSTER_PATH}/${this.product.poster_path}`;
    },
    productInformation: function() {
      return `/product/${this.product.id}`;
    }
  },
  mounted() {
    this.showArticle();
  },
  methods: {
    showArticle() {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>

<style lang="sass">
  .thumb
    img
      height: 100%
</style>