<template>
<InnerBox   :imgSource="require('@/assets/img/karaNoShojo2.jpg')"
            title="Kara No Shojo Episode 2"
            postLink="Kara No Shojo Episode 2 Link PlaceHolder"/>    
</template>

<script>
import InnerBox from '../InnerBox.vue';

export default {
    name: "KaraNoShojo2RecommendationWidget",
    components:{
        InnerBox
    }
}
</script>