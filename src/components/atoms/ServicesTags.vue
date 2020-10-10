<template>
  <div class="wrap_list">
    <ul class="un_list">
      <li v-for="list in listTitle" :key="list.id">
        {{list}}
      </li>
    </ul>

    <ul class="un_list">
      <li v-for="list in listTitle" :key="list.id">
        {{list}}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'buttonList',
    data: function () {
      return {
        listTitle: ['Digital Advertising', 'Digital Advertising', 'Digital Advertising']
      }
    }
  }
</script>

<style lang="sass" scoped>
  .wrap_list
    margin-top: 30px
    display: flex
    justify-content: center
    flex-direction: column
    @media (max-width: 767px)
      // flex-direction: column
      // margin-right: 0px
      // margin-left: 0px
      margin-right: -7px
      margin-left: 8px
    .un_list
      display: flex
      justify-content: space-between
      align-items: center
      padding:0
      margin: 0
      list-style: none
      @media (max-width: 767px)
        flex-direction: column
        padding-right: 0px
        padding-left: 0px


      li
        width: 474px
        height: 64px
        background-color: #ffffff
        border: 1px solid #F0F0F1
        margin-bottom: 30px
        margin-right: 20px
        border-radius: 15px
        text-align: center
        line-height: 64px
        font-size: 16px
        font-weight: bold
        cursor: pointer
        @media (max-width: 767px)
          flex-direction: column
          width: 250px
          height: 64px
          width: 100%
</style>
