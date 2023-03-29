
import { ADD_PRODUCT, REMOVE_PRODUCT, UPDATE_PRODUCT } from "../cartSlice"

export const CartRequests = {
    addProduct: (product, dispatch) => {
        dispatch(ADD_PRODUCT(product))
    },

    updateProducts: (products, dispatch) => {
        dispatch(UPDATE_PRODUCT(products))
    },

    removeProduct: (products, dispatch) => {
        dispatch(REMOVE_PRODUCT(products))
    }

}