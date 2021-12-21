<template>
<InnerBox   :imgSource="require('@/assets/img/EfATaleOfTwo.jpg')"
            title="Ef A Tale Of Two"
            postLink="Ef Link PlaceHolder"/>    
</template>

<script>
import InnerBox from '../InnerBox.vue';

export default {
    name: "EfRecommendationWidget",
    components:{
        InnerBox
    }
}
</script>