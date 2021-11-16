<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">

            <!-- start section latest post -->
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut"     
                        @leave-cancelled="leaveCancelled"  @enter-cancelled="enterCancelled">
                <KoiChoco v-show="latestPostDisplayCounter===0" data-counter="latestPostCounter"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />
            </transition>
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                <WhiteAlbum2 v-show="latestPostDisplayCounter===1" data-counter="latestPostCounter"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />    
            </transition>
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                <Ef v-show="latestPostDisplayCounter===2" data-counter="latestPostCounter"
                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                />    
            </transition>
            <!-- ended section latest post -->

            <!-- start section Editors Pick -->
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut"     
                        @leave-cancelled="leaveCancelled"  @enter-cancelled="enterCancelled">
                <Phenomeno v-show="editorsPickPostDisplayCounter===0" data-counter="editorsPickCounter"
                    @leftArrow:clicked="editorsPickLeftArrowClicked" @rightArrow:clicked="editorsPickRightArrowClicked"
                />
            </transition>
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                <Cartagra v-show="editorsPickPostDisplayCounter===1" data-counter="editorsPickCounter"
                    @leftArrow:clicked="editorsPickLeftArrowClicked" @rightArrow:clicked="editorsPickRightArrowClicked"
                />    
            </transition>
            <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                        @leave="animateOut" @after-leave="cleanUpAfterOut" 
                        @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                <Clannad v-show="editorsPickPostDisplayCounter===2" data-counter="editorsPickCounter"
                    @leftArrow:clicked="editorsPickLeftArrowClicked" @rightArrow:clicked="editorsPickRightArrowClicked"
                />    
            </transition>
            <!-- ended section Editors Pick -->
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

import Clannad from '../components/MainFeedWidget/finishedWidgets/EditorsPickPosts/Clannad.vue';
import Cartagra from '../components/MainFeedWidget/finishedWidgets/EditorsPickPosts/Cartagra.vue';
import Phenomeno from '../components/MainFeedWidget/finishedWidgets/EditorsPickPosts/Phenomeno.vue';

import RecommendationsWidget from '../components/RecommendationsWidget/Widget.vue';

export default {
    name: 'Home',
    components:{
        KoiChoco,
        WhiteAlbum2,
        Ef,
        
        Clannad,
        Cartagra,
        Phenomeno,

        RecommendationsWidget
    },
    data(){
        return{
            latestPostDisplayCounter: 0,
            latestPostDisplayCounterMax: 2,

            editorsPickPostDisplayCounter:0,
            editorsPickPostDisplayCounterMax:2,
        }
    },
    methods:{
        leftArrowClickedMainFeed(obj){
            if(obj.counterName === 'latestPostCounter'){
                if(this.latestPostDisplayCounter > 0)
                    this.latestPostDisplayCounter = this.latestPostDisplayCounter - 0.6;
            }
            else if(obj.counterName === 'editorsPickCounter'){
                if(this.editorsPickPostDisplayCounter > 0)
                    this.editorsPickPostDisplayCounter = this.editorsPickPostDisplayCounter - 0.6;
            }
        },
        rightArrowClickedMainFeed(obj){
            if(obj.counterName === 'latestPostCounter'){
                if(this.latestPostDisplayCounter < this.latestPostDisplayCounterMax)
                    this.latestPostDisplayCounter = this.latestPostDisplayCounter + 0.6;
            }
            else if(obj.counterName === 'editorsPickCounter'){
                if(this.editorsPickPostDisplayCounter < this.editorsPickPostDisplayCounterMax)
                    this.editorsPickPostDisplayCounter = this.editorsPickPostDisplayCounter + 0.6;
            }
        },

        latestLeftArrowClicked(){
            this.leftArrowClickedMainFeed({
                counterName: "latestPostCounter"
            });
        },
        latestRightArrowClicked(){
            this.rightArrowClickedMainFeed({
                counterName: "latestPostCounter"
            });
        },
        editorsPickLeftArrowClicked(){
            this.leftArrowClickedMainFeed({
                counterName: "editorsPickCounter"
            });
        },
        editorsPickRightArrowClicked(){
            this.rightArrowClickedMainFeed({
                counterName: "editorsPickCounter"
            });
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
            
            this.afterLeave({name:el.dataset.counter});
        },
        afterLeave(whichCounter){
            if(whichCounter.name === 'latestPostCounter')
                this.latestPostDisplayCounter = Math.round(this.latestPostDisplayCounter)
            else if(whichCounter.name === 'editorsPickCounter')
                this.editorsPickPostDisplayCounter = Math.round(this.editorsPickPostDisplayCounter)
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
</style>
