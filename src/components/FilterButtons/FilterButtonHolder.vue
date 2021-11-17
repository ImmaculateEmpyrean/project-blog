<template>
    <div class="button-holder">
        <FilterButton />
        <FilterButton />
        <FilterButton />
        <FilterButton />
    </div>
</template>

<script>
import FilterButton from './Button.vue';

export default {
    name: "FilterButtonHolder",
    components:{
        FilterButton
    }
}
</script>

<style lang="scss" scoped>
    .button-holder{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
</style>