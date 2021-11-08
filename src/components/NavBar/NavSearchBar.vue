<!--this is the DESKTOP version of the component -->
<template>
    <div class="NavSearchBar">
        <div class="border"></div>
        <div class="borderCover"></div>
        <input  type="text" id="NavSearchBar" class="subtitle" placeholder="Visual-Novel"
                @focus="searchFieldFocused" @blur="searchFieldLostFocus"
        >
        <div class="NavSearchButton" id="NavSearchButton"><span class="iconify" data-icon="bx:bx-search-alt-2"></span></div>
    </div>
</template>

<script>
export default {
    name: "NavSearchBar",
    methods:{
        searchFieldFocused(){
            let borderCover = this.$el.querySelector('.borderCover');
            borderCover.classList.add('removeCover');

            let navSearchBar = this.$el;
            navSearchBar.classList.add('expand');
        },
        searchFieldLostFocus(){
            let borderCover = this.$el.querySelector('.borderCover');
            borderCover.classList.remove('removeCover');

            let navSearchBar = this.$el;
            navSearchBar.classList.remove('expand');
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .NavSearchBar{
        transition: 1s ease-in-out flex;

        flex: 0 0 50%;
        &.expand{
            flex: 0 0 70%;
        }

        position: relative;
        overflow-x: hidden;

        .border{
            position: absolute;
            border: 1px solid $accent;

            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            z-index: 1;
        }
        .borderCover{
            transition: 1s ease-in-out transform;

            position: absolute;
            border: 1px solid white;

            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 2;

            background-color: white;

            &.removeCover{
                transform: translateX(110%);
            }
        }

        input{
            position: relative;

            width: calc(100% - 2px);
            padding: 10px;
            padding-right: 51px;

            margin: 1px;

            border: none;
            outline: none;

            z-index: 3;
        }

        .NavSearchButton{
            position: absolute;
            right: 6px;
            top: 10px;
            width: 47px;

            display: flex;
            justify-content: flex-end;

            svg{
                width: 35px;
                height: 35px;
                background-color: white;
                color: $accent;
            }

            z-index: 4;
        }
    }
</style>