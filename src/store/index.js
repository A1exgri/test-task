import { createStore } from 'vuex'

const store = createStore({
    state () {
        return {
            allItems: [
                {
                    id: 1,
                    items: [
                        { id: 1, name: "Shoes 1" },
                        { id: 2, name: "Shoes 2" },
                        { id: 3, name: "Shoes 3" },
                        { id: 4, name: "Shoes 4" },
                        { id: 5, name: "T-shirt 1" },
                        { id: 6, name: "T-shirt 2" },
                        { id: 7, name: "T-shirt 3" },
                        { id: 8, name: "T-shirt 4" }
                    ],
                    isSelected: true
                },
                {
                    id: 2,
                    items: [
                        { id: 11, name: "Jacket 1" },
                        { id: 12, name: "Jacket 2" },
                        { id: 13, name: "Jacket 3" },
                        { id: 14, name: "Jacket 4" },
                        { id: 15, name: "Hoodie 1" },
                        { id: 16, name: "Hoodie 2" },
                        { id: 17, name: "Hoodie 3" },
                        { id: 18, name: "Hoodie 4" }
                    ]
                }
            ],
            selectItem: null,
            selectItems: [],
            isMessage: false,
            selectItemsQty: 6
        }
    },
    mutations: {
        ADD_NEW_SELECT_ITEM (state, item) {
            state.selectItem = item
        },
        ADD_NEW_SELECT_ITEMS (state, item) {
            if(state.selectItems.length < state.selectItemsQty) {
                state.selectItems = state.selectItems.filter(i => i.id !== item.id)
                state.selectItems.push(item)
            } else {
                this.isMessage = true
            }
        }
    }
})

export default store