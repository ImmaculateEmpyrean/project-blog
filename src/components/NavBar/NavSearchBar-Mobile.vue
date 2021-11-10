<template>
    <div class="navFiller"></div>
    <div class="NavSearchButtonMobile" id="NavSearchButtonMobile"
         @click="NavSearchButtonMobileClicked"
    >
        <span class="iconify" data-icon="bx:bx-search-alt-2"></span>
    </div>
    
    <NavSearchBar v-if="showSearchBar"/>
</template>

<script>
import NavSearchBar from './NavSearchBar.vue'

export default {
    name: "NavSearchBarMobile",
    components:{
        NavSearchBar
    },
    data(){
        return {
            showSearchBar: false
        };
    },
    methods:{
        NavSearchButtonMobileClicked(){
            let navFiller = document.querySelector('.navFiller');
            navFiller.classList.add('fillScreen');
            
        }
    },
    mounted(){
        let navFiller = document.querySelector('.navFiller');
        navFiller.addEventListener('animationend',function(){
            if(this.showSearchBar == true){
                //close the searchBar
            }
            else{
                //open the searchbar
                this.showSearchBar = true;
            }
        }.bind(this));
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .NavSearchButtonMobile{
        position: relative;
        svg{
            width: 46px;
            height: 46px;
        }
        z-index: 1;
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
            animation-direction: backwards;
        }

        z-index: 2;
    }

    .NavSearchBar{
        position: absolute;
        left: 0;
        top: 35%;

        width: 0%;
    }
</style>