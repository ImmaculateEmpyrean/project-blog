<template>
    <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
        <n-card hoverable title="Card with Cover" v-if="show">
            <template #cover>
                <img :src="imageLink" />
            </template>
            
            <template #header>
                <h1 class="subtitle smaller-size">{{cardTitle}}</h1>
                <div class="tagWrapper">
                    <slot name="tagBox"></slot>
                </div>
            </template>
            
            <p class="bodyText" v-show="!isMobileConfiguration()">
                {{cardContent}}
            </p>
        </n-card>
    </transition>
</template>

<script>
import {NCard} from 'naive-ui';
import {isMobile} from '../javascript/breakpoints.js'

export default {
    name: "SearchCard",
    components:{
        NCard
    },
    props:{
        imageLink:{
            type: String,
            default: require('@/assets/img/noImage.png')
        },
        cardTitle:{
            type: String,
            default: "NoTitle"
        },
        cardContent:{
            type: String,
            default: "There Is No Content In This Card To Bother About"
        },
        cardPublisher:{
            type: String,
            default: null
        },
    },
    data(){
        return {
            show: false,
            cardOrderNumber: -1
        }
    },
    methods: {
        isMobileConfiguration(){
            return isMobile();
        },

        showCard(){
            this.show = true;
        },
        hideCard(){
            this.show = false;
        },
        setCardOrderNumber(cardOrderNumber){
            this.cardOrderNumber = cardOrderNumber
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;

    .n-card {
        flex: 1 1 40%;
        text-align: center;
        cursor: pointer;
    }

    .tagWrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: var(--spacing-normal);
    }
</style>