import { GET_PRODUCT, UPDATE_PRODUCT } from "../productsSlice"

export const ProductRequests = {
    getProducts: async (products, dispatch) => {
        dispatch(GET_PRODUCT(products))
    },
    updateProducts: async (products, dispatch) => {
        dispatch(UPDATE_PRODUCT(products))
    }
}