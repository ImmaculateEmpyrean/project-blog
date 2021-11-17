<template>
<InnerBox   :imgSource="require('@/assets/img/cartagra.jpg')"
            title="Cartagra"
            postLink="Cartagra Link PlaceHolder"/>    
</template>

<script>
import InnerBox from '../InnerBox.vue';

export default {
    name: "CartagraRecommendationWidget",
    components:{
        InnerBox
    }
}
</script>