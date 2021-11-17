<template>
    <nav class="pagination is-centered" role="navigation" aria-label="pagination">
        <a class="pagination-previous bodyText bold">Previous</a>
        <a class="pagination-next bodyText bold">Next page</a>
        <ul class="pagination-list">
            <li><a class="pagination-link bodyText">{{firstPage}}</a></li>
            <li><span class="pagination-ellipsis bodyText bold">&hellip;</span></li>
            <li><a class="pagination-link bodyText">{{currentPageFormer}}</a></li>
            <li><a class="pagination-link is-current bodyText">{{currentPage}}</a></li>
            <li><a class="pagination-link bodyText">{{currentPageLatter}}</a></li>
            <li><span class="pagination-ellipsis bodyText">&hellip;</span></li>
            <li><a class="pagination-link bodyText">{{lastPage}}</a></li>
        </ul>
    </nav>
</template>

<script>
export default {
    name: "Pagination",
    props:{
        firstPage: {
            default: 1,
        },
        lastPage:{
            default: 10
        },
        currentPage:{
            default: 5
        }
    },
    computed:{
        currentPageFormer(){
            if(this.currentPage === this.firstPage)
                return this.firstPage;
            else return this.currentPage - 1; 
        },
        currentPageLatter(){
            if(this.currentPage === this.lastPage)
                return this.lastPage;
            else return this.currentPage + 1; 
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../assets/scss/setting' as *;

    $link: map-get($dark,"dark");

    @import "~bulma/sass/utilities/controls";
    @import "~bulma/sass/utilities/mixins";

    @import "~bulma/sass/utilities/_all.sass";
    @import '~bulma/sass/components/pagination.sass';

    nav.pagination{
        margin: 0;
    }

    .pagination-link{
        transition: background-color 0.3s ease-in-out,
                    color 0.3s ease-in-out;

        background-color: white;
        cursor: pointer;

        &:hover{
            background-color: $accent;
            color: white;

            &.is-current{
                background-color: map-get($dark,"dark");
                color: white;
            }
        }
    }

    .pagination-previous{
        transition: background-color 0.3s ease-in-out,
                    color 0.3s ease-in-out;

        background-color: white;
        &:hover{
            background-color: $accent;
            color: white;
        }

        cursor: pointer;
    }

    .pagination-next{
        transition: background-color 0.3s ease-in-out,
                    color 0.3s ease-in-out;

        background-color: white;
        &:hover{
            background-color: $accent;
            color: white;
        }

        cursor: pointer;
    }
</style>