<template>
  <div class="title">
    <h1>{{ text }}</h1>
  </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        text: String
    }
}
</script>

<style lang="sass" scoped>
.title
  margin-bottom: 20px
  @media (max-width: 767px)
    margin-bottom: 8px
  h1
    font-size: 24px
    font-weight: 900
    @media (max-width: 767px)
      font-size: 18px
</style>