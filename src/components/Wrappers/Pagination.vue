<template>
    <div class="pagination">    
        <n-pagination :page-count="pageCount" :on-update:page="searchPageUpdated" :page="page">
            
            <template #prev>
                <n-button icon-placement="left" type="primary">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 12H3"></path><path d="M6 9l-3 3l3 3"></path><path d="M21 14h-4v-4h4z"></path></g></svg>
                    </template>
                    Previous Page
                </n-button>
            </template>

            <template #next>
                <n-button icon-placement="right" type="primary">
                    <template #icon>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 12h14"></path><path d="M18 15l3-3l-3-3"></path><path d="M3 10h4v4H3z"></path></g></svg>
                    </template>
                    Next Page
                </n-button>
            </template>

        </n-pagination>
    </div>
</template>

<script>
import {NPagination, NButton} from 'naive-ui';  

export default {
    name: "Pagination",
    components:{
        NPagination,
        NButton
    },
    props:{
        pageCount:{
            default: 2
        },
        page:{
            default: 1
        }
    },
    methods: {
        searchPageUpdated(page){
            this.$emit('on-update:page',page);
        }
    }
}
</script>

<style lang="scss" scoped>
    .pagination{
        display: flex;
        justify-content: center;

        padding: calc(var(--spacing-large) * 2);
    }
</style>