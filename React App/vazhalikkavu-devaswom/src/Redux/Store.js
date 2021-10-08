
import { configureStore } from '@reduxjs/toolkit'

import booleanSlice from './BooleanSlice'
import activePageSlice from './ActivePageSlice'

export default configureStore({
  reducer: {
    booleanSlice: booleanSlice,
    activePageSlice: activePageSlice,
  },
})