<template>
    <div class="blacklistTagsButton">
        <Button buttonName="BlackList Tags" @button:click="handleButtonClick">
            <template v-slot:iconSlot>
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512"><path d="M496 224H293.9l-87.17-26.83A43.55 43.55 0 0 1 219.55 112h66.79A49.89 49.89 0 0 1 331 139.58a16 16 0 0 0 21.46 7.15l42.94-21.47a16 16 0 0 0 7.16-21.46l-.53-1A128 128 0 0 0 287.51 32h-68a123.68 123.68 0 0 0-123 135.64c2 20.89 10.1 39.83 21.78 56.36H16a16 16 0 0 0-16 16v32a16 16 0 0 0 16 16h480a16 16 0 0 0 16-16v-32a16 16 0 0 0-16-16zm-180.24 96A43 43 0 0 1 336 356.45A43.59 43.59 0 0 1 292.45 400h-66.79A49.89 49.89 0 0 1 181 372.42a16 16 0 0 0-21.46-7.15l-42.94 21.47a16 16 0 0 0-7.16 21.46l.53 1A128 128 0 0 0 224.49 480h68a123.68 123.68 0 0 0 123-135.64a114.25 114.25 0 0 0-5.34-24.36z" fill="currentColor"></path></svg>
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
            this.checkedState[el] = false;
        }.bind(this))

        this.emitEvents = true;
    }
}
</script>

<style lang="scss" scoped>
    @use '@/assets/scss/setting' as *;

    .blacklistTagsButton{
        flex: 1 1 100%;
        display: flex;
        align-items: center;

        .n-button{
            flex: 1 1 100%;
        }
    }

    .n-tag{
        margin: var(--spacing-normal);
        @include for-tablet-portrait-up{
            margin: var(--spacing-small);
        }

        padding: var(--spacing-normal);
    }
</style>