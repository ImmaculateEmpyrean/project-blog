<template>
    <n-button @click="$emit('button:click')">
        <template #icon>
            <slot name="iconSlot"></slot>
        </template>
        {{buttonName}}
    </n-button>
</template>

<script>
import {NButton} from 'naive-ui';

export default {
    name: "MainButton",
    components:{
        NButton
    },
    props:{
        buttonName:{
            default: "noName"
        }
    }
}
</script>