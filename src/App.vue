<template>
  <NavBar/>
  <div class="constrainer">
      <transition enter-active-class="animate__animated animate__fadeIn" leave-active-class="animate__animated animate__fadeOut">
        <router-view></router-view>
      </transition>
  </div>
  <Footer />
</template>

<script>
import NavBar from '@/components/NavBar/NavBar.vue';
import Footer from '@/components/Footer/Footer.vue';

export default {
    name: "App",
    components:{
        NavBar,
        Footer
    }
}
</script>

<style lang="scss">
    @use './assets/scss/setting' as *;
    @import './assets/scss/constrainer.scss';
</style>