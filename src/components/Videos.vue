<template>
  <Container>
    <div class="videos">
      <div class="videos-header">
        <Title text="Videos" />
        <Button transparent>See all</Button>
      </div>
      <div class="videos-list">
        <div class="videos-holder">
            <VideoPreview />
             <VideoPreview />
              <VideoPreview />
        </div>
      </div>
    </div>
  </Container>
</template>

<script>
import Title from "./atoms/Title";
import Button from "./atoms/Button";
import Container from "./atoms/Container";
import VideoPreview from './organisms/VideoPreview'

export default {
    name: 'Videos',
    components: {
        Title,
        Container,
        Button,
        VideoPreview
    }
}
</script>


<style lang="scss" scoped>
.videos {
  margin-top: 40px;
  .videos-header {
    display: flex;
    justify-content: space-between;
  }

  .videos-holder{
      display: flex;
       width: calc(410px * 3)
  }
}
</style>