<template>
  <NavBar/>
  <div class="constrainer">
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <router-view></router-view>
      </transition>
  </div>
  <FooterComponent />
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import FooterComponent from '@/components/Footer/FooterComponent.vue';

export default {
    name: "App",
    components:{
        NavBar,
        FooterComponent
    }
}
</script>

<style lang="scss">
    @use './assets/scss/setting' as *;
    @import './assets/scss/constrainer.scss';
</style>