<template>
    <nav id="NavBar">
        <router-link to="/" class="brandLogo" id="brandLogo"
         v-show="showBrandLogo"
        ><img :src="require('../../assets/img/logo.svg')" alt="brand-logo"></router-link>

        <div class="navFiller"></div>

        <ResponsiveNavSearchBar 
         @navSearchBar:maximize="navSearchBarMaximize" @navSearchBar:minimize="navSearchBarMinimize"
        />       
    </nav>
</template>

<script>
import ResponsiveNavSearchBar from './ResponsiveNavSearchBar.vue';

import {isMobile} from '@/javascript/breakpoints';

export default {
    name: "NavBar",
    components:{
        ResponsiveNavSearchBar
    },
    data(){
        return{
            showBrandLogo: true
        }
    },
    methods:{
        navSearchBarMinimize(){
            if(isMobile()){
                let nav = this.$el;
                nav.style.justifyContent = "space-between";
            }
        },
        navSearchBarMaximize(){
            if(isMobile()){
                let nav = this.$el;
                nav.style.justifyContent = "flex-end";
            }
        }
    },
    mounted(){
        window.addEventListener('scroll',function(){
            let scrolledY = window.pageYOffset;
            if(scrolledY > 100){
                this.$el.classList.add('minimize');
            } else if(scrolledY < 100){
                this.$el.classList.remove('minimize');
            }
        }.bind(this));
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    nav{
        transition: min-height 1s ease-in-out;
        overflow-y: hidden;

        display: flex;
        position: sticky;
        top: 0;

        justify-content: space-between;
        align-items: center;

        padding: 0 var(--spacing-large);

        min-height: 150px;
        &.minimize{
            min-height: 75px;
        }

        background: map-get($light,"light");
    }

    .brandLogo{
        position: relative;
        z-index: 1;

        font-family: Permanent Marker, cursive;
        font-style: normal;
        font-weight: normal;
        font-size: var(--font-larger);
        line-height: 58px;

        color: map-get($dark,"dark");
    }

     .navFiller{
        position: absolute;
        background-color: map-get($light,"light");

        &.fillScreen{
            animation-name: fillScreenCircle;
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-timing-function: ease-out;
            animation-direction: forwards;
        }
        &.clearScreen{
            animation-name: fillScreenCircle;
            animation-duration: 1s;
            animation-fill-mode: both;
            animation-timing-function: ease-out;
            animation-direction: reverse;
        }

        z-index: 2;
    }
</style>