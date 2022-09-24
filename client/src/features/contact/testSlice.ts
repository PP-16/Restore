import { createSlice } from "@reduxjs/toolkit"

export const testSlice = createSlice({
    name: 'testRTK',
    initialState: {
        myname: "PPPP"
    },
    reducers: {
        incre6: state => {state.myname += "1125"},
        decre7: state => {state.myname += "1235"},
    }
})

export const { incre6, decre7} = testSlice.actions
