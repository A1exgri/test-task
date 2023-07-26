<template>
    <div class="blocks__item" :class="className" @click="selectItem">
        <div class="blocks__item-name">{{ item.name }}</div>
        <div class="blocks__item-id">{{ item.id }}</div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: false
        },
        className: {
            type: String,
            required: false,
            default: ''
        },
        isSelect: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    methods: {
        selectItem() {
            if(this.isSelect) this.$store.commit('ADD_NEW_SELECT_ITEMS', this.item)
            else this.$store.commit('ADD_NEW_SELECT_ITEM', this.item)
        }
    }
}
</script>

<style>
.blocks__item {
    border: 4px solid #000;
    margin: 10px;
    padding: 10px;
    flex: 0 0 16%;
    max-width: 16%;
    cursor: pointer;
    transition: all .4s ease-in-out;
}
.blocks__item.select-item {
    margin: 0;
    flex: 0 0 38%;
    max-width: 38%;
    height: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: default;
    font-size: 30px;
    font-weight: bold;
}
.blocks__items.selected-items .blocks__item {
    max-height: 40px;
    width: 21%;
    flex: 0 0 21%;
    max-width: 21%;
}
</style>