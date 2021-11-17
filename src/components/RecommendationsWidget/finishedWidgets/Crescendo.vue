<template>
<InnerBox   :imgSource="require('@/assets/img/crescendo.png')"
            title="Crescendo"
            postLink="Crescendo Link PlaceHolder"/>    
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