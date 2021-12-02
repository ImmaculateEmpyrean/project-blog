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
                <SearchCard :imageLink="require('@/assets/img/cartagra.jpg')" ref="cartagra"/>
                <SearchCard :imageLink="require('@/assets/img/clannad.png')" ref="clannad"/>
                <SearchCard :imageLink="require('@/assets/img/crescendo.png')" ref="crescendo"/>
                <SearchCard :imageLink="require('@/assets/img/karaNoShojo2.jpg')" ref="karaNoShojoEpisode2"/>

            </div>

            <Pagination :page="currentPage" :pageCount="pageCount" @on-update:page="searchPageUpdated"/>
        </div>

    </div>
</template>

<script>
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
            
            searchAreaElements: null
        }
    },
    methods:{
        searchPageUpdated(page){
            this.currentPage = page;
            console.log(`new page : ${page}`)
        }
    },
    watch:{
        searchBarValue: {
            handler(newValue){
                console.log(`new value updated : ${newValue.searchBarValue} `);
            },
            deep: true,
        }
    },
    inject:["searchBarValue"],
    mounted(){
        // console.log(this.searchBarValue);
        // let value = Object.values(this.$refs)
        
        // this.searchAreaElements = value.map(function(val){
        //     if(val.$el.parentElement === this.$el.querySelector('.searchCardArea'))
        //         return val.$el;
        // }.bind(this));

        // console.log('printing search Area Elements');
        // console.log(this.searchAreaElements);

        //this.searchAreaElements = document.querySelectorAll('#searchCardArea > *');
        console.log(this.searchAreaElements);
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
    }
</style>