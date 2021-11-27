<template>
    <n-card hoverable title="Card with Cover">
        <template #cover>
        <img :src="imageLink" />
        </template>
        Card Content
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
        flex: 1 1 33%;
        max-width: 115px;

        @include for-tablet-portrait-up{
            max-width: 200px;
        }

        @include for-desktop-up {
            max-width: 256px;
            cursor: pointer;
        }
    }
</style>