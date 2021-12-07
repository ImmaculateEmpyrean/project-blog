<template>
    <n-modal v-model:show="showModal" transform-origin="center">
        <n-card style="width: 600px;" title="Okay" :bordered="false" size="huge">
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