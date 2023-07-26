<template>
  <main>
      <h1>Тестовое задание VueJS</h1>
      <div class="blocks">
          <div class="blocks__top">
              <Items :items="selectedItems" :is-selected-block="true"/>
              <Item v-if="selectItem" :item="selectItem" class-name="select-item" />
          </div>
          <div class="blocks__bottom">
              <Items
                  v-for="i in allItems"
                  :key="i.id"
                  :items="i.items"
                  :is-select="i.isSelected"
              />
          </div>
      </div>
  </main>
</template>
<script>
import { mapState } from "vuex"
import Items from "@/components/Items.vue"
import Item from "@/components/Item.vue";

export default {
    components: {
        Items,
        Item
    },
    computed: {
        ...mapState({
            allItems: state => state.allItems,
            selectItem: state => state.selectItem,
            selectedItems: state => state.selectItems
        })
    }
}
</script>
<style>
h1 {
    text-align: center;
}
.blocks {
    border: 2px solid #000;
    padding: 20px;
    margin: 20px 0;
}
.blocks__top, .blocks__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.blocks__top {
    height: 230px;
    margin-bottom: 60px;
}
.blocks__bottom {
    height: 60Vh;
}
</style>
