<template>
<Container>
  <div class="promations">
    <div class="promations-header">
      <Title text="Promotions" />
      <CarouselPins :pages="3" :activePage="activePage" @clicked="handleCarouselChange"></CarouselPins>
    </div>

    <Carousel height="144px" v-touch:swipe.right="swipeRight" v-touch:swipe.left="swipeLeft">
      <CarouseScroll :page="activePage" :perPage="3">
        <CarouselItem backgroundColor="#FF9638">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#FF9638" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#48CA60">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#48CA60" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#6063EB">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#6063EB" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#FFD138">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#FFD138" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#48CA60">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#FFD138" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#FFD138">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#FFD138" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#FF9638">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#FFD138" white small>See now</Button>
          </div>
        </CarouselItem>

        <CarouselItem backgroundColor="#FFD138">
          <img src="../assets/caroussel1.png" />
          <h1>Title should be here</h1>
          <p>Lorem ipsum dolor amet</p>
          <div>
            <Button color="#FFD138" white small>See now</Button>
          </div>
        </CarouselItem>
      </CarouseScroll>
    </Carousel>

    <div class="items">
      <div class="item">
        <h2>Exlusive items</h2>
        <img src="../assets/priceTag.svg" />
      </div>
      <div class="item">
        <h2>Buy and Sell</h2>
        <img src="../assets/priceTag.svg" />
      </div>
      <div class="item disabled">
        <h2>Service name</h2>
        <img src="../assets/priceTag.svg" />
        <div class="disabled-tag">
          <img src="../assets/lock.svg" />
          Coming soon
        </div>
      </div>
      <div class="item disabled">
        <h2>Service name</h2>
        <img src="../assets/priceTag.svg" />
        <div class="disabled-tag">
          <img src="../assets/lock.svg" />Coming soon
        </div>
      </div>
    </div>

    <div class="services-ctgs">
      <div class="service-ctg">Digital Advertising</div>
      <div class="service-ctg">Digital Advertising</div>
      <div class="service-ctg">Digital Advertising</div>
      <div class="service-ctg">Digital Advertising</div>
    </div>
  </div>
</Container>
</template>

<script>
import Carousel from "./atoms/Carousel/Carousel";
import CarouselItem from "./organisms/CarouselItem";
import CarouseScroll from "./atoms/Carousel/CarouseScroll";
import CarouselPins from "./atoms/Carousel/CarouselPins";

import Button from "./atoms/Button";
import Title from "./atoms/Title";
import Container from "./atoms/Container";

export default {
  name: "Promoation",
  data() {
    return {
      activePage: 1,
    };
  },
  components: {
    Carousel,
    CarouselItem,
    CarouseScroll,
    CarouselPins,
    Button,
    Title,
    Container
  },
  methods: {
    handleCarouselChange(e) {
      this.activePage = e;
      console.log(this.activePage)
    },
    swipeLeft() {
      const newPage = this.activePage + 1
      this.activePage = newPage <= 3 ? newPage : 3
    },
    swipeRight() {
      const newPage = this.activePage - 1
      this.activePage = newPage >= 1 ? newPage : 1
    }
  },
};
</script>

<style lang="scss" scoped>
.promations {
  padding-top: 40px;

  .promations-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
  }

  .items {
    margin-top: 40px;
    display: flex;
    width: 100%;
    justify-content: space-between;

    .item {
      width: 174px;
      display: flex;
      flex-direction: column;
      border: 1px solid #f0f0f1;
      border-radius: 24px;
      padding: 24px 24px 20px 24px;
      position: relative;

      h2 {
        align-self: flex-end;
        text-align: right;
        width: 92px;
        font-size: 22px;
        color: #131416;
      }

      > img {
        align-self: flex-start;
        width: 167px;
        position: relative;
        left: -24px;
      }

      &.disabled {
        > * {
          opacity: 0.3;
        }

        .disabled-tag {
          background: #ffffff;
          opacity: 1;
          border: 1px solid #f4f4f4;
          border-radius: 11.5px;
          height: 25px;
          color: #25282b;
          font-size: 12px;
          position: absolute;
          bottom: 20px;
          right: 20px;
          display: flex;
          align-items: center;
          padding: 0 7px;
          font-weight: 600;

          img {
            height: 12px;
            width: 9px;
            margin-right: 7px;
          }
        }
      }
    }
  }

  .services-ctgs {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
    margin-top: 30px;

    .service-ctg {
      width: calc(50% - 15px);
      border: 1px solid #f0f0f1;
      border-radius: 23px;
      height: 64px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 16px;
      color: #25282b;
      margin-bottom: 15px;
      font-weight: 600;
    }
  }
}
</style>