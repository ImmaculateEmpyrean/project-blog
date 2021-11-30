<template>
    <n-card hoverable title="Card with Cover">
        <template #cover>
            <img :src="imageLink" />
        </template>
        
        <template #header>
            <h1 class="subtitle smaller-size">{{cardTitle}}</h1>
            <div class="tagWrapper">
                <slot name="tagBox"></slot>
            </div>
        </template>
        
        <p class="bodyText">
            {{cardContent}}
        </p>
    </n-card>
</template>

<script>
import {NCard} from 'naive-ui';

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
            type:String,
            default: "There Is No Content In This Card To Bother About"
        },
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