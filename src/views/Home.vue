<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">
            <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut"      
                        @after-leave="afterLeave">
                <KoiChoco v-show="latestPostDisplayCounter===0"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />
            </transition>
            <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut" 
                        @after-leave="afterLeave">
                <WhiteAlbum2 v-show="latestPostDisplayCounter===1"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />    
            </transition>

            <KoiChoco 
                @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
            />
          </div>
          <div class="column is-3-desktop sideFeedColumn">
              sideFeed
          </div>
    </div>
</template>

<script>
import KoiChoco from '../components/MainFeedWidget/finishedWidgets/LatestPosts/KoiChoco.vue';
import WhiteAlbum2 from '../components/MainFeedWidget/finishedWidgets/LatestPosts/WhiteAlbum2.vue'; 

export default {
  name: 'Home',
  components:{
    KoiChoco,
    WhiteAlbum2
  },
  data(){
      return{
          latestPostDisplayCounter: 0,
          latestPostDisplayCounterMax: 1,
          MostViewedPostDisplayCounter: 0
      }
  },
  methods:{
      latestLeftArrowClicked(){
        if(this.latestPostDisplayCounter > 0){
            this.latestPostDisplayCounter = this.latestPostDisplayCounter - 0.6;
        }
      },
      latestRightArrowClicked(){
        if(this.latestPostDisplayCounter < this.latestPostDisplayCounterMax){
            this.latestPostDisplayCounter = this.latestPostDisplayCounter + 0.6;
        }
      },

      afterLeave(){
          this.latestPostDisplayCounter = Math.round(this.latestPostDisplayCounter)
      }
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

    // .mainFeedColumn{
    //     border: 1px solid steelblue;
    // }

    // .sideFeedColumn{
    //     border: 1px solid coral;
    // }
</style>
