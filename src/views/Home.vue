<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut"     
                        @leave-cancelled="leaveCancelled"  @enter-cancelled="enterCancelled">
                <KoiChoco v-show="latestPostDisplayCounter===0"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />
            </transition>
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                <WhiteAlbum2 v-show="latestPostDisplayCounter===1"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />    
            </transition>
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                <Ef v-show="latestPostDisplayCounter===2"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />    
            </transition>

            <KoiChoco 
                @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
            />
          </div>
          <div class="column is-3-desktop sideFeedColumn">
              <RecommendationsWidget />
          </div>
    </div>
</template>

<script>
import KoiChoco from '../components/MainFeedWidget/finishedWidgets/LatestPosts/KoiChoco.vue';
import WhiteAlbum2 from '../components/MainFeedWidget/finishedWidgets/LatestPosts/WhiteAlbum2.vue';
import Ef from '../components/MainFeedWidget/finishedWidgets/LatestPosts/EfATaleOfTwo.vue'; 

import RecommendationsWidget from '../components/RecommendationsWidget/Widget.vue';

export default {
    name: 'Home',
    components:{
        KoiChoco,
        WhiteAlbum2,
        Ef,

        RecommendationsWidget
    },
    data(){
        return{
            latestPostDisplayCounter: 0,
            latestPostDisplayCounterMax: 2,
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

            this.afterLeave();
        },
        afterLeave(){
            this.latestPostDisplayCounter = Math.round(this.latestPostDisplayCounter)
        },
        

        // I cant really figure out if this function must exist or what must it do
        enterCancelled(el){
            console.log(el);
            console.log('enter transition cancelled, presumably for the above element');
            this.cleanUpAfterIn(el);
        },
        leaveCancelled(el){
            this.latestPostDisplayCounter = Math.trunc(this.latestPostDisplayCounter)

            this.cleanUpAfterOut(el);
            this.animateIn(el);
        },
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

    .sideFeedColumn{
        display: flex;
    }

    // .mainFeedColumn{
    //     border: 1px solid steelblue;
    // }

    // .sideFeedColumn{
    //     border: 1px solid coral;
    // }
</style>
