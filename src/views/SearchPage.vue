<template>
    <div class="searchPage">
        <FilterButtonHolder />
        <Pagination />
    </div>
</template>

<script>
import FilterButtonHolder from '@/components/FilterButtons/FilterButtonHolder.vue';
import Pagination from '@/components/Pagination.vue';

export default {
    name: "Search",
    components:{
        Pagination,
        FilterButtonHolder
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