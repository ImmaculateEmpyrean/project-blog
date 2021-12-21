<template>
    <div class="RecommendationsWidget">
        <h1 class="heading1 smaller-size recWidgetMainHeading">recommended</h1>
        <Cartagra />
        <Clannad />
        <Crescendo />
        <Ef />
        <KaraNoShojo2 />
        <WhiteAlbum2 />
    </div>
</template>

<script>
import Cartagra from './finishedWidgets/Cartagra.vue'
import Clannad from './finishedWidgets/Clannad.vue';
import Crescendo from './finishedWidgets/Crescendo.vue';
import Ef from './finishedWidgets/EfATaleOfTwo.vue';
import KaraNoShojo2 from './finishedWidgets/KaraNoShojo2.vue';
import WhiteAlbum2 from './finishedWidgets/WhiteAlbum2.vue';

export default {
    name: "RecommendationsWidget",
    components:{
        Cartagra,
        Clannad,
        Crescendo,
        Ef,
        KaraNoShojo2,
        WhiteAlbum2
    }
}
</script>

<style lang="scss" scoped>
    @use '@/assets/scss/setting' as *;

    .RecommendationsWidget{
        margin: var(--spacing-large) 0;
        align-self: stretch;

        display: flex;
        flex-direction: row;
        overflow-x: auto;
        gap: var(--spacing-large);
        @include for-desktop-up{
            flex-direction: column;
            overflow-x: hidden;

            justify-content: space-between;
        }
        

        .recWidgetMainHeading{
            display: none;
            @include for-desktop-up{
                display: block;
                text-align: center;
                margin-bottom: var(--spacing-normal);
            }
        }
    }
</style>