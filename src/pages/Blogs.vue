<template>
  <div class="exlusive-items-wrapper">
    <div class="exlusive-items">
      <header class="page-header">
        <h1>{{ title }}</h1>  
          <div class="sell-btn">
            <router-link to="/my-blogs">
              <button class="btn__bookmark">
              <img src="../assets/bookmark.svg" alt="">
            </button>
            </router-link>               
          </div>
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

              >

              </DropdownButton>
            </div>
          </header>

          <content>
           <div class="blog-article" v-for="b in 20" :key="b.id">
            

                <div class="article-thumb">
                  <img src="../assets/thumb.png" />
                </div>

                <div class="article-infos">
                  <div>
                    <h2>Title</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipiscing elit…</p>
                  </div>
                  <div class="article-actions">
                    <div class="vues-count">43 views</div>
                    <Button transparent fullRounded>
                      <img src="../assets/heart.svg" />
                      18
                    </Button>
                  </div>
                </div>

              </div>
          </content>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
// import Checkbox from "../components/atoms/Checkbox";
import SearchInput from "../components/atoms/SearchInput"
import DropdownButton from "../components/atoms/DropdownButton"
import Pagination from "../components/atoms/Pagination"
// import SellItem from '../components/atoms/SellItem'
// import axios from "axios"
// import { puplic_key } from "../data.js"

// const POSTER_PATH = "http://image.tmdb.org/t/p/w154"

// Key: http://www.omdbapi.com/?i=tt3896198&apikey=1c267267

import arrow from '../assets/option-checked.svg'

export default {
  name: "ExlusiveItems",
  data() {
    return {
      arrow: arrow,
      title: "Our blogs",
      sortOptions: [
        {
          label: "Newest",
          value: "Newset",
        },
        {
          label: "Oldest",
          value: "oldest",
        },
        {
          label: "Descending",
          value: "Descending",
        },
        {
          label: "Ascending",
          value: "Ascending",
        },
        {
          label: "Hightst price",
          value: "Hightst price",
        },
        {
          label: "Lowest price",
          value: "Lowest price",
        },
      ],
      selectedSort: {
        label: "Sellect Item",
        value: 'Sellect Item',
        // img: require('../assets/option-checked.svg')

      },
    
    };
  },
  components: {
    // Checkbox,
    SearchInput,
    DropdownButton,
    Pagination,



  },
  methods: {
    handleSortChange(option) {
      this.selectedSort = option;
    }
  }
};
</script>

<style lang="sass">

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
      .btn__bookmark
        outline: none
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
            height: 250px
            border-radius: 25px
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


  .blog-article
    display: flex
    width: 100%
    box-sizing: border-box
    border: 1px solid #e2e2e4
    border-radius: 34px
    padding: 24px
    margin-bottom: 30px
    @media (max-width: 767px)
      padding: 0
      margin-right: 0
      width: 235px

    .article-thumb
      margin-right: 20px
      border-radius: 24px
      overflow: hidden
      width: 124px
      height: 148px

      @media (max-width: 767px)
        width: 100%
        border-radius: 24px 24px 0 0

        img
          width: 100% !important
      img
        height: 148px
        width:124px
    .article-infos
      display: flex
      flex-direction: column
      justify-content: space-between
      height: 148px
      width: calc(100% - 124px)

      @media (max-width: 767px)
        padding: 0 10px
        width: 100%
      h2
        margin: 0 0 8px 0
      .vues-count
          font-weight: 600
      .article-actions
        display: flex
        justify-content: space-between
        justify-self: flex-end
        align-items: center
        @media (max-width: 767px)
          margin-bottom: 10px
</style>