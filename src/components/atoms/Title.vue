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

<style lang="scss" scoped>
.title {
    h1 {
        font-size: 24px;
    }
}
</style>