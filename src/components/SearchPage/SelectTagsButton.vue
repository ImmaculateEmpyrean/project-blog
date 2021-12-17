<template>
    <div class="selectTagsButton">
        <Button buttonName="SelectTagsButton" @button:click="handleButtonClick">
            <template v-slot:iconSlot>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M304 32L16 320l176 176l288-288V32zm80 128a32 32 0 1 1 32-32a32 32 0 0 1-32 32z" fill="currentColor"></path></svg>
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
import {tagColors} from '@/assets/json/tagColors.js';

import {NTag} from 'naive-ui';
import Button from '@/components/Button.vue';
import Modal from "@/components/Modal.vue";

export default {
    name: "SelectTagsButton",
    components:{
        Button,
        Modal,
        NTag
    },
    data(){
        return{
            tags: Object.keys(tagColors),
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
    @use '../../assets/scss/setting' as *;

    .selectTagsButton{
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