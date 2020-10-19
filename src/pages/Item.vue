<template>
  <div class="item-wrapper">
    <div class="item">
      <div class="flex">
        <div class="thumb">
          <img :src="productIMG" />
        </div>
        <div class="infos">
          <h1>Product Title</h1>
          <div class="price">$120</div>
          <div>
            <div class="actions">
              <div class="action">
                <img :src="Phone" alt="phone icon" />
              </div>

              <productChat />
              <!-- <div class="action">
                <img :src="Chat" alt="chat icon" />
              </div>
               -->
              <div class="action __text">Request an admin</div>

              <div class="action hold__report__item" @click.stop="dialog = true">


                  <svg width="22" height="22" viewBox="0 0 22 22"  xmlns="http://www.w3.org/2000/svg" class="report__icon">
                  <path d="M19.5236 12.9518L16.012 7.33334L19.557 1.66101C19.6277 1.54771 19.6314 1.40544 19.5669 1.28884C19.502 1.17224 19.3795 1.10001 19.246 1.10001H2.96603V0.366675C2.96603 0.163908 2.0127 0.163908 2.0127 0.366675V1.46667V12.1V13.2V21.6333C2.0127 21.8361 2.96603 21.8361 2.96603 21.6333V13.5667H19.246C19.4561 13.5667 19.62 13.4028 19.62 13.2C19.62 13.1043 19.5834 13.0174 19.5236 12.9518Z" fill="#E2E2E4"/>
                  </svg>



                   <v-dialog max-width="475px" max-height="490px" class="v-dialog__height__width" v-model="dialog"
                  style="overflow-y: hidden"
                   >
                  <v-card>
                    <v-card-title class="headline">
                      Report this list
                    </v-card-title>

                    <v-card-text>
                      To report this list, please select one of the reasons
                      provided below.
                    </v-card-text>
                    <v-list>
                      <v-list-item>
                        <div>Reason 1</div>
                        <v-checkbox id="checked1" @click="enabled(this)"></v-checkbox>
                      </v-list-item>

                      <v-list-item>
                        <div>Reason 2</div>
                        <v-checkbox id="checked1" @click="enabled(this)"></v-checkbox>
                      </v-list-item>

                      <v-list-item>
                        <div>Reason 3</div>
                          <v-checkbox id="checked1" @click="enabled(this)"></v-checkbox>
                      </v-list-item>

                      <v-list-item>
                        <div>Other</div>
                        <v-checkbox  @click="typeReason = !typeReason"></v-checkbox>
                      </v-list-item>

                      <transition name="fade">
                        <v-list-item
                        class="hold__input"
                        v-if="typeReason"
                        >
                        <input type="text" placeholder="Write your reason..." id="checked1" @click="enabled(this)">
                      </v-list-item>
                      </transition>

                      <v-list-item class="hold__input">
                        <button
                        id="DDL"
                        @click="closeModal"
                        class="close_show_report_message"
                        disabled="disabled"
                        >
                          Submit
                        </button>
                      </v-list-item>
                    </v-list>


                      <v-btn
                        class="button___exit"
                        @click="dialog = false"
                      >
                        <img :src="close" alt="">
                      </v-btn>

                  </v-card>
                </v-dialog>

              </div>
            </div>
          </div>
          <div class="seller">
            <div class="avatar">
              <img :src="Oval" alt="" />
            </div>
            <div class="name">
              <h2>Lara Madrigal</h2>
              <div class="seller-type">Lorem ipsum</div>
            </div>
          </div>
        </div>
      </div>
      <div class="details">
        <h2>Lorem ipsum dolor sit amet consectetur adipisicing</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
          corrupti ipsam voluptas, quae dolores optio doloremque quod, illo
          quasi quos ratione praesentium. Voluptatibus totam provident cum non
          ipsa accusantium quam.
        </p>
        <div class="center__button" v-if="showReport">
          <button class="item__reported">Item reported</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ProductChat from '../components/atoms/ProductChat'
import productIMG from "../assets/exitem.svg";
import Chat from "../assets/chat-prod.svg";
import Phone from "../assets/phone.svg";
import Report from "../assets/report.svg";
import Oval from "../assets/oval.svg";
import close from "../assets/close-modal.svg";

const BACKDROP_PATH = "http://image.tmdb.org/t/p/w1280";

export default {
  data: function () {
    return {
      productIMG: productIMG,
      Chat: Chat,
      Phone: Phone,
      Report: Report,
      Oval: Oval,
      productdetail: {},
      dialog: false,
      checkbox: false,
      close,
      typeReason: false,
      showReport: false
    };
  },
  components: {
    ProductChat
  },
  created: function () {
    this.fetchData();
    this.enabled();
  },

  methods: {
    fetchData: async function () {
      try {
        const res = await fetch(
          // `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=3f3b341e1928f82512c99387ebeafc9d`
          `https://api.themoviedb.org/3/movie/${this.$route.params.id}?api_key=65e043c24785898be00b4abc12fcdaae`

          // `https://api.themoviedb.org/3/discover/movie?${this.$route.params.id}sort_by=popularity.descmovie/550&api_key=3f3b341e1928f82512c99387ebeafc9d`
        );
        const productdetail = await res.json();
        this.productdetail = productdetail;
        console.log("thisi iisljflskjflsfs", productdetail);
      } catch (error) {
        console.log(error);
      }
    },

    closeModal: function () {

      this.dialog = false;
      setTimeout(() => {
        this.showReport = true;
          document.querySelector(".report__icon").classList.add("add_height")
      }, 1000)
    },
    enabled: function () {
      const ddl  = document.getElementById('DDL')
      const checked1 =  document.getElementById('checked1')
      ddl.disabled = checked1.checked ? true : false
      // if(!ddl.disabled) {
      //   ddl.focus()
      // }
      console.log('wroking')
    }
  },
  computed: {
    styles() {
      return {
        background: `url(${BACKDROP_PATH}/${this.productdetail.backdrop_path}) no-repeat`,
      };
    },
  },
};
</script>

<style lang="sass">

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
      @media (max-width: 767px)
        width: 100%
        margin-top: 23px
      h1
        margin: 0
        font-size: 22px
        margin-bottom: 20px
        @media (max-width: 767px)
          margin-bottom: 4px

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
    .center__button
      width: 100%
      text-align: center
      .item__reported
        width: 130px
        height: 42px
        color: #fff
        background-color: #666
        border-radius: 14px
        opacity: 0.6
        outline: none


  .hold__report__item
    .button___exit
      width: 28px
      height: 28px
      border-radius: 28px
      // background: pink
    .report__icon.add_height path
      fill: #EF3F3F


// change the height of the report popup menu
.v-dialog,.v-dialog--active
  height: 500px !important
  position: relative
  .button___exit
    width: 28px
    height: 28px !important
    border-radius: 28px
    // background: pink
    font-size: 11px
    position: absolute
    top: 20px
    right: 20px
  .headline
    font-size: 24px !important
    font-weight: bold !important
  .v-card__subtitle, .v-card__text
    font-size: 16px
  .v-list-item
    display: flex
    justify-content: space-between
    // background: pink
    margin-bottom: 10px
    padding-left: 26px
    .v-input--selection-controls.v-input
      position: absolute
      right: 11px
  .hold__input
    margin-right: 7px
    input
      width: 100%
      background-color: #F1F1F5
      border-radius: 15px
      border: none
      outline: none
      opacity: 0.4
      height: 52px
      padding: 0 0 0 20px
      &:focus
        opacity: 1
        font-size: 16px
        font-weight: bold


    button
      width: 100%
      border: 1px solid #BDBEBF
      opacity: 0.5
      border-radius: 24px
      height: 46px
      outline: none
      color: #BDBEBF
      font-weight: bold
  .v-btn:not(.v-btn--round).v-size--default
    min-width: 28px



// add animation on the box__report..
.fade-enter-active, .fade-leave-active
  transition: all .4s ease-in-out
.fade-enter,.fade-leave-to
  opacity: 0
  transform: translateY(10px)
</style>