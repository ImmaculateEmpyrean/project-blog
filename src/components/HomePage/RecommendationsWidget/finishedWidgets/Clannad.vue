<template>
<InnerBox   :imgSource="require('@/assets/img/clannad.png')"
            title="Clannad"
            postLink="Clannad Link PlaceHolder"/>    
</template>

<script>
import InnerBox from '../InnerBox.vue';

export default {
    name: "ClannadRecommendationWidget",
    components:{
        InnerBox
    }
}
</script>