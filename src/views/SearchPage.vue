<template>
    <div class="searchPage">
        <div class="buttonRack bodyText">
            <SelectTagsButton />
            <BlackListButton />
            <PublisherTagsButton />
            <SortByButton />
        </div>
        <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>

        <div class="searchCardArea">
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>
            <SearchCard :imageLink="require('@/assets/img/utawarerumonoMaskOfTruth.jpg')"/>            
        </div>

        <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>
    </div>
</template>

<script>
import SelectTagsButton from '@/components/SearchPage/SelectTagsButton.vue';
import BlackListButton from '@/components/SearchPage/BlackListTagsButton.vue';
import PublisherTagsButton from '@/components/SearchPage/PublisherTagsButton.vue';
import SortByButton from '@/components/SearchPage/SortByButton.vue';

import Pagination from '@/components/Pagination.vue';
import SearchCard from '@/components/SearchCard.vue';


export default {
    name: "Search",
    components:{
        Pagination,
        SelectTagsButton,
        BlackListButton,
        PublisherTagsButton,
        SortByButton,

        SearchCard
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
    
    .card{
        border: 1px solid black;
        margin: 50px;

        width: 20%;
    }

    @include for-desktop-up{
        .searchPage{
            margin-top: var(--spacing-large);
            background-color: map-get($light,"light");
        }
    }

    .buttonRack{
        display: flex;
        justify-content: space-between;
        padding: var(--spacing-normal) var(--spacing-large);

        .n-button{
            flex: 1 1 100%;
        }
    }
    
    .searchCardArea{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        row-gap: var(--spacing-large);
        column-gap: var(--spacing-large);

        margin: var(--spacing-large) 0;
    }
</style>