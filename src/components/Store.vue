<template>
  <div class="exlusive-items-wrapper">
    <div class="exlusive-items">
      <header class="page-header">
        <h1>{{ title }}</h1>
        <div class="sell-btn" v-if="sellButton">
          <Button dark fullWidth>Sell item</Button>
        </div>
      </header>
      <div class="exlusive-items-content">
        <div class="categories-wrapper">
          <div class="categories">
            <h2>Categories</h2>
            <div class="row" v-for="n in 6" :key="n">
              <Checkbox />
              <div class="category-name">Category name here</div>
            </div>
          </div>
        </div>
        <div class="items-list-wrapper">
          <header>
            <SearchInput />
            <div>
              <DropdownButton
                big
                transparent
                dropdown
                @change="handleSortChange"
                label="Sort Items"
                :options="sortOptions"
                :selected="selectedSort"
              />
            </div>
          </header>
          <content>
            <div class="item" v-for="n in 10" :key="n">
              <div class="thumb">
                <img
                  src="https://s3-alpha-sig.figma.com/img/e6a5/7dff/4c9ed6ec2f56b581d17fe6f897af8d30?Expires=1602460800&Signature=PPv~XlEo4d~30N~3mauVQcOmv14c4-0Iz0BlV-uy7QO9MohhrPAzreVFNS2wM3Gi~Z~53b2mV3ju4EFE13qA~e-qWtTl~6ZM1JZgu0alj4ctQS2hEAvyieuiO04LjFms~42~f2ZJaAew5phfezZY2qFzN8hYq65vTMKHf0pODakA8-N85B1XxaD7MoTYMr38pf2YGXS8Nk8wMMSvNCNmmkShE37qVnINXbO2d5vikdvIinmSKnoCb3To-0oAFdZ60zDcTdOD5IOhgChfryMhU9Z7ZNMLpWxH0PrzdP6jGm2G-0P1eg4TTacrgFL4SVt0zYMK~rpdH3F5UQ77Hj~sDQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
                />
              </div>
              <h2>Title item of lorem ipsum dolor sit amet here</h2>
              <div class="item-price">Rp 150.000</div>
            </div>
          </content>
          <Pagination />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Checkbox from "../components/atoms/Checkbox";
import SearchInput from "../components/atoms/SearchInput";
import DropdownButton from "../components/atoms/DropdownButton";
import Pagination from "../components/atoms/Pagination";
import Button from "../components/atoms/Button";

export default {
  name: "ExlusiveItems",
  components: {
    Checkbox,
    SearchInput,
    DropdownButton,
    Pagination,
    Button,
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
    };
  },
  methods: {
    handleSortChange(option) {
      this.selectedSort = option;
    },
  },
};
</script>

<style lang="scss" scoped>
.exlusive-items-wrapper {
  padding: 120px 0;
  display: flex;
  justify-content: center;
  .exlusive-items {
    width: 979px;
    max-width: 100%;
  }

  .page-header {
    margin-bottom: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h1 {
      font-size: 30px;
      margin: 0;
    }
    .sell-btn {
      width: 137px;
    }
  }
}

.exlusive-items-content {
  display: flex;

  .categories {
    border: 1px solid #f0f0f1;
    border-radius: 24px;
    padding: 24px;
    width: 306px;
    box-sizing: border-box;
    margin-right: 30px;

    h2 {
      font-size: 18px;
      margin: 0 0 20px 0;
    }

    .row {
      display: flex;
      margin-bottom: 24px;

      .category-name {
        margin-left: 14px;
      }
    }
  }

  .items-list-wrapper {
    flex: 1;
    header {
      display: flex;
      .search {
        margin-right: 30px;
      }

      .dropdown-button {
        width: 222px;
      }
    }

    content {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      .item {
        margin: 0;
        margin-bottom: 40px;
        width: 307px;
        .thumb {
          background: #f2f2f2;
          border-radius: 24px;
          height: 307px;
          width: 307px;
          margin-bottom: 26px;
          display: flex;
          align-items: center;
          box-sizing: border-box;
          padding: 10px;
          img {
            width: 100%;
          }
        }

        h2 {
          font-size: 18px;
          margin: 0 0 20px 0;
        }

        .item-price {
          font-weight: 600;
          font-size: 22px;
        }
      }
    }
  }
}
</style>