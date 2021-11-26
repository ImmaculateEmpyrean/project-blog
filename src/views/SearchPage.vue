<template>
    <div class="searchPage">
        <div class="buttonRack">
            <SelectTagsButton />
            <BlackListButton />
            <PublisherTagsButton />
            <SortByButton />
        </div>
        <Pagination :pageCount="pageCount" @on-update:page="searchPageUpdated"/>
    </div>
</template>

<script>
import SelectTagsButton from '@/components/SearchPage/SelectTagsButton.vue';
import BlackListButton from '@/components/SearchPage/BlackListTagsButton.vue';
import PublisherTagsButton from '@/components/SearchPage/PublisherTagsButton.vue';
import SortByButton from '@/components/SearchPage/SortByButton.vue';

import Pagination from '@/components/Pagination.vue';


export default {
    name: "Search",
    components:{
        Pagination,
        SelectTagsButton,
        BlackListButton,
        PublisherTagsButton,
        SortByButton
    },
    data(){
        return{
            pageCount: 2,
            currentPage: 1
        }
    },
    methods:{
        searchPageUpdated(page){
            this.currentPage = page;
            console.log(`new page : ${page}`)
        }
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