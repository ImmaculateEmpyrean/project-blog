<template>
    <div class="searchPage">
        <div class="buttonRack bodyText" id="buttonRack">
            <SelectTagsButton    @tags:changed="selectTagsChanged"/>
            <BlackListButton     @tags:changed="blackListTagsChanged"/>
            <PublisherTagsButton @tags:changed="publisherTagsChanged"/>
            <SortByButton @tags:changed="sortTagChanged"/>
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
            sortAscending: true
        }
    },
    watch:{
        searchBarValue: {
            handler(){
                this.searchAndUpdate();
            },
            deep: true,
            immediate: false
        },
    },
    methods:{
        selectTagsChanged(newSelectTags){
            this.selectTags = newSelectTags;
            this.searchAndUpdate();
        },
        blackListTagsChanged(newBlacklistTags){
            this.blackListTags = newBlacklistTags;
            this.searchAndUpdate();
        },
        publisherTagsChanged(newPublisherTags){
            this.selectPublisherTags = newPublisherTags;
            this.searchAndUpdate();
        },
        sortTagChanged(newSortTag){
            this.sortAscending = newSortTag
            console.log('reee')
            this.searchAndUpdate();
        },

        searchAndUpdate(){
            let list = [];
            let {searchBarValue} = this.searchBarValue;

            //populate the list
            if(searchBarValue === '')
                list = this.titleNameList.values();
            else{
                list = this.titleNameList.get(searchBarValue,[],0.01);
                list = list.map(function(element){
                    return element[1];
                })
            }

            //include only selected tags in the final result..
            list = list.filter(function(element){
                let elementTags = searchList[element].tags
                let inclusionFlag = false;

                for(let i=0;i<elementTags.length;i++){
                    for(let j=0; j < this.selectTags.length; j++)
                    if(elementTags[i] === this.selectTags[j]){
                        inclusionFlag = true;
                        break;
                    }
                }

                return inclusionFlag;
            }.bind(this))

            //exclude blacklist tags in the final result
            list = list.filter(function(element){
                let elementTags = searchList[element].tags
                let inclusionFlag = true;

                for(let i=0;i<elementTags.length;i++){
                    for(let j=0; j < this.blackListTags.length; j++)
                    if(elementTags[i] === this.blackListTags[j]){
                        inclusionFlag = false;
                        break;
                    }
                }

                return inclusionFlag;
            }.bind(this))

            //select by publishers in the curated result
            list = list.filter(function(element){
                let devloperTags = searchList[element].developer;
                let inclusionFlag = false;

                for(let i=0;i<devloperTags.length;i++){
                    for(let j=0; j < this.selectPublisherTags.length; j++)
                    if(devloperTags[i] === this.selectPublisherTags[j]){
                        inclusionFlag = true;
                        break;
                    }
                }

                return inclusionFlag;
            }.bind(this))

            console.log(list)
            //sort by ascending or descending order
            if(this.sortAscending === true)
                list.sort(Intl.Collator().compare);
            else {
                console.log('descending sort')
                list.sort(Intl.Collator().compare)
                list.reverse();
            }
            console.log(list)

            this.pageCount = Math.ceil(list.length / 4);
            if(this.currentPage > this.pageCount)
                this.currentPage = 1;

            this.updateSearchCardArea(list);
        },
        updateSearchCardArea(list){
            let currentPage = this.currentPage;
            for(let i = 0 ;i< 4;i++)
                this.showSearchCard[i] = false;

            let counter = 0;
            for(let i = (currentPage - 1) * 4; i < list.length; i++){
                let element = searchList[list[i]];

                this.searchCardTitle[counter] = list[i];
                this.searchCardImage[counter] = element.img;
                this.searchCardTags[counter] = element.tags;

                this.showSearchCard[counter] = true;

                counter++;
                if(counter === 4)
                    break;
            }
        },



        searchPageUpdated(newPage){
            this.currentPage = newPage;
            this.searchAndUpdate();
        }
    },
    mounted(){
       let searchCardArea = document.getElementById('searchCardArea');
       searchCardArea.style.height = "0px";

       let searchCards = this.$el.querySelectorAll('.searchCard');
       searchCards.forEach(function(card){
           card.addEventListener('animationend',function(){
               searchCardArea.style.height = `${searchCardArea.scrollHeight}px`;
           })
       })

       this.searchAndUpdate();
    },
    inject:["searchBarValue"]
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';
    
    .searchPage{
        transition: height ease-in-out 2s;
        overflow-y: hidden;
        
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
        transition: height 2s ease-in-out;
        overflow-y: hidden;

        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;

        row-gap: var(--spacing-large);
        column-gap: var(--spacing-large);

        margin: var(--spacing-large) ;

        background-color: white;
    }
</style>