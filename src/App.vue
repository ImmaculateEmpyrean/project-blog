<template>
    <n-config-provider :theme-overrides="blogTheme">
        <NavBar/>
        <div class="constrainer">
            <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
                <router-view></router-view>
            </transition>
        </div>
        <FooterComponent />
    </n-config-provider>
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';

import { NConfigProvider } from 'naive-ui';
import {blogTheme} from '@/javascript/blogTheme/blogTheme.js'

export default {
    name: "App",
    components:{
        NavBar,
        FooterComponent,
        NConfigProvider,
    },
    data(){
        return{
            blogTheme
        }
    }
}
</script>

<style lang="scss">
    @use './assets/scss/setting' as *;
    @import './assets/scss/constrainer.scss';
</style>