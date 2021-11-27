<template>
    <n-button @click="$emit('button:click')">
        <template #icon>
            <slot name="iconSlot"></slot>
        </template>
        <div class="name" v-if="!isMobileConfiguration">
            {{buttonName}}
        </div>
    </n-button>
</template>

<script>
import {isMobile} from '../javascript/breakpoints.js';
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
    },
    data(){
        return{
            isMobileConfiguration: true,
        }
    },
    methods:{
        updateIsMobileConfiguration(){
            this.isMobileConfiguration = isMobile();
        }
    },
    mounted(){
        this.updateIsMobileConfiguration();
        window.addEventListener('resize',this.updateIsMobileConfiguration.bind(this));
    },
    unmounted(){
        window.removeEventListener('resize',this.updateIsMobileConfiguration.bind(this));
    }
}
</script>