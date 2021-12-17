<template>
    <div class="searchPage">
        <div class="buttonRack bodyText" id="buttonRack">
            <SelectTagsButton    @tags:changed="selectTagsChanged"/>
            <BlackListButton     @tags:changed="blackListTagsChanged"/>
            <PublisherTagsButton @tags:changed="publisherTagsChanged"/>
            <SortByButton @tag:changed="sortTagChanged"/>
        </div>

        <div class="searchShowArea" id="searchShowArea">
            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>

            <div class="searchCardArea" id="searchCardArea">
                <SearchCard
                    v-for="n in 4" :key="`${n-1}SearchCard`"

                    :propShow   ="showSearchCard[n-1]"
                    :cardTitle  ="searchCardTitle[n-1]"
                    :imageLink  ="searchCardImage[n-1]"
                    :tags       ="searchCardTags[n-1]"
                />
            </div>

            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>
        </div>

    </div>
</template>

<script>
import {searchList, generatePublisherList} from '@/assets/json/searchList.js';
import FuzzySet from 'fuzzyset.js';
import {tagColors}  from '@/assets/json/tagColors.js';

import Pagination from '@/components/Pagination.vue';
import SearchCard from '@/components/SearchCard.vue';

import SelectTagsButton from '@/components/SearchPage/SelectTagsButton.vue';
import BlackListButton from '@/components/SearchPage/BlackListTagsButton.vue';
import PublisherTagsButton from '@/components/SearchPage/PublisherTagsButton.vue';
import SortByButton from '@/components/SearchPage/SortByButton.vue';

export default {
    name: "SearchPage",
    components:{
        Pagination,
        SearchCard,

        SelectTagsButton,
        BlackListButton,
        PublisherTagsButton,
        SortByButton
    },
    data(){
        return{
            pageCount: 2,
            currentPage: 1,

            titleNameList: FuzzySet(Object.keys(searchList)),

            showSearchCard: [false,false,false,false],
            searchCardTitle: ["noTitle","noTitle","noTitle","noTitle"],
            searchCardImage: [require('@/assets/img/noImage.png'),require('@/assets/img/noImage.png'),require('@/assets/img/noImage.png'),require('@/assets/img/noImage.png')],
            searchCardTags: [[],[],[],[]],

            selectTags: Object.keys(tagColors),
            blackListTags: [],
            selectPublisherTags: generatePublisherList(),
            sortTag: true
        }
    },
    watch:{
        searchBarValue: {
            handler(valueElement){
                let newSearchValue = valueElement.searchBarValue;
                console.log(newSearchValue);
            },
            deep: true,
            immediate: false
        },
    },
    methods:{
        selectTagsChanged(newSelectTags){
            console.log('new select tags')
            this.selectTags = newSelectTags;
            console.log(this.selectTags)
            this.search();
        },
        blackListTagsChanged(newBlacklistTags){
            this.blackListTags = newBlacklistTags;
            this.search();
        },
        publisherTagsChanged(newPublisherTags){
            this.selectPublisherTags = newPublisherTags;
            this.search();
        },
        sortTagChanged(newSortTag){
            this.sortTag = newSortTag
            this.search();
        },

        search(){
            console.log('search function called')
        },

        searchPageUpdated(newPage){
            this.currentPage = newPage;
        }
    },
    inject:["searchBarValue"]
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';
    
    .searchPage{
        transition: max-height ease-in-out 2s;
        overflow-y: hidden;
        height: 999999px;

        min-height: 85vh;
        

        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .searchShowArea{
            flex: 1 1 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
        }
    }

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

        margin: var(--spacing-large) ;

        background-color: white;
    }
</style>