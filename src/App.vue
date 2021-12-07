<template>
    <n-config-provider :theme-overrides="blogTheme">
        <NavBar @searchBar:update="searchBarUpdated"/>
        <div class="constrainer">

            <router-view v-slot="{Component}">
                <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                    <component :is="Component" ref="pageInView"/>
                </transition>
            </router-view>
            
        </div>
        <FooterComponent />
    </n-config-provider>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';

import { NConfigProvider } from 'naive-ui';
import {getBlogTheme} from '@/javascript/blogTheme/blogTheme.js'

export default {
    name: "App",
    components:{
        NavBar,
        FooterComponent,
        NConfigProvider,
    },
    data(){
        return{
            blogTheme: null,
            reactiveSearchBarValue:{
                searchBarValue: ''
            }
        }
    },
    methods: {
        setBlogTheme(){
            this.blogTheme = getBlogTheme();
            console.log('set blog theme')
        },

        searchBarUpdated(payload){
            this.reactiveSearchBarValue.searchBarValue = payload;
        }
    },
    mounted(){
        this.setBlogTheme();
        window.addEventListener("resize",this.setBlogTheme.bind(this));
    },
    unmounted(){
        window.removeEventListener("resize",this.setBlogTheme.bind(this));
    },
    provide(){
        return{
            searchBarValue: this.reactiveSearchBarValue
        }
    }
}
</script>

<style lang="scss">
    @use './assets/scss/setting' as *;
    @import './assets/scss/constrainer.scss';
</style>