<template>
    <div class="searchPage">
        search page!
    </div>
</template>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';

    .searchPage{
        height: 100vh;
        margin-top: var(--spacing-large);
        background-color: map-get($light,"light");
    }
</style>