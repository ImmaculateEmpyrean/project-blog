<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">
              mainFeed
          </div>

          <div class="column is-3-desktop sideFeedColumn">
              sideFeed
          </div>
    </div>
</template>

<script>

export default {
  name: 'Home'
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';

    .mainFeedColumn{
        border: 1px solid steelblue;
    }

    .sideFeedColumn{
        border: 1px solid coral;
    }
</style>
