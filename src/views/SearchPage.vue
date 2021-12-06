<template>
    <div class="searchPage">
        <div class="buttonRack bodyText">
            <SelectTagsButton />
            <BlackListButton />
            <PublisherTagsButton />
            <SortByButton />
        </div>

        <div class="searchShowArea">
            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>

            <div class="searchCardArea" id="searchCardArea">
                <SearchCard :imageLink="imageSearchCard0" :tags="tagsSearchCard0" :cardTitle="titleCard0" ref="searchCard0"/>
                <SearchCard :imageLink="imageSearchCard1" :tags="tagsSearchCard1" :cardTitle="titleCard1" ref="searchCard1"/>
                <SearchCard :imageLink="imageSearchCard2" :tags="tagsSearchCard2" :cardTitle="titleCard2" ref="searchCard2"/>
                <SearchCard :imageLink="imageSearchCard3" :tags="tagsSearchCard3" :cardTitle="titleCard3" ref="searchCard3"/>
            </div>

            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>
        </div>

    </div>
</template>

<script>
import {searchList} from '@/assets/json/searchList.js';
import FuzzySet from 'fuzzyset.js';

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
            currentPage: 1,
            noResultsFound: false,
            
            searchAreaElements: null,
            fuzzySearchList: [],
            list: [], //list of all the names inside that are to be displayed in the search area now with respect to all pages..  

            tagsSearchCard0: [],
            tagsSearchCard1: [],
            tagsSearchCard2: [],
            tagsSearchCard3: [],

            imageSearchCard0: require('@/assets/img/noImage.png'),
            imageSearchCard1: require('@/assets/img/noImage.png'),
            imageSearchCard2: require('@/assets/img/noImage.png'),
            imageSearchCard3: require('@/assets/img/noImage.png'),

            titleCard0: "title card 0",
            titleCard1: "title card 1",
            titleCard2: "title card 2",
            titleCard3: "title card 3",
        }
    },
    methods:{
        searchPageUpdated(page){
            this.currentPage = page;
            console.log(`new page : ${page}`)
        },
        createSearchListFromManifest(){
            let list = Object.keys(searchList);
            this.fuzzySearchList = FuzzySet(list); //create a fuzzy list from the array of names I have.
        },
        updatePagination(numberOfItems){
            this.currentPage = 1;
            this.pageCount = parseInt(numberOfItems / 4);
            if(numberOfItems % 4 > 0)
                this.pageCount = this.pageCount + 1;
        },
        populateSearchCards(){
            // let endIndex = this.pageNumber * 4;
            
            // let fourthItem  = this.list[endIndex - 1];
            // let thirdItem   = this.list[endIndex - 2];
            // let secondItem  = this.list[endIndex - 3];
            // let firstItem   = this.list[endIndex - 4];


        },
        hideSearchCards(){
            this.$refs.searchCard0.hideCard();
            this.$refs.searchCard1.hideCard();
            this.$refs.searchCard2.hideCard();
            this.$refs.searchCard3.hideCard();
        }
    },
    watch:{
        searchBarValue: {
            handler(valueElement){
                this.hideSearchCards();

                if(valueElement.searchBarValue === ''){
                    this.list = this.fuzzySearchList.values();
                    this.updatePagination(this.list.length);
                    console.log(this.list);
                    return;
                }

                //the 0.05 is the minimum similarity required for a match.. I dunno the exact maths but 0.01 seems to work?.
                this.list = this.fuzzySearchList.get(valueElement.searchBarValue,[],0.01);
                this.list = this.list.map(function(element){
                    return element[1]
                })
                
                if(this.list.length === 0){
                    this.currentPage = 1;
                    this.pageCount = 1;

                    this.noResultsFound = true;

                    console.log('no results found')
                }
                else{
                    this.updatePagination(this.list.length);
                    this.noResultsFound = false;

                    console.log(this.list);
                }
            },
            deep: true,
            immediate: false
        }
    },
    inject:["searchBarValue"],
    mounted(){
        //create the search list from the manifest in posession
        this.createSearchListFromManifest();

        //get the search area elements from the browser dom
        this.searchAreaElements = document.querySelectorAll('#searchCardArea > *');
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';
    
    .searchPage{
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