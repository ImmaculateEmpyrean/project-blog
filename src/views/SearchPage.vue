<template>
    <div class="searchPage">
        <div class="buttonRack bodyText" id="buttonRack">
            <SelectTagsButton />
            <BlackListButton />
            <PublisherTagsButton />
            <SortByButton />
        </div>

        <div class="searchShowArea" id="searchShowArea">
            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>

            <div class="searchCardArea" id="searchCardArea">
                <SearchCard
                    :propShow   ="showSearchCard0"
                    :cardTitle  ="titleSearchCard0"
                    :imageLink  ="imageSearchCard0"
                    :tags       ="tagsSearchCard0"

                    @cardDisplayed="fixPageHeight"
                />

                <SearchCard
                    :propShow   ="showSearchCard1"
                    :cardTitle  ="titleSearchCard1"
                    :imageLink  ="imageSearchCard1"
                    :tags       ="tagsSearchCard1"

                    @cardDisplayed="fixPageHeight"
                />

                <SearchCard
                    :propShow   ="showSearchCard2"
                    :cardTitle  ="titleSearchCard2"
                    :imageLink  ="imageSearchCard2"
                    :tags       ="tagsSearchCard2"

                    @cardDisplayed="fixPageHeight"
                />

                <SearchCard
                    :propShow   ="showSearchCard3"
                    :cardTitle  ="titleSearchCard3"
                    :imageLink  ="imageSearchCard3"
                    :tags       ="tagsSearchCard3"

                    @cardDisplayed="fixPageHeight"
                />
            </div>

            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>
        </div>

    </div>
</template>

<script>
import {searchList} from '@/assets/json/searchList.js';
import FuzzySet from 'fuzzyset.js';
import {allImagesOnPageLoaded} from '../javascript/imageLoaderCore.js';

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
            list: [], //list of all the names inside that are to be displayed in the search area now with respect to all pages.

            tagsSearchCard0: ["Romance"],
            tagsSearchCard1: [],
            tagsSearchCard2: [],
            tagsSearchCard3: [],

            imageSearchCard0: searchList[Object.keys(searchList)[0]].img,
            imageSearchCard1: searchList[Object.keys(searchList)[1]].img,
            imageSearchCard2: searchList[Object.keys(searchList)[2]].img,
            imageSearchCard3: searchList[Object.keys(searchList)[3]].img,

            titleSearchCard0: Object.keys(searchList)[0],
            titleSearchCard1: Object.keys(searchList)[1],
            titleSearchCard2: Object.keys(searchList)[2],
            titleSearchCard3: Object.keys(searchList)[3],

            showSearchCard0: true,
            showSearchCard1: true,
            showSearchCard2: true,
            showSearchCard3: true,
        }
    },
    methods:{
        searchPageUpdated(page){
            this.currentPage = page;
            this.populateSearchCards();
        },
        createSearchListFromManifest(){
            let list = Object.keys(searchList);

            this.fuzzySearchList = FuzzySet(list); //create a fuzzy list from the array of names I have.
            this.list = list;
        },
        updatePagination(){
            let numberOfItems = this.list.length; 

            this.currentPage = 1;
            this.pageCount = parseInt(numberOfItems / 4);
            if(numberOfItems % 4 > 0){
                this.pageCount = this.pageCount + 1;
            }
                
        },
        populateSearchCards(){
            console.log('populating search cards')
            
            //turn on or off the fourth card
            let thirdIndex = (this.currentPage * 4) - 1;
            if(this.list.length - 1 < thirdIndex)
                this.showSearchCard3 = false;
            else {
                this.showSearchCard3 = true;

                this.imageSearchCard3 = searchList[this.list[thirdIndex]].img;
                this.titleSearchCard3 = this.list[thirdIndex];
            }
            
            //turn on or off the third card
            let secondIndex = (this.currentPage * 4) - 2;
            if(this.list.length - 1 < secondIndex)
                this.showSearchCard2 = false;
            else {
                this.showSearchCard2 = true;

                this.imageSearchCard2 = searchList[this.list[secondIndex]].img;
                this.titleSearchCard2 = this.list[secondIndex]
            }

            //turn on or off the second card
            let firstIndex = (this.currentPage * 4) - 3;
            if(this.list.length - 1 < firstIndex)
                this.showSearchCard1 = false;
            else {
                this.showSearchCard1 = true;

                this.imageSearchCard1 = searchList[this.list[firstIndex]].img;
                this.titleSearchCard1 = this.list[firstIndex]
            }

            //turn on or off the first card
            let zeroIndex = (this.currentPage * 4) - 4;
            if(this.list.length - 1 < zeroIndex)
                this.showSearchCard0 = false;
            else {
                this.showSearchCard0 = true;

                this.imageSearchCard0 = searchList[this.list[zeroIndex]].img;
                this.titleSearchCard0 = this.list[zeroIndex]
            }
        },
        hideSearchCards(){
            this.showSearchCard0 = false;
            this.showSearchCard1 = false;
            this.showSearchCard2 = false;
            this.showSearchCard3 = false;
        },


        setPageMaxHeight(){
            let buttonRack = this.$el.querySelector('#buttonRack');
            let buttonRackStyle = window.getComputedStyle(buttonRack);
            let buttonRackHeight = parseInt(buttonRackStyle.getPropertyValue('height'))

            let searchShowArea = this.$el.querySelector('#searchShowArea');
            
            let searchCardArea = this.$el.querySelector('#searchCardArea')
            let searchCardAreaStyle = window.getComputedStyle(searchCardArea);
            let searchCardAreaMarginHeight = parseInt(searchCardAreaStyle.getPropertyValue('margin-top')) + parseInt(searchCardAreaStyle.getPropertyValue('margin-bottom'));

            let searchShowAreaChildren = searchShowArea.childNodes;

            let showAreaHeight = 0;
            searchShowAreaChildren.forEach(function(element){
                showAreaHeight = showAreaHeight + element.offsetHeight;
                console.log(element.offsetHeight)
            })

            this.$el.style.maxHeight = `${showAreaHeight + buttonRackHeight + searchCardAreaMarginHeight}px`;
            console.log(searchCardAreaMarginHeight);
        },
        fixPageHeight(){
            allImagesOnPageLoaded(function(){
                console.log('setting height')
                this.setPageMaxHeight();
            }.bind(this))
        }
    },
    watch:{
        searchBarValue: {
            handler(valueElement){
                this.hideSearchCards();

                if(valueElement.searchBarValue === ''){
                    this.list = this.fuzzySearchList.values();
                    this.updatePagination();
                    this.populateSearchCards();
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
                    this.populateSearchCards();
                }
                else{
                    this.updatePagination();
                    this.noResultsFound = false;

                    this.populateSearchCards();
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

        //update pagination properly
        this.updatePagination();

        //get the search area elements from the browser dom
        this.searchAreaElements = document.querySelectorAll('#searchCardArea > *');

        this.populateSearchCards();


        //sandbox//
        allImagesOnPageLoaded(function(){
            this.setPageMaxHeight();
        }.bind(this))
        //sandbox//
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';
    
    .searchPage{
        transition: max-height ease-in-out 2s;
        overflow-y: hidden;
        height: 999999px;

        // min-height: 85vh;
        

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