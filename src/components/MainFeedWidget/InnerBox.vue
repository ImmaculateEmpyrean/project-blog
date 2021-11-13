<template>
    <div class="InnerBox">
        <h1>{{mainHeading}}</h1>
        <img :src="imagePath" :alt="`${postHeading} cover image`">
        <h2>{{postHeading}}</h2>
        <p>{{postText}}</p>
        <router-link :to="postLink"></router-link>
    </div>
</template>

<script>
export default {
    name: "InnerBox",
    props:{
        mainHeading:{
            type: String,
            default: "No Heading Set"
        },
        imagePath:{
            type: String,
            default: require('@/assets/img/noImage.png')
        },

        postHeading:{
            type:String,
            default: "Visual Novel Name"
        },
        postText:{
            type:String,
            default: "pata"
        },
        postLink:{
            type:String,
            default: "lnk"
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .InnerBox{
        flex: 0 0 77.78%;
        img{ width: 100%; }
    }
</style>