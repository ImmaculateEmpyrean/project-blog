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
    .n-card{
        flex: 1 1 33%;
        max-width: 256px;

        cursor: pointer;
    }
</style>