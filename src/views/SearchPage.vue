<template>
    <div class="searchPage">
        <n-pagination :page-count="pageCount">
            <template #prev>Go To Next Page</template>
            <template #next>Go To Previous Page</template>
        </n-pagination>
    </div>
</template>

<script>
import {NPagination} from 'naive-ui';

export default {
    name: "Search",
    components:{
        NPagination,
    },
    data(){
        return{
            pageCount: 2,
            
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;
    @import '../assets/scss/columns.scss';
    
    .searchPage{
        height: 100vh; //for testing purpose only
    }

    @include for-desktop-up{
        .searchPage{
            margin-top: var(--spacing-large);
            background-color: map-get($light,"light");
        }
    }

    .n-pagination-item{
        background-color: red;
        &:hover{
            background-color: red;
        }
    }
</style>