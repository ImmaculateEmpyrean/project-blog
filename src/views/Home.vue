<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">
              <MainFeedWidget />
          </div>

          <div class="column is-3-desktop sideFeedColumn">
              sideFeed
          </div>
    </div>
</template>

<script>
import MainFeedWidget from '../components/MainFeedWidget/Widget.vue';

export default {
  name: 'Home',
  components:{
      MainFeedWidget
  }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';

    @include for-desktop-up{
        .home{
            margin-top: var(--spacing-large);
            background-color: map-get($light,"light");
        }
    }

    .mainFeedColumn{
        border: 1px solid steelblue;
    }

    .sideFeedColumn{
        border: 1px solid coral;
    }
</style>
