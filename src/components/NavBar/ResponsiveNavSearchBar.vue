<template>
    <div class="main">
        <div id="searchIcon" class="icon-holder" 
             @click="searchIconClicked"
        >
            <span class="iconify icon" data-icon="bx:bx-search-alt-2"></span>
        </div>
        <input type="text" id="NavSearchBar" class="subtitle hidden" placeholder="Visual-Novel">
        <div class="border"></div>
        <div class="borderCover"></div>
    </div>
</template>

<script>
export default {
    name: "ResponsiveNavSearchBar",
    methods:{
        searchIconClicked(){
            console.log('called')

            let input = this.$el.querySelector('input')
            input.classList.remove('hidden');
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .main{
        transition: 1s ease-in-out flex;

        display: flex;
        position: relative;
        overflow-x: hidden;

        flex: 0 0 50%;
        &.expand{
            flex: 0 0 100%;
            @include for-tablet-portrait-up{
                flex: 0 0 70%;
            }
        }

        .icon-holder{
            position: absolute;
            right: 0;
            top : 5px;

            svg{
                width : 35px;
                height: 35px;
                
                color: $accent;
            }
        }

        input{
            transition: 2s width ease-in-out, 
                        2s padding ease-in-out;

            border: none;
            outline: none;

            width: 100%;
            
            height: 45px;
            padding: 10px 0;
            padding-right: 65px;
            padding-left: 10px;
            margin-left: auto;

            &.hidden{
                width: 0;
                padding-left: 0;
                padding-right: 0;
            }
            @include for-tablet-portrait-up{
                &.hidden{
                    width: 100%;

                    padding: 10px 0;
                    padding-right: 65px;
                    padding-left: 10px;
                }
            }

        }
    }
</style>