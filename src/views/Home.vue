<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">
            <transition v-on:enter="animateIn"  v-on:after-enter="cleanUpAfterIn" :duration="1500"
                        v-on:leave="animateOut" v-on:after-leave="cleanUpAfterOut"     
                        @leave-cancelled="leaveCancelled" @after-leave="afterLeave">
                <KoiChoco v-show="latestPostDisplayCounter===0"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />
            </transition>
            <transition v-on:enter="animateIn"  v-on:after-enter="cleanUpAfterIn" :duration="1500"
                        v-on:leave="animateOut" v-on:after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @after-leave="afterLeave">
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

      animateIn(el){
        let animatables = el.querySelectorAll('.animate__animated');
        animatables.forEach(function(element){
            element.classList.add("animate__fadeIn")
        });
      },
      cleanUpAfterIn(el){
        let animatables = el.querySelectorAll('.animate__animated');
        animatables.forEach(function(element){
            element.classList.remove("animate__fadeIn")
        });
      },
      
      animateOut(el){
        let animatables = el.querySelectorAll('.animate__animated');
        animatables.forEach(function(el){
            el.classList.add("animate__fadeOut")
        });
      },
      cleanUpAfterOut(el){
        let animatables = el.querySelectorAll('.animate__animated');
        animatables.forEach(function(el){
            el.classList.remove("animate__fadeOut")
        });
      },

      leaveCanceled(){
          this.latestPostDisplayCounter = Math.trunc(this.latestPostDisplayCounter)
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
