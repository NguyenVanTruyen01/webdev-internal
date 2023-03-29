import { GET_PRODUCT, UPDATE_PRODUCT } from "../productsSlice"

export const ProductRequests = {
    getProducts: async (products: any, dispatch: any) => {
        dispatch(GET_PRODUCT(products))
    },
    updateProducts: async (products: any, dispatch: any) => {
        dispatch(UPDATE_PRODUCT(products))
    }
}