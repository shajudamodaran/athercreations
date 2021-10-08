import { createSlice } from '@reduxjs/toolkit'
import { PAGE_NAMES } from '../Constants/Constants'



const initialState = {
  active_page: null,
}

export const activePageSlice = createSlice({
  name: 'activepage',
  initialState,
  reducers: {

    setActivePage: (state,action) => {
      state.active_page =action.payload
    },
    
  },
})

// Action creators are generated for each case reducer function
export const { setActivePage } = activePageSlice.actions

export default activePageSlice.reducer