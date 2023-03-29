import { createSlice } from "@reduxjs/toolkit"

const productsSlice = createSlice({
    name: "PRODUCT",
    initialState: {
        products: []
    },
    reducers: {
        GET_PRODUCT: (state, action) => {
            state.products = action.payload;
        },
        UPDATE_PRODUCT: (state, action) => {
            state.products = action.payload;
        },
    }
})

export const {
    GET_PRODUCT,
    UPDATE_PRODUCT,

} = productsSlice.actions

export default productsSlice.reducer;