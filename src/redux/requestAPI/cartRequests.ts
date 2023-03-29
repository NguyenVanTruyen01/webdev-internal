
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "../cartSlice"

export const CartRequests = {
    addProduct: (product: any, dispatch: any) => {
        dispatch(ADD_PRODUCT(product))
    },

    updateProducts: (products: any, dispatch: any) => {
        dispatch(UPDATE_PRODUCT(products))
    },

    removeProduct: (products: any, dispatch: any) => {
        dispatch(REMOVE_PRODUCT(products))
    }

}