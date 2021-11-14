<template>
    <div class="InnerBox">
        <h1 class="heading1">{{mainHeading}}</h1>
        <img :src="imagePath" :alt="`${postHeading} cover image`">
        <h2 class="subtitle">{{postHeading}}</h2>
        <p class="bodyText">{{postText}}</p>
        <div class="learnMoreBox">

            <div v-if="showButtons" class="leftArrow" id="leftArrowSmall" @click="leftArrowClicked">
                <svg width="28" height="48" viewBox="0 0 78 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2.01601 52.2585L75.8861 97.7792C76.0792 97.8991 76.3111 97.9736 76.5554 97.9942C76.7997 98.0147 77.0464 97.9805 77.2671 97.8955C77.4879 97.8104 77.6737 97.678 77.8034 97.5133C77.933 97.3487 78.0012 97.1585 78 96.9647V86.9711C78 86.3376 77.6231 85.73 77.0004 85.3421L18.0092 49.0005L77.0004 12.659C77.6395 12.2711 78 11.6635 78 11.03V1.03636C78 0.170166 76.7382 -0.308182 75.8861 0.221878L2.01601 45.7426C1.38816 46.129 0.880257 46.6233 0.530922 47.1878C0.18158 47.7523 0 48.3723 0 49.0005C0 49.6288 0.18158 50.2487 0.530922 50.8133C0.880257 51.3778 1.38816 51.8721 2.01601 52.2585Z" fill="#001021"/>
                </svg>
            </div>

            <router-link class="bodyText" :to="postLink">Learn More</router-link>

            <div v-if="showButtons" class="rightArrow" id="rightArrowSmall" @click="rightArrowClicked">
                <svg width="28" height="48" viewBox="0 0 78 98" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M75.984 45.7415L2.11387 0.220791C1.92084 0.100896 1.68887 0.0263863 1.44459 0.00581849C1.20031 -0.0147493 0.953627 0.0194589 0.732879 0.104515C0.512131 0.189571 0.326269 0.322026 0.196634 0.486666C0.0669989 0.651307 -0.00115053 0.841457 1.46958e-05 1.03528V11.0289C1.46958e-05 11.6624 0.376904 12.27 0.999589 12.6579L59.9908 48.9995L0.999589 85.341C0.360518 85.7289 1.46958e-05 86.3365 1.46958e-05 86.97V96.9636C1.46958e-05 97.8298 1.26177 98.3082 2.11387 97.7781L75.984 52.2574C76.6118 51.871 77.1197 51.3767 77.4691 50.8122C77.8184 50.2477 78 49.6277 78 48.9995C78 48.3712 77.8184 47.7513 77.4691 47.1867C77.1197 46.6222 76.6118 46.1279 75.984 45.7415Z" fill="#001021"/>
                </svg>
            </div>

        </div>
    </div>
</template>

<script>
import {isMobile} from '../../javascript/breakpoints.js';

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
    },
    data(){
        return{
            showButtons: false,
            isMobileConfiguration: false
        }
    },
    methods:{
        leftArrowClicked(){
            this.$emit('leftArrow:clicked');
        },
        rightArrowClicked(){
            this.$emit('rightArrow:clicked');
        },

        checkForMobileMode(){
            if(isMobile()){
                if(this.isMobileConfiguration === false)
                    this.setMobileConfiguration();
            } else {
                if(this.isMobileConfiguration === true)
                    this.unsetMobileConfiguration();
            }
        },
        setMobileConfiguration(){
            this.showButtons = true;
            this.isMobileConfiguration = true;
        },
        unsetMobileConfiguration(){
            this.showButtons = false;
            this.isMobileConfiguration = false;
        }
    },
    mounted(){
        this.checkForMobileMode();
        window.addEventListener("resize",this.checkForMobileMode.bind(this));
    },
    unmounted(){
        window.removeEventListener("resize",this.checkForMobileMode.bind(this));
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .InnerBox{
        flex: 1 1 100%;

        @include for-desktop-up{
            flex: 0 0 77.78%;
        }

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

        .learnMoreBox{
            display: flex;
            flex-direction: row;
            justify-content: space-between;
            align-items: center;

            @include for-tablet-portrait-up{
                justify-content: flex-end;
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
    }
</style>