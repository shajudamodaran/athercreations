import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  drawer_state: false,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {

    toggleDrawer: (state) => {
      state.drawer_state =! state.drawer_state
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { toggleDrawer } = counterSlice.actions

export default counterSlice.reducer