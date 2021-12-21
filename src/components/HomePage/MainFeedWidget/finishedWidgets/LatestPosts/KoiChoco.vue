<template>
    <Widget
        mainHeading="Latest Posts" 
        :imagePath="require('@/assets/img/koiChoco.jpg')"
        postHeading="Koi Choco" 
        postText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus adipiscing blandit amet eu ut erat adipiscing. Lacus, facilisis amet nec consectetur sapien, sed. Auctor urna et neque risus, vitae donec odio eros potenti. Malesuada scelerisque auctor imperdiet accumsan suspendisse id pulvinar volutpat. Orci pharetra duis mauris viverra. Augue semper fusce elementum, mattis diam. Et enim tortor sit habitasse nibh amet." 
        postLink="postLink"
    />
</template>

<script>
import Widget from '@/components/HomePage/MainFeedWidget/Widget.vue';

export default {
    name: "KoiChoco_Latest_MainFeed",
    components:{
        Widget
    }
}
</script>