<template>
    <div class="innerBoxRecommendationsWidget">
        <img :src="imgSource" :alt="`${title} image`">
        <h2 class="subtitle smaller-size" :to="postLink">{{title}}</h2>
    </div>
</template>

<script>
export default {
    name: "recommendationsWidgetInnerBox",
    props:{
        imgSource:{
            type:String,
            default: require('@/assets/img/noImage.png')
        },
        title:{
            type:String,
            default: "no Title"
        },
        postLink:{
            type:String,
            default: "noLink"
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .innerBoxRecommendationsWidget{
        flex: 0 0 45%;
        @include for-desktop-up{
            flex: 1 1 100%;
        }

        display: flex;
        flex-direction: column;
        gap: var(--spacing-normal);
        cursor: pointer;

        img{
            width: 100%;
        }

        h2{
            transition: 0.5s color ease-in-out;
            text-align: center;
        }
        &:hover{
            h2{
                color: $accent;
            }    
        }
    }
</style>