<template>
    <div class="InnerBox">
        <h1 class="heading1">{{mainHeading}}</h1>
        <img :src="imagePath" :alt="`${postHeading} cover image`">
        <h2 class="subtitle">{{postHeading}}</h2>
        <p class="bodyText">{{postText}}</p>
        <router-link class="bodyText" :to="postLink">Learn More</router-link>
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
            default: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipiscing blandit amet eu ut erat adipiscing. Lacus, facilisis amet nec consectetur sapien, sed. Auctor urna et neque risus, vitae donec odio eros potenti. Malesuada scelerisque auctor imperdiet accumsan suspendisse id pulvinar volutpat. Orci pharetra duis mauris viverra. Augue semper fusce elementum, mattis diam. Et enim tortor sit habitasse nibh amet."
        },
        postLink:{
            type:String,
            default: "link"
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .InnerBox{
        flex: 0 0 77.78%;
        display: flex;
        flex-direction: column;
        margin: var(--spacing-large) 0;
        
        gap: var(--spacing-large);
        @include for-tablet-portrait-up{
            gap: var(--spacing-normal);
        }

        h1{
            text-align: center;
            @include for-tablet-portrait-up{
                text-align: left;
            }
        }

        img{ width: 100%; }
        h2{
            text-align: center;
        }

        p{
            text-align: center;
            @include for-tablet-portrait-up{
                text-align: left;
            }
        }

        a{
            margin-left: auto;
            margin-right: auto;
            @include for-tablet-portrait-up{
                margin-left: auto;
                margin-right: 0;
            }

            color: $accent;
        }
    }
</style>