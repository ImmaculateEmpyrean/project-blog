<template>
  <NavBar/>
  <div class="constrainer">
      <router-view/>
  </div>
</template>

<script>
import NavBar from './components/NavBar/NavBar.vue';

export default {
    name: "App",
    components:{
        NavBar
    }
}
</script>

<style lang="scss">
    @use './assets/scss/setting' as *;

    .constrainer{
        max-width: 1200px;
        margin: 0 auto;
    }
</style>