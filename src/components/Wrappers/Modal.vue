<template>
    <n-modal v-model:show="showModal" transform-origin="center">
        <n-card :title="cardTitle" :bordered="false" size="huge">
            <template #header-extra>
                <svg 
                    class="modalClose"
                    width="24px" 
                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" 
                    viewBox="0 0 24 24"
                    @click="hide"
                >
                    <path 
                        d="M19 6.41L17.59 5L12 10.59L6.41 5L5 6.41L10.59 12L5 17.59L6.41 19L12 13.41L17.59 19L19 17.59L13.41 12L19 6.41z" 
                        fill="currentColor">
                    </path>
                </svg>
            </template>
            
            <slot name="content"></slot>
        </n-card>
    </n-modal>
</template>

<script>
import {NModal,NCard} from 'naive-ui';

export default {
    name: "ModalBase",
    components:{
        NModal,
        NCard
    },
    props:{
        cardTitle:{
            type: String,
            default: "NoTitle"
        }
    },
    data(){
        return{
            showModal: false
        }
    },
    methods: {
        show(){
            this.showModal = true;
        },
        hide(){
            this.showModal = false;
        },
        toggleShow(){
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "@/assets/scss/setting" as *;

    .n-card.n-modal{
        width: 85vw;
        margin: 0 auto;
        
        @include for-tablet-portrait-up{
            width: 75vw;
        }

        @include for-desktop-up{
            width: 50vw;
        }
    }

    .modalClose{
        cursor: pointer;
    }
</style>