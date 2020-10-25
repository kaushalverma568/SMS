<template>
  <div>
    <v-dialog v-model="dialog" persistent max-width="475">
      <template v-slot:activator="{ on, attrs }">
        <button class="share_vid" v-bind="attrs" v-on="on"></button>
      </template>
      <v-card>
        <v-card-title class="headline">
          <h5>Share</h5>
          <div class="exiet">
            <button class="button__exit" @click="dialog = false">
              <img src="../../assets/close-modal.svg" alt="close-modal" />
            </button>
          </div>
        </v-card-title>

        <v-card-actions class="actions__buttons">
          <div class="wrapper___button_actions">
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="20" cy="20" r="20" fill="#2275F7" />
              <path
                d="M24.5 17.1875H21.125V14.9375C21.125 14.3165 21.629 13.8125 22.25 13.8125H23.375V11H21.125C19.2609 11 17.75 12.5109 17.75 14.375V17.1875H15.5V20H17.75V29H21.125V20H23.375L24.5 17.1875Z"
                fill="#2275F7"
              />
            </svg>
          </button>
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="20" cy="20" r="20" fill="#03A9F4" />
              <path
                d="M28.5706 14.6574C27.9298 14.9385 27.2471 15.1248 26.5352 15.2152C27.2675 14.778 27.8265 14.0909 28.0892 13.2628C27.4065 13.6698 26.6526 13.9574 25.8492 14.1178C25.2009 13.4275 24.2769 13 23.2689 13C21.3132 13 19.7388 14.5874 19.7388 16.5334C19.7388 16.8134 19.7625 17.0826 19.8206 17.3389C16.8838 17.1957 14.2852 15.7882 12.5395 13.644C12.2348 14.1728 12.056 14.778 12.056 15.4295C12.056 16.6529 12.686 17.7374 13.6251 18.3652C13.0575 18.3545 12.5008 18.1897 12.0291 17.9302C12.0291 17.9409 12.0291 17.9549 12.0291 17.9689C12.0291 19.6855 13.2535 21.1114 14.8592 21.4398C14.5717 21.5185 14.2583 21.5562 13.9331 21.5562C13.7069 21.5562 13.4786 21.5432 13.2643 21.4958C13.722 22.8948 15.0208 23.9232 16.5651 23.9566C15.3632 24.8968 13.8372 25.4632 12.1852 25.4632C11.8955 25.4632 11.6177 25.4503 11.3398 25.4148C12.9046 26.4238 14.7591 27 16.7589 27C23.2592 27 26.8131 21.6154 26.8131 16.948C26.8131 16.7918 26.8077 16.6411 26.8002 16.4914C27.5012 15.9938 28.0903 15.3725 28.5706 14.6574Z"
                fill="#03A9F4"
              />
            </svg>
          </button>
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="20" cy="20" r="20" fill="#A41D92" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M16.3529 11H23.6156C26.5672 11 28.9685 13.4013 28.9685 16.3529V23.6156C28.9685 26.5672 26.5672 28.9685 23.6156 28.9685H16.3529C13.4013 28.9685 11 26.5672 11 23.6156V16.3529C11 13.4013 13.4013 11 16.3529 11ZM23.6156 27.1609C25.5736 27.1609 27.1609 25.5736 27.1609 23.6156V16.3529C27.1609 14.3949 25.5736 12.8076 23.6156 12.8076H16.3529C14.3949 12.8076 12.8076 14.3949 12.8076 16.3529V23.6156C12.8076 25.5736 14.3949 27.1609 16.3529 27.1609H23.6156ZM15.337 19.9842C15.337 17.4217 17.4217 15.337 19.9843 15.337C22.5468 15.337 24.6315 17.4217 24.6315 19.9842C24.6315 22.5467 22.5468 24.6315 19.9843 24.6315C17.4217 24.6315 15.337 22.5467 15.337 19.9842ZM17.1446 19.9843C17.1446 21.5526 18.4159 22.8239 19.9843 22.8239C21.5525 22.8239 22.8239 21.5525 22.8239 19.9843C22.8239 18.4159 21.5526 17.1446 19.9843 17.1446C18.416 17.1446 17.1446 18.4159 17.1446 19.9843ZM24.6405 16.4854C25.2556 16.4854 25.7541 15.9869 25.7541 15.3718C25.7541 14.7568 25.2556 14.2583 24.6405 14.2583C24.0255 14.2583 23.527 14.7568 23.527 15.3718C23.527 15.9869 24.0255 16.4854 24.6405 16.4854Z"
                fill="#A41D92"
              />
            </svg>
          </button>
          <button>
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle opacity="0.1" cx="20" cy="20" r="20" fill="#EF3F3F" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19.0818 29C20.918 29 22.263 28.7674 23.8146 28.0691L23.3492 26.5686C22.315 27.112 20.9183 27.3963 19.5993 27.3963C15.7456 27.3963 12.9784 24.9393 12.9784 20.6204C12.9784 15.6808 16.4442 12.5773 20.4008 12.5773C24.4098 12.5773 26.5821 15.1895 26.5821 18.5516C26.5821 21.5255 25.1857 22.9481 24.0737 22.9222C23.3494 22.8966 23.1686 22.198 23.4271 20.6725L24.2028 15.8878C23.5559 15.5259 22.263 15.2413 21.125 15.2413C17.401 15.2413 15.0734 18.112 15.0734 21.267C15.0734 23.3879 16.2889 24.6294 17.97 24.6294C19.3408 24.6294 20.5046 23.9569 21.3062 22.6378H21.3579C21.4873 24.0087 22.3665 24.6294 23.582 24.6294C26.3751 24.6294 28.4958 22.25 28.4958 18.4742C28.4958 14.1295 25.2372 11 20.6854 11C14.8402 11 11.0127 15.5776 11.0127 20.8536C11.0127 25.9223 14.7888 29 19.0818 29ZM20.711 17.2845C21.0471 17.2845 21.3059 17.3363 21.5129 17.388L21.1506 19.8447C20.918 21.3447 19.9092 22.5602 18.9524 22.5602C18.0991 22.5602 17.6592 21.9395 17.6592 20.9568C17.6592 18.9656 19.0044 17.2845 20.711 17.2845Z"
                fill="#EF3F3F"
              />
            </svg>
          </button>
          </div>
          <div class="copy_link_generated">
            <a class="copied__link">Https://video.us/b263bbs</a>
            <button class="copy_link_button">Copy link</button>
          </div>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>


<script>
export default {
  data() {
    return {
      dialog: false,
    };
  },
};
</script>


<style lang="sass" scoped>
.share_vid
  background-image: url('../../assets/share.svg')
  width: 20px
  height: 21px
  outline: none
  @media (max-width: 767px)
    margin-right: 10px


.headline
  outline: none
  display: flex
  justify-content: space-between
.actions__buttons
  display: flex
  justify-content: space-evenly
  flex-direction: column
  .wrapper___button_actions
    width: 100%
    display: flex
    justify-content: space-evenly
    button
      outline: none
  .copy_link_generated
    display: flex
    justify-content: space-between
    align-items: center
    width: 427px
    background: #f8f8fa
    border-radius: 15px
    height: 48px
    margin: 32px 0
    padding: 0 16px
    @media (max-width: 767px)
      width: 100%
      .copied__link
        font-size: 14px
        font-weight: normal

    .copy_link_button
      color: #000
      font-weight: bold
      font-size: 14px
      outline: none

      @media (max-width: 767px)
        font-size: 12px


</style>