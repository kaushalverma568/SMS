<template>
  <div class="exlusive-items-wrapper">
    <div class="exlusive-items">
      <header class="page-header">
        <h1>{{ title }}</h1>
        <!-- <SellItem /> -->
        <router-link to="/buy-sale">
          <div class="sell-btn">
            <Button dark fullWidth> Sell </Button>
          </div>
        </router-link>
      </header>

      <div class="exlusive-items-content">
        <div class="categories-wrapper">
          <div class="categories">
            <!-- category-checkList here -->
            <h2>Categories</h2>
            <div class="row" v-for="n in 6" :key="n.id">
              <v-checkbox
                class="customize--checkbox"
                label="Category name here"
              >
              </v-checkbox>
              <!-- <div class="category-name">Category name here</div> -->
            </div>
          </div>
        </div>

        <div class="items-list-wrapper">
          <header class="search__checklist">
            <SearchInput />
            <div>
              <DropdownButton
                big
                transparent
                dropdown
                @change="handleSortChange"
                :label="selectedSort.value"
                :options="sortOptions"
                :selected="selectedSort"
              />
            </div>
          </header>

          <content>
            <router-link
              to="/item"
              v-for="productinfo in productsData"
              :key="productinfo.id"
            >
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
                  <img :src="productIMG" :alt="productinfo.title" />
                </div>
                <h2 class="title_product">{{ productinfo.title }}</h2>
                <div class="item-price">{{ productinfo.popularity }}</div>
              </div>
            </router-link>
          </content>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
// import Checkbox from "../components/atoms/Checkbox";
import SearchInput from "../components/atoms/SearchInput";
import DropdownButton from "../components/atoms/DropdownButton";
import Pagination from "../components/atoms/Pagination";
import Button from "../components/atoms/Button";
import productIMG from "../assets/exitem.svg";
// import SellItem from '../components/atoms/SellItem'
// import axios from "axios"
// import { puplic_key } from "../data.js"

// const POSTER_PATH = "http://image.tmdb.org/t/p/w154"

// Key: http://www.omdbapi.com/?i=tt3896198&apikey=1c267267

export default {
  name: "ExlusiveItems",
  components: {
    // Checkbox,
    SearchInput,
    DropdownButton,
    Pagination,
    Button,
    // SellItem
  },
  props: {
    title: String,
    sellButton: Boolean,
  },
  data() {
    return {
      sortOptions: [
        {
          label: "Newest",
          value: "newest",
        },
        {
          label: "Oldest",
          value: "oldest",
        },
        {
          label: "Price",
          value: "price",
        },
      ],
      selectedSort: {
        label: "Newest",
        value: "newest",
      },
      productIMG: productIMG,
      show: true,
      productsData: [],
    };
  },
  mounted() {
    this.showArticle();
    this.fetchData();
  },
  methods: {
    handleSortChange(option) {
      this.selectedSort = option;
    },
    showArticle() {
      setTimeout(() => {
        this.show = false;
      }, 3000);
    },

    // fethc__dummy_data__from-movie-db
    fetchData: async function () {
      try {
        const res = await fetch(
          "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.descmovie/550&api_key=3f3b341e1928f82512c99387ebeafc9d"
        );
        const productsData = await res.json();
        this.productsData = productsData.results;
        console.log(productsData);
      } catch (error) {
        console.log(error);
      }
    },
  },
  inject: {
    theme: {
      default: { isDark: false },
    },
  },
};
</script>

<style lang="sass" scoped>

.exlusive-items-wrapper
  padding: 120px 0
  display: flex
  justify-content: center
  .exlusive-items
    width: 979px
    max-width: 100%
  .page-header
    margin-bottom: 30px
    display: flex
    justify-content: space-between
    align-items: center
    h1
      font-size: 30px
      margin: 0
      @media (max-width: 767px)
        font-size: 22px
      @media (max-width: 400px)
        font-size: 16px
    .sell-btn
      width: 137px
      @media (max-width: 400px)
        width: 70px
        .fullWidth
          height: 30px
.exlusive-items-content
  display: flex
  .categories-wrapper
    @media (max-width: 992px)
      display: none
    .categories
      border: 1px solid #f0f0f1
      border-radius: 24px
      padding: 24px
      width: 306px
      box-sizing: border-box
      margin-right: 30px
      .customize--checkbox
        color: #131416
        font-size: 16px
        font-weight: bold

    h2
      font-size: 18px
      margin: 0 0 20px 0
    .row
      display: flex
      margin-bottom: 24px
      .category-name
        margin-left: 14px
  .items-list-wrapper
    flex: 1
    .search__checklist
      display: flex
      @media (max-width: 992px)
        flex-direction: column
        .dropdown-button
          width: auto !important
          margin-bottom: 25px
      .search
        margin-right: 30px

      .dropdown-button
        width: 222px
    content
        display: flex
        flex-wrap: wrap
        justify-content: space-between
        @media (max-width: 400px)
          justify-content: center
        a
          text-decoration: none
        .item
          margin: 0
          margin-bottom: 40px
          width: 307px
          position: relative
          @media (max-width: 400px)
            width: auto
        .re_position
          position: absolute
          top: 0
          right: 0
          bottom: 0
          left: 0
        .thumb
          background: #f2f2f2
          border-radius: 24px
          height: 307px
          width: 307px
          margin-bottom: 26px
          display: flex
          align-items: center
          box-sizing: border-box
          padding: 10px
          @media (max-width: 767px)
            width: 250px
            height: 200px
          img
            width: 100%
        .title_product
          font-size: 18px
          margin: 0 0 20px 0
          color: black
          @media (max-width: 767px)
            font-size: 14px

        .item-price
          font-weight: 600
          font-size: 22px
          color: #000
          @media (max-width: 767px)
            font-size: 16px



</style>