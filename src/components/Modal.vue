<template>
    <n-modal v-model:show="showModal" transform-origin="center">
        <n-card :title="cardTitle" :bordered="false" size="huge">
            <template #header-extra>
                Great
            </template>
            Fine
            <template #footer>
                Nice
            </template>
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
        toggle(){
            this.showModal = !this.showModal;
        }
    }
}
</script>

<style lang="scss" scoped>
    @use "../assets/scss/setting" as *;

    .n-card{
        width: 70vh;
        
        @include for-tablet-portrait-up{
            width: 50vw;
        }
    }
</style>