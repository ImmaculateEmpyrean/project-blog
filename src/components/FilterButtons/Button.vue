<template>
    <a href="#" class="Button">{{title}}</a>
</template>
    
    <script>
    export default {
        name: "FilterButton",
        props:{
            title: {
                type: String,
                default: "NoName"
            }
        }
    }
    </script>

<style lang="scss" scoped>
    

</style>