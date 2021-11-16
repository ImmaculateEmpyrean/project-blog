<template>
    <div class="RecommendationsWidget">
        <h1 class="heading1 smaller-size recWidgetMainHeading">recommended</h1>
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
        <InnerBox />
    </div>
</template>

<script>
import InnerBox from './InnerBox.vue';

export default {
    name: "RecommendationsWidget",
    components:{
        InnerBox
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

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