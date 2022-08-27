import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface containerState{
  isFull : boolean
}

const initialState: containerState = {
  isFull : false
}

export const containerSlice = createSlice({
  name: 'container',
  initialState,
  reducers: {
    setContainer : (state)=>{state.isFull = !state.isFull}
  },
})

// Action creators are generated for each case reducer function
export const {setContainer } = containerSlice.actions

export default containerSlice.reducer