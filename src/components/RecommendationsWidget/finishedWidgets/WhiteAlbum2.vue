<template>
<InnerBox   :imgSource="require('@/assets/img/whiteAlbum2.jpg')"
            title="White Album 2"
            postLink="White Album 2 Link PlaceHolder"/>    
</template>

<script>
import InnerBox from '../InnerBox.vue';

export default {
    name: "CrescendoRecommendationWidget",
    components:{
        InnerBox
    }
}
</script>