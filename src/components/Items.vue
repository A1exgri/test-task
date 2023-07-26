<template>
    <div class="blocks__items" :class="{ 'selected-items' : isSelectedBlock }">
        <div v-if="items.length" class="blocks__items-row">
            <Item v-for="item in items" :key="item.id" :item="item" :is-select="isSelect" />
        </div>
        <div v-if="isSelectedBlock" class="blocks__items-text">
            selected: {{ selectQty }} / {{ qty }}
        </div>
    </div>
</template>

<script>
import {mapState} from "vuex"
import Item from "@/components/Item.vue"

export default {
    components: {Item},
    props: {
        items: {
            type: Array,
            required: false,
            default: () => []
        },
        isSelect: {
            type: Boolean,
            required: false,
            default: false
        },
        isSelectedBlock: {
            type: Boolean,
            required: false,
            default: false
        }
    },
    computed: {
        ...mapState({
            qty: state => state.selectItemsQty
        }),
        selectQty() {
            return this.items.length || 0
        }
    }
}
</script>

<style>
.blocks__items {
    border: 4px solid #000;
    flex: 0 0 48%;
    max-width: 48%;
    height: 100%;
    position: relative;
}
.blocks__items-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
.blocks__items-text {
    position: absolute;
    bottom: 10px;
    left: 0;
    right: 0;
    text-align: center;
    font-weight: bold;
}
.blocks__items.selected-items {
    flex: 0 0 38%;
    max-width: 38%;
    height: 100%;
}
.selected-items .blocks__items-row {
    justify-content: flex-start;
}
</style>