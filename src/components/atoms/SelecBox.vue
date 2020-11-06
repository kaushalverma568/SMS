<template>
<div class="select-box">
  <button class="select-box__current" tabindex="1">
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="0" value="1" name="Ben" checked="checked"/>

      <p class="select-box__input-text"> Sort items</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="1" value="2" name="Ben"/>
      <p class="select-box__input-text">
          <img src="../../assets/option-checked.svg"/>
        Newest</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="2" value="3" name="Ben"/>
      <p class="select-box__input-text">
          <img src="../../assets/option-checked.svg"/>

        Oldest</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="3" value="4" name="Ben"/>
      <p class="select-box__input-text">
          <img src="../../assets/option-checked.svg"/>

        Descending</p>
    </div>
    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="4" value="5" name="Ben"/>
      <p class="select-box__input-text">
          <img src="../../assets/option-checked.svg"/>

        Ascending</p>
    </div>

    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="5" value="5" name="Ben"/>
      <p class="select-box__input-text">
          <img src="../../assets/option-checked.svg"/>

        Highest price</p>
    </div>

    <div class="select-box__value">
      <input class="select-box__input" type="radio" id="6" value="5" name="Ben"/>
      <p class="select-box__input-text">
          <img src="../../assets/option-checked.svg"/>

        lowest price</p>
    </div>
    <img class="select-box__icon" src="http://cdn.onlinewebfonts.com/svg/img_295694.svg" alt="Arrow Icon" aria-hidden="true"/>
  </button>
  <ul class="select-box__list">
    <li>

      <label class="select-box__option" for="0" aria-hidden="aria-hidden">
        Sort items</label>
    </li>
    <li>
      <label class="select-box__option" for="1" aria-hidden="aria-hidden">
              <img src="../../assets/option-checked.svg"/>

        Newest</label>
    </li>
    <li>
      <label class="select-box__option" for="2" aria-hidden="aria-hidden">
          <img src="../../assets/option-checked.svg"/>

        Oldest</label>
    </li>
    <li>
      <label class="select-box__option" for="3" aria-hidden="aria-hidden">
          <img src="../../assets/option-checked.svg"/>

        Descending</label>
    </li>
    <li>
      <label class="select-box__option" for="4" aria-hidden="aria-hidden">
          <img src="../../assets/option-checked.svg"/>

        Ascending</label>
    </li>

        <li>
      <label class="select-box__option" for="5" aria-hidden="aria-hidden">
          <img src="../../assets/option-checked.svg"/>

        <span>
        Highest price

          </span>
        </label>
    </li>
    <li>
      <label class="select-box__option" for="6" aria-hidden="aria-hidden">
          <img src="../../assets/option-checked.svg"/>

        lowest price</label>
    </li>
  </ul>
</div>

</template>

<script>
  export default {

  }
</script>

<style lang="sass" scoped>

.select-box
  margin-bottom: 50px
  position: relative
  display: block
  width: 222px
  margin: 0 auto
  font-size: 18px
  color: #60666d
  z-index: 10000
  // height: 50px
  // border: 1px solid #F0F0F1
  // @media (min-width: 992px)
  //   width: 50%

  // @media (min-width: 1200px)
  //   width: 30%
  &__current
    position: relative
    // box-shadow: 0 15px 30px -10px transparentize(#000, 0.9)
    cursor: pointer
    outline: none
    width: 222px
    border: 1px solid #F0F0F1
    border-radius: 14px !important
    display: flex
    justify-content: space-between
    align-items: center
    height: 47px
    // background: #000

    &:focus
      & + .select-box__list
        opacity: 1
        animation-name: none
        .select-box__option
          cursor: pointer
      .select-box__icon
        transform: translateY(-50%) rotate(180deg)
  &__icon
    position: absolute
    top: 50%
    right: 15px
    transform: translateY(-50%)
    width: 20px
    opacity: 0.3
    transition: 0.2s ease
  &__value
    display: flex
  &__input
    display: none
    &:checked + .select-box__input-text
      display: block
      color: #000
      margin-right: 90px !important
  &__input-text
    display: none
    // width: 100%
    margin: 0
    padding-left: 15px
    // background-color: #fff
  &__list
    position: absolute
    width: 100%
    padding: 0
    list-style: none
    opacity: 0
    animation-name: HideList
    animation-duration: 0.5s
    animation-delay: 0.5s
    animation-fill-mode: forwards
    animation-timing-function: step-start
    // box-shadow: 0 15px 30px -10px transparentize(#000, 0.9)
  &__option
    display: block
    padding: 15px
    background-color: #fff
    box-shadow: 0 11px 21px rgba(0,0,0,.104922)
    width: 222px
    // &:hover,
    // &:focus
    //   color: #546c84
    //   background-color: #fbfbfb
@keyframes HideList
  from
    transform: scaleY(1)
  to
    transform: scaleY(0)

.select-box__list
  width: 300px
  .select-box__option
    img
      display: none
      &::checked
        display: block

</style>