import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: []//the initial state will be an empty array
    },
    reducers: {//actions here, they can take 2 args, state and action:
        addItem: (state, action) => {
            //our reducer function, modifies data inside the slice
            //and mutates the state☁️
            state.items.push(action.payload);
            //when dispatching on add button we'll get the payload
        },
        removeItem: (state) => {
            state.items.pop()
            /*Another action that will remove an item from the end
            of the item's array. This time we will do it like this
            for simplicity but we can also add the logic to 
            deleting an item depending on the selected index
            using splice */
        },
        clearCart: (state) => {
            state.items.length = 0;//[]
        }
    }
})

//Now we'll export actions and the reducer, with a syntax given
//by react
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;