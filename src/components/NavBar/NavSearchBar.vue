<!--this is the DESKTOP version of the component -->
<template>
    <div class="NavSearchBar">
        <div class="before-element"></div>
        <input type="text" id="NavSearchBar" class="subtitle" placeholder="Visual-Novel">
        <div class="NavSearchButton" id="NavSearchButton"><span class="iconify" data-icon="bx:bx-search-alt-2"></span></div>
    </div>
</template>

<script>
export default {
    name: "NavSearchBar"
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .NavSearchBar{
        flex: 0 0 50%;
        position: relative;

        input{
            width: 100%;
            padding: 10px;
            padding-right: 51px;

            border: none;
            outline: none;
        }

        .NavSearchButton{
            position: absolute;
            right: 6px;
            top: 10px;
            width: 47px;
            // background-color: steelblue;

            display: flex;
            justify-content: flex-end;

            svg{
                width: 35px;
                height: 35px;
                background-color: white;
                color: $accent;
            }
        }
    }
</style>