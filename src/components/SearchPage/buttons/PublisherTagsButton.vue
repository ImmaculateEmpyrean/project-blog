<template>
    <div class="publisherTagsButton">
        <Button buttonName="Publisher Filter" @button:click="handleButtonClick">
            <template v-slot:iconSlot>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none"><path d="M7 16a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></path><path d="M8 18a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></path><path d="M7 13a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></path><path d="M8 9a1 1 0 1 1-2 0a1 1 0 0 1 2 0z" fill="currentColor"></path><path d="M7 7a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></path><path d="M14 4.25V5h4.75A2.25 2.25 0 0 1 21 7.25v13.5a.75.75 0 0 1-.75.75h-2.5a.5.5 0 0 1-.5-.5v-2.25a.5.5 0 0 0-.5-.5h-2.5a.5.5 0 0 0-.5.5V21a.5.5 0 0 1-.5.5h-9.5a.75.75 0 0 1-.75-.75V4.25A2.25 2.25 0 0 1 5.25 2h6.5A2.25 2.25 0 0 1 14 4.25zM5.25 3.5a.75.75 0 0 0-.75.75V20H10V7.25A2.25 2.25 0 0 1 12.25 5h.25v-.75a.75.75 0 0 0-.75-.75h-6.5zM18 15a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm4-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2zm4-4a1 1 0 1 0-2 0a1 1 0 0 0 2 0zm-4 1a1 1 0 1 0 0-2a1 1 0 0 0 0 2z" fill="currentColor"></path></g></svg>
            </template>
        </Button>
        <Modal
            cardTitle="Select Tags"
            ref="modal"
        >
            <template #content>
                <n-tag v-for="(tag) in tags" :key="tag" 
                    checkable v-model:checked="checkedState[tag]"
                >
                    {{tag}}
                </n-tag>
            </template>
        </Modal>
    </div>
</template>

<script>
import {generatePublisherList} from '@/assets/json/searchList.js';

import {NTag} from 'naive-ui';
import Button from '@/components/Wrappers/Button.vue';
import Modal from "@/components/Wrappers/Modal.vue";

export default {
    name: "SelectTagsButton",
    components:{
        Button,
        Modal,
        NTag
    },
    data(){
        return{
            tags: generatePublisherList(),
            checkedState: {},

            emitEvents: false
        }
    },
    watch: {
        checkedState:{
            handler(newArray){
                if(this.emitEvents === false) //donot emit events if not required
                    return;

                this.$emit('tags:changed', this.tags.filter(function(tag){
                    if(newArray[tag] === true)
                        return true;
                    }.bind(this)
                ));
            },
            deep: true
        }
    },
    methods:{
        handleButtonClick(){
            this.$refs.modal.show();
        }
    },
    created(){
        this.tags.forEach(function(el){
            this.checkedState[el] = true;
        }.bind(this))

        this.emitEvents = true;
    }
}
</script>

<style lang="scss" scoped>
    @use '@/assets/scss/setting' as *;

    .publisherTagsButton{
        flex: 1 1 100%;
        display: flex;
        align-items: center;

        .n-button{
            flex: 1 1 100%;
        }
    }

    .n-tag{
        margin-right: var(--spacing-normal);
        padding: var(--spacing-normal);
    }
</style>