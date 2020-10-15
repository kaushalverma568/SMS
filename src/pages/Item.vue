<template>
  <div class="item-wrapper">
    <div class="item">
      <div class="flex">
        <div class="thumb">
          <img :src="productIMG" />
        </div>
        <div class="infos">
          <h1>Title item of lorem ipsum dolor sit amet should be here</h1>
          <div class="price">Rp 150.000</div>
          <div>
            <div class="actions">
              <div class="action">
                <img :src="Phone" />
              </div>
              <div class="action">
                <img :src="Chat" />
              </div>
              <div class="action __text">Request an admin</div>
              <div class="action">
                <img :src="Report" />
              </div>
            </div>
          </div>
          <div class="seller">
            <div class="avatar">
              <img :src="Oval" alt="">
            </div>
            <div class="name">
              <h2>Lara Madrigal</h2>
              <div class="seller-type">Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <h2>Product details</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores,
          quam, earum soluta tenetur atque quae adipisci voluptate aspernatur
          corrupti consequatur quisquam eaque voluptatum architecto deleniti
          labore tempora. Reprehenderit, sint veniam!
        </p>
        <p>
          Sed quia consequuntur magni dolores eos qui ratione voluptatem sequi
          nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit, sed quia non numquam eius modi
          tempora incidunt ut labore et dolore magnam aliquam quaerat
          voluptatem.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import productIMG from "../assets/exitem.svg"
import Chat from "../assets/chat-prod.svg"
import Phone from "../assets/phone.svg"
import Report from "../assets/report.svg"
import Oval from "../assets/oval.svg"

export default {
  data: function () {
    return {
      productIMG: productIMG,
      Chat: Chat,
      Phone: Phone,
      Report: Report,
      Oval: Oval
    };
  },
};
</script>

<style lang="sass" scoped>

.item-wrapper
  padding: 120px 0
  display: flex
  justify-content: center

  .item
    width: 810px
    max-width: 100%
    margin: auto
    .flex
      display: flex
      align-items: center
      margin-bottom: 40px
      @media (max-width: 767px)
        flex-direction: column


    .thumb
      width: 308px
      // min-width: 308px
      height: 307px

      background: #f2f2f2
      border-radius: 24px
      padding: 10px
      display: flex
      align-items: center
      justify-content: center
      box-sizing: border-box
      margin-right: 30px
      @media (max-width: 767px)
        width: 100%
        margin-left: 30px
      @media (max-width: 350px)
        height: 250px

      img
        width: 100%



    .infos
      h1
        margin: 0
        font-size: 22px
        margin-bottom: 20px

      .price
        color: #6063eb
        font-size: 18px
        font-weight: bold
        margin-bottom: 30px


      .actions
        display: flex
        border: 1px solid #f0f0f1
        border-radius: 18px
        padding: 14px 0
        align-items: center
        width: fit-content
        margin-bottom: 30px

        .action
          padding: 0 20px
          border-left: solid 1px #f0f0f1
          font-weight: 600
          font-size: 16px
          cursor: pointer
          height: 34px
          display: flex
          align-items: center
          &:first-child
            border-left: none
          @media (max-width: 992px)
            font-size: 13px
            padding: 0 15px
          @media (max-width: 767px)
            padding: 0 13px
      .seller
        display: flex
        align-items: center

        .avatar
          width: 40px
          height: 40px
          background: #f0f0f1
          border-radius: 50%
          margin-right: 16px


        .name
          h2
            font-size: 16px
            margin: 0
            margin-bottom: 3px

          .seller-type
            font-size: 14px
            font-weight: bold
            color: rgba($color: #131416, $alpha: 0.4)


  .details
    h2
      font-size: 18px
      margin: 0
      margin-bottom: 20px

    p
      font-size: 16px
      margin: 0
      line-height: 22px
      margin-bottom: 20px

</style>