<template>
    <Button buttonName="SelectTagsButton" @button:click="handleButtonClick">
        <template v-slot:iconSlot>
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M304 32L16 320l176 176l288-288V32zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"></path></svg>
        </template>
    </Button>
</template>

<script>
import Button from '@/components/Button.vue';

export default {
    name: "SelectTagsButton",
    components:{
        Button
    },
    methods:{
        handleButtonClick(){
            console.log('button clicked')
        }
    }
}
</script>