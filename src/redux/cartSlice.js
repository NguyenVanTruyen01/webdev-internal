import { createSlice } from "@reduxjs/toolkit"
import { EditData } from "./globalHandle/globalHandle";

const cartSlice = createSlice({
    name: "CART",
    initialState: {
        cart: []
    },
    reducers: {
        ADD_PRODUCT: (state, action) => {
            state.cart = [...state.cart, action.payload]
        },
        REMOVE_PRODUCT: (state, action) => {
            state.cart = action.payload;
        },
        UPDATE_PRODUCT: (state, action) => {
            state.cart = action.payload;

        }
    }
})

export const {
    ADD_PRODUCT,
    REMOVE_PRODUCT,
    UPDATE_PRODUCT
} = cartSlice.actions;
export default cartSlice.reducer;