<template>
    <n-tag round :color="colorObject">
      {{tagName}}
    </n-tag>
</template>

<script>
import {NTag} from 'naive-ui';
import {tagColors} from '@/javascript/tagColors';

export default {
    name: "RomanceTag",
    components:{
        NTag
    },
    props:{
        tagName: {
            type: String,
            default: "Romance"
        }
    },
    computed: {
        colorObject(){
            return {
                color: tagColors[this.tagName].color,
                textColor: tagColors[this.tagName].textColor,
                borderColor: tagColors[this.tagName].textColor,
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    @use '../../assets/scss/setting' as *;

    .n-tag{
        font-size: var(--font-small);
        padding: var(--spacing-normal);
    }

</style>