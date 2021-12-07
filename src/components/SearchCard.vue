<template>
    <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut"
    @after-leave="cardHiddenSuccessfully"
    @after-enter="cardDisplayedSuccessfully">

        <n-card hoverable title="Card with Cover" v-show="show & propShow">
            <template #cover>
                <img :src="imageLinkData" />
            </template>
            
            <template #header>
                <h1 class="subtitle smaller-size">{{cardTitleData}}</h1>
                <div class="tagWrapper">
                </div>
            </template>
        </n-card>

    </transition>
</template>

<script>
import {NCard} from 'naive-ui';
import {isMobile} from '../javascript/breakpoints.js'
import {tagColors} from '@/assets/json/tagColors';

import Timer from "easytimer.js";

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
        tags:{
            default: []
        },
        propShow:{
            type: Boolean,
            default: true
        }
    },
    data(){
        return {
            show: true,
            updateInformationTimer: null,

            cardTitleData: "NoTitle",
            imageLinkData: require('@/assets/img/noImage.png'),
        }
    },
    methods: {
        isMobileConfiguration(){
            return isMobile();
        },
        mountTags(){
            let tagWrapper = this.$el.querySelector('.tagWrapper');
            tagWrapper.innerHTML = "";
        
            this.tags.forEach(function(tagName){
                let tag = document.createElement("div");
                tag.classList.add("searchCardTag");
                tag.innerHTML = `<h3 class="bodyText text-smaller">${tagName}</h3>`

                tag.style.backgroundColor = tagColors[tagName];
                
                let innerTextNode = tag.querySelector('h3');
                innerTextNode.style.color = "#FFF";

                tagWrapper.appendChild(tag);
            });
        },

        showCard(){
            this.show = true;
        },
        hideCard(){
            this.show = false;
        },
        toggleShow(){
            this.show = !this.show;
        },

        updateCard(){
            this.cardTitleData = this.cardTitle;
            this.imageLinkData = this.imageLink;
            this.mountTags();
        },

        cardHiddenSuccessfully(){
            this.updateCard();
            this.showCard();
        },
        cardDisplayedSuccessfully(){
            this.updateInformationTimer.reset();
            this.updateInformationTimer.start();

            console.log('emiting card displayed')
            this.$emit('cardDisplayed');
        }
    },
    mounted(){
        this.updateCard();

        //initialize the timer..
        this.updateInformationTimer = new Timer({precision: 'secondTenths'});
        this.updateInformationTimer.start();

        this.updateInformationTimer.addEventListener("secondTenthsUpdated", function () {
            if(this.updateInformationTimer.getTimeValues().secondTenths > 5){
                if(this.cardTitleData !== this.cardTitle){
                    this.hideCard();
                    this.updateInformationTimer.stop();
                }
                this.updateInformationTimer.reset();
            }
        }.bind(this));
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;

    .n-card {
        flex: 1 1 100%;
        @include for-tablet-portrait-up{
            flex: 1 1 40%;
        }
        
        text-align: center;
        cursor: pointer;

        background-color: map-get($light, "light");
        margin: var(--spacing-normal);
    }

    .tagWrapper{
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: var(--spacing-normal);
    }
</style>

<style lang="scss">
    .searchCardTag{
        padding: var(--spacing-small);
        border-radius: 5%;
    }
</style>