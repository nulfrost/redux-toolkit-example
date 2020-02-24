import { createSlice } from '@reduxjs/toolkit'



const counterSlice = createSlice({
    name: 'counter',
    initialState: 0,
    reducers: {
        increment(state, { payload }) {
            return state + payload
        },
        decrement: state => state - 1
    }
})

export const { increment, decrement } = counterSlice.actions
const { reducer } = counterSlice
export default reducer
