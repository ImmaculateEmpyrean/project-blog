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

                <SearchCard :imageLink="require('@/assets/img/koiChoco.jpg')" ref="koiToSenkyoToChocolate" >
                    <template #tagBox>
                        <Tag :tagName="Romance" />
                    </template>
                </SearchCard>

                <SearchCard :imageLink="require('@/assets/img/whiteAlbum2.jpg')" ref="whiteAlbum2"/>
                <SearchCard :imageLink="require('@/assets/img/EfATaleOfTwo.jpg')" ref="efATaleOfTwo"/>
                <SearchCard :imageLink="require('@/assets/img/phenomeno.jpg')" ref="phenomeno"/>
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
import Tag from '../components/SearchPage/Tag.vue';

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

        SearchCard,
        Tag
    },
    data(){
        return{
            pageCount: 2,
            currentPage: 1,
            noResultsFound: false,
            
            searchAreaElements: null,
            fuzzySearchList: []
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
        }
    },
    watch:{
        searchBarValue: {
            handler(valueElement){
                if(valueElement.searchBarValue === ''){
                    list = this.fuzzySearchList.values();
                    console.log(list);
                    return;
                }

                //the 0.05 is the minimum similarity required for a match.. I dunno the exact maths but 0.01 seems to work?.
                let list = this.fuzzySearchList.get(valueElement.searchBarValue,[],0.01);
                list = list.map(function(element){
                    return element[1]
                })
                
                if(list.length === 0){
                    this.currentPage = 0;
                    this.pageCount = 0;

                    this.noResultsFound = true;

                    console.log('no results found')
                }
                else{
                    this.currentPage = 1;
                    this.pageCount = parseInt(list.length / 4);
                    if(list.length % 4 > 0)
                        this.pageCount = this.pageCount + 1;
                    
                    this.noResultsFound = false;

                    console.log(list);
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