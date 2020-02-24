import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from "uuid"

const cartSlice = createSlice({
    name: "cart",
    initialState: [],
    reducers: {
        addItemToCart(state, { payload }) {
            const { name, quantity } = payload
            return [...state, { id: uuidv4(), name, quantity }]
        },
        clearCart() {
            return []
        }
    }
})




export const { addItemToCart, clearCart } = cartSlice.actions
const { reducer } = cartSlice
export default reducer;