<template>
    <div class="searchPage">
        <Pagination />
    </div>
</template>

<script>
import Pagination from '@/components/Pagination.vue';

export default {
    name: "Search",
    components:{
        Pagination
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';
    
    .searchPage{
        height: 100vh; //for testing purpose only
    }

    @include for-desktop-up{
        .searchPage{
            margin-top: var(--spacing-large);
            background-color: map-get($light,"light");
        }
    }
</style>