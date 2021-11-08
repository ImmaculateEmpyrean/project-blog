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
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    nav{
        display: flex;
        position: sticky;

        justify-content: space-between;
        align-items: center;

        padding: 0 var(--spacing-large);

        min-height: 150px;
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