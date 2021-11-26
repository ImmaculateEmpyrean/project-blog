<template>
    <n-pagination :page-count="pageCount" :on-update:page="searchPageUpdated">
        <template #prev>Go To Next Page</template>
        <template #next>Go To Previous Page</template>
    </n-pagination>
</template>

<script>
import {NPagination} from 'naive-ui';

export default {
    name: "Pagination",
    components:{
        NPagination,
    },
    props:{
        pageCount:{
            default: 2
        }
    },
    methods: {
        searchPageUpdated(page){
            this.$emit('on-update:page',page);
        }
    }
}
</script>