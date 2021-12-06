<template>
    <transition enter-active-class="animate__animated animate__zoomIn" leave-active-class="animate__animated animate__zoomOut">
        <n-card hoverable title="Card with Cover" v-show="show">
            <template #cover>
                <img :src="imageLink" />
            </template>
            
            <template #header>
                <h1 class="subtitle smaller-size">{{cardTitle}}</h1>
                <div class="tagWrapper">
                    <!-- <slot name="tagBox"></slot> -->
                </div>
            </template>
            
            <!-- <p class="bodyText" v-show="!isMobileConfiguration()">
                {{cardContent}}
            </p> -->
        </n-card>
    </transition>
</template>

<script>
import {NCard} from 'naive-ui';
import {isMobile} from '../javascript/breakpoints.js'
import {tagColors} from '@/javascript/tagColors';

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
        // cardContent:{
        //     type: String,
        //     default: "There Is No Content In This Card To Bother About"
        // },
        tags:{
            default: []
        }
    },
    data(){
        return {
            show: true
        }
    },
    methods: {
        isMobileConfiguration(){
            return isMobile();
        },
        mountTags(){
            let tagWrapper = this.$el.querySelector('.tagWrapper');
        
            this.tags.forEach(function(tagName){
                let tag = document.createElement("div");
                tag.classList.add("searchCardTag");
                tag.innerHTML = `<h3 class="bodyText text-smaller">${tagName}</h3>`

                tag.style.borderColor = tagColors[tagName].textColor;
                tag.style.backgroundColor = tagColors[tagName].color;
                
                let innerTextNode = tag.querySelector('h3');
                innerTextNode.style.color = tagColors[tagName].textColor;

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
        }
    },
    mounted(){
        this.mountTags();
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;

    .n-card {
        flex: 1 1 40%;
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
        border: 1px solid;
        border-radius: 5%;
    }
</style>