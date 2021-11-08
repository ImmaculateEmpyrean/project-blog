<template>
    <nav id="NavBar">
        <router-link to="/" class="brandLogo">VN-Blog</router-link>
        <NavSearchBar />
    </nav>
</template>

<script>
import NavSearchBar from './NavSearchBar.vue'; 

export default {
    name: "NavBar",
    components:{
        NavSearchBar
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
        font-family: Permanent Marker, cursive;
        font-style: normal;
        font-weight: normal;
        font-size: var(--font-larger);
        line-height: 58px;

        color: map-get($dark,"dark");
    }
</style>