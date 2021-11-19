<template>
    <div class="home columns is-desktop">
          <div class="column is-9-desktop mainFeedColumn">

            <section class="latestPosts">
                <!-- <div class="row"> -->
                    <div class="leftArrow" @click="latestLeftArrowClicked" v-show="!(inMobileConfiguration)">
                        <svg width="48" height="68" viewBox="0 0 78 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.01601 52.2585L75.8861 97.7792C76.0792 97.8991 76.3111 97.9736 76.5554 97.9942C76.7997 98.0147 77.0464 97.9805 77.2671 97.8955C77.4879 97.8104 77.6737 97.678 77.8034 97.5133C77.933 97.3487 78.0012 97.1585 78 96.9647V86.9711C78 86.3376 77.6231 85.73 77.0004 85.3421L18.0092 49.0005L77.0004 12.659C77.6395 12.2711 78 11.6635 78 11.03V1.03636C78 0.170166 76.7382 -0.308182 75.8861 0.221878L2.01601 45.7426C1.38816 46.129 0.880257 46.6233 0.530922 47.1878C0.18158 47.7523 0 48.3723 0 49.0005C0 49.6288 0.18158 50.2487 0.530922 50.8133C0.880257 51.3778 1.38816 51.8721 2.01601 52.2585Z" />
                        </svg>
                    </div>


                    <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                                @leave="animateOut" @after-leave="cleanUpAfterOut"     
                                @leave-cancelled="leaveCancelled"  @enter-cancelled="enterCancelled">
                        <KoiChoco   v-show="latestPostDisplayCounter===0" data-post="latestPost" @init="initLatestPosts" ref="latestPostInitialComponent"
                                    @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                        />
                    </transition>
                    <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                                @leave="animateOut" @after-leave="cleanUpAfterOut" 
                                @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                        <WhiteAlbum2    v-show="latestPostDisplayCounter===1" data-post="latestPost"
                                        @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                        />    
                    </transition>
                    <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                                @leave="animateOut" @after-leave="cleanUpAfterOut" 
                                @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                        <Ef v-show="latestPostDisplayCounter===2" data-post="latestPost"
                            @leftArrow:clicked="latestLeftArrowClicked" @rightArrow:clicked="latestRightArrowClicked"
                        />    
                    </transition>

                    <div class="rightArrow" @click="latestRightArrowClicked" v-show="!inMobileConfiguration">
                        <svg width="48" height="68" viewBox="0 0 78 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75.984 45.7415L2.11387 0.220791C1.92084 0.100896 1.68887 0.0263863 1.44459 0.00581849C1.20031 -0.0147493 0.953627 0.0194589 0.732879 0.104515C0.512131 0.189571 0.326269 0.322026 0.196634 0.486666C0.0669989 0.651307 -0.00115053 0.841457 1.46958e-05 1.03528V11.0289C1.46958e-05 11.6624 0.376904 12.27 0.999589 12.6579L59.9908 48.9995L0.999589 85.341C0.360518 85.7289 1.46958e-05 86.3365 1.46958e-05 86.97V96.9636C1.46958e-05 97.8298 1.26177 98.3082 2.11387 97.7781L75.984 52.2574C76.6118 51.871 77.1197 51.3767 77.4691 50.8122C77.8184 50.2477 78 49.6277 78 48.9995C78 48.3712 77.8184 47.7513 77.4691 47.1867C77.1197 46.6222 76.6118 46.1279 75.984 45.7415Z"/>
                        </svg>
                    </div>
                <!-- </div> -->
            </section>
            
            <section class="editorsPick">
                <!-- <div class="row"> -->
                    <div class="leftArrow" @click="editorsPickLeftArrowClicked" v-show="!inMobileConfiguration">
                        <svg width="48" height="68" viewBox="0 0 78 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.01601 52.2585L75.8861 97.7792C76.0792 97.8991 76.3111 97.9736 76.5554 97.9942C76.7997 98.0147 77.0464 97.9805 77.2671 97.8955C77.4879 97.8104 77.6737 97.678 77.8034 97.5133C77.933 97.3487 78.0012 97.1585 78 96.9647V86.9711C78 86.3376 77.6231 85.73 77.0004 85.3421L18.0092 49.0005L77.0004 12.659C77.6395 12.2711 78 11.6635 78 11.03V1.03636C78 0.170166 76.7382 -0.308182 75.8861 0.221878L2.01601 45.7426C1.38816 46.129 0.880257 46.6233 0.530922 47.1878C0.18158 47.7523 0 48.3723 0 49.0005C0 49.6288 0.18158 50.2487 0.530922 50.8133C0.880257 51.3778 1.38816 51.8721 2.01601 52.2585Z" />
                        </svg>
                    </div>

                    <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                                @leave="animateOut" @after-leave="cleanUpAfterOut"     
                                @leave-cancelled="leaveCancelled"  @enter-cancelled="enterCancelled">
                        <Phenomeno  v-show="editorsPickPostDisplayCounter===0" data-post="editorsPick" @init="initEditorsPick" ref="editorsPickInitialComponent"
                            @leftArrow:clicked="editorsPickLeftArrowClicked" @rightArrow:clicked="editorsPickRightArrowClicked"
                        />
                    </transition>
                    <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                                @leave="animateOut" @after-leave="cleanUpAfterOut" 
                                @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                        <Cartagra v-show="editorsPickPostDisplayCounter===1" data-post="editorsPick"
                            @leftArrow:clicked="editorsPickLeftArrowClicked" @rightArrow:clicked="editorsPickRightArrowClicked"
                        />    
                    </transition>
                    <transition @enter="animateIn"  @after-enter="cleanUpAfterIn" :duration="1000"
                                @leave="animateOut" @after-leave="cleanUpAfterOut" 
                                @leave-cancelled="leaveCancelled" @enter-cancelled="enterCancelled">
                        <Clannad v-show="editorsPickPostDisplayCounter===2" data-post="editorsPick"
                            @leftArrow:clicked="editorsPickLeftArrowClicked" @rightArrow:clicked="editorsPickRightArrowClicked"
                        />    
                    </transition>

                    <div class="rightArrow" @click="editorsPickRightArrowClicked" v-show="!inMobileConfiguration">
                        <svg width="48" height="68" viewBox="0 0 78 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M75.984 45.7415L2.11387 0.220791C1.92084 0.100896 1.68887 0.0263863 1.44459 0.00581849C1.20031 -0.0147493 0.953627 0.0194589 0.732879 0.104515C0.512131 0.189571 0.326269 0.322026 0.196634 0.486666C0.0669989 0.651307 -0.00115053 0.841457 1.46958e-05 1.03528V11.0289C1.46958e-05 11.6624 0.376904 12.27 0.999589 12.6579L59.9908 48.9995L0.999589 85.341C0.360518 85.7289 1.46958e-05 86.3365 1.46958e-05 86.97V96.9636C1.46958e-05 97.8298 1.26177 98.3082 2.11387 97.7781L75.984 52.2574C76.6118 51.871 77.1197 51.3767 77.4691 50.8122C77.8184 50.2477 78 49.6277 78 48.9995C78 48.3712 77.8184 47.7513 77.4691 47.1867C77.1197 46.6222 76.6118 46.1279 75.984 45.7415Z"/>
                        </svg>
                    </div>
                <!-- </div> -->
            </section>
          </div>

          <div class="column is-3-desktop sideFeedColumn">
              <RecommendationsWidget />
          </div>
    </div>
</template>

<script>
import {isMobile} from '@/javascript/breakpoints.js';

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

        RecommendationsWidget,
    },
    data(){
        return{
            latestPostDisplayCounter: 0,
            latestPostDisplayCounterMax: 2,

            editorsPickPostDisplayCounter:0,
            editorsPickPostDisplayCounterMax:2,

            inMobileConfiguration: false
        }
    },
    methods:{
        initLatestPosts(){
            let latestPostsSection = this.$el.querySelector('.latestPosts');

            let computedStyle = window.getComputedStyle(this.$refs.latestPostInitialComponent.$el);
            let marginValue = parseInt(computedStyle.getPropertyValue('margin-top'));
            marginValue = marginValue + parseInt(computedStyle.getPropertyValue('margin-bottom'));

            let latestPostInitialComponentHeight = 0;
            let gapValue = parseInt(computedStyle.getPropertyValue('row-gap'));

            this.$refs.latestPostInitialComponent.$el.childNodes.forEach(function(node){
                latestPostInitialComponentHeight = latestPostInitialComponentHeight + parseInt(node.offsetHeight); 
                latestPostInitialComponentHeight = latestPostInitialComponentHeight + gapValue;
            })

            latestPostsSection.style.maxHeight = `${latestPostInitialComponentHeight + marginValue}px`;
        },
        initEditorsPick(){
            let editorsPickSection = this.$el.querySelector('.editorsPick');
            
            let computedStyle = window.getComputedStyle(this.$refs.editorsPickInitialComponent.$el);
            let marginValue = parseInt(computedStyle.getPropertyValue('margin-top'));
            marginValue = marginValue + parseInt(computedStyle.getPropertyValue('margin-bottom'));

            let editorsPickInitialComponentHeight = 0;
            let gapValue = parseInt(computedStyle.getPropertyValue('row-gap'));

            this.$refs.editorsPickInitialComponent.$el.childNodes.forEach(function(node){
                editorsPickInitialComponentHeight = editorsPickInitialComponentHeight + parseInt(node.offsetHeight); 
                editorsPickInitialComponentHeight = editorsPickInitialComponentHeight + gapValue;
            })

            editorsPickSection.style.maxHeight = `${editorsPickInitialComponentHeight + marginValue}px`;
        },

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

            let section = null;
            if(el.dataset.post === "latestPost")
                section = this.$el.querySelector('.latestPosts');
            else if(el.dataset.post === "editorsPick")
                section = this.$el.querySelector('.editorsPick');
            else console.log('the animateIn elements post data attribute cannot be determined');

            let computedStyle = window.getComputedStyle(el);
            let marginValue = parseInt(computedStyle.getPropertyValue('margin-top'));
            marginValue = marginValue + parseInt(computedStyle.getPropertyValue('margin-bottom'));

            let componentHeight = 0;
            let gapValue = parseInt(computedStyle.getPropertyValue('row-gap'));

            el.childNodes.forEach(function(node){
                componentHeight = componentHeight + parseInt(node.offsetHeight); 
                componentHeight = componentHeight + gapValue;
            })

            section.style.maxHeight = `${componentHeight + marginValue}px`
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
            
            this.afterLeave({name:el.dataset.post});
        },
        afterLeave(whichPost){
            if(whichPost.name === 'latestPost')
                this.latestPostDisplayCounter = Math.round(this.latestPostDisplayCounter)
            else if(whichPost.name === 'editorsPick')
                this.editorsPickPostDisplayCounter = Math.round(this.editorsPickPostDisplayCounter)
        },
        

        // I cant really figure out if this function must exist or what must it do
        enterCancelled(el){
            this.cleanUpAfterIn(el);
        },
        leaveCancelled(el){
            this.latestPostDisplayCounter = Math.trunc(this.latestPostDisplayCounter)

            this.cleanUpAfterOut(el);
            this.animateIn(el);
        },


        //arrow manipulation
        checkForMobileMode(){
            if(isMobile()){
                if(this.inMobileConfiguration === false)
                    this.setMobileConfiguration();
            } else {
                if(this.inMobileConfiguration === true)
                    this.unsetMobileConfiguration();
            }
        },
        setMobileConfiguration(){
            let leftArrows = this.$el.querySelectorAll('.leftArrow');
            let rightArrows = this.$el.querySelectorAll('.rightArrow');

            leftArrows.forEach(function(leftArrow){
                leftArrow.style.display = "hidden"
            });
            rightArrows.forEach(function(rightArrow){
                rightArrow.style.display = "hidden"
            })

            this.inMobileConfiguration = true;
        },
        unsetMobileConfiguration(){
            let leftArrows = this.$el.querySelectorAll('.leftArrow');
            let rightArrows = this.$el.querySelectorAll('.rightArrow');

            leftArrows.forEach(function(leftArrow){
                leftArrow.style.display = ""
            });
            rightArrows.forEach(function(rightArrow){
                rightArrow.style.display = ""
            })

            this.inMobileConfiguration = false;
        }
    },
    mounted(){
        this.checkForMobileMode();
        window.addEventListener("resize",this.checkForMobileMode);
    },
    beforeUnmount(){
        window.removeEventListener("resize",this.checkForMobileMode);
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

    section{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: var(--spacing-large);
        
        transition: max-height 2s ease-in-out;
        height: 10000px;
        max-height: 0px;
        overflow-y: hidden;

        .leftArrow{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            @include for-tablet-portrait-up{
                flex: 1 1 11.11%;
                justify-content: center;
            }

            svg{
                transition: fill 0.3s ease-in-out;
                fill: map-get($dark,"dark");
            }
            &:hover{
                svg{
                    fill: $accent;
                }   
            }

            cursor: pointer;
        }

        .rightArrow{
            display: flex;
            flex-direction: column;
            justify-content: flex-end;

            @include for-tablet-portrait-up{
                flex: 1 1 11.11%;
                justify-content: center;
            }

            svg{
                transition: fill 0.3s ease-in-out;
                fill: map-get($dark,"dark");
            }
            &:hover{
                svg{
                    fill: $accent;
                }   
            }

            cursor: pointer;
        }
    }
</style>
