<template>
  <div class="exlusive-items-wrapper">
    <div class="exlusive-items">
      <header class="page-header">
        <h1>{{ title }}</h1>
        <!-- <SellItem /> -->
        <!-- <router-link to="/buy-sale">
          <div class="sell-btn">
            <Button dark fullWidth> Sell Item</Button>
          </div>
        </router-link> -->
      </header>

      <div class="exlusive-items-content">
        <div class="categories-wrapper">
          <div class="categories">
            <!-- category-checkList here -->
            <h2>Categories</h2>
              <div class="row" v-for="n in 6" :key="n.id">
                <CheckBoxCustom />
              <div class="category-name">Category name here</div>
            </div>
          </div>
        </div>

        <div class="items-list-wrapper">
          <header class="search__checklist">
            <SearchInput />
            <SelecBox />
          </header>

          <content>
            <div v-for="product in 20" :key="product.id">
              <Product />
            </div>
          </content>
        </div>
      </div>
      <Pagination />
    </div>
  </div>
</template>

<script>
import SearchInput from "../components/atoms/SearchInput"
import Pagination from "../components/atoms/Pagination"
import Product from "../components/atoms/Product"
import CheckBoxCustom from "../components/atoms/CustomCheckbox"
import SelecBox from "../components/atoms/SelecBox"
import arrow from '../assets/option-checked.svg'

export default {
  name: "ExlusiveItems",
  components: {
    SearchInput,
    Pagination,
    Product,
    CheckBoxCustom,
    SelecBox

  },
  props: {
    title: String,
    sellButton: Boolean,
  },
  data() {
    return {
      arrow: arrow,
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
        label: "Sort items",
        value: 'Sort items',

      },

    };
  },

  methods: {
    handleSortChange(option) {
      this.selectedSort = option;
    },
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
      @media (max-width: 400px)
        width: 100px
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
      align-items: center
      .category-name
        margin-left: 14px
        font-size: 16px
        font-weight: bold
  .items-list-wrapper
    flex: 1
    .search__checklist
      display: flex
      margin-bottom: 26px
      justify-content: space-between
      align-items: center
      @media (max-width: 992px)
        flex-direction: column
        .dropdown-button
          width: auto !important
          margin-bottom: 25px
      .search
        margin-right: 30px
        @media (max-width: 992px)
          margin-right: 0 !important

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
</style>