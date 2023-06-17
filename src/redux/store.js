import { configureStore } from '@reduxjs/toolkit'
import counter from './slices/categorySlice'
export const store = configureStore({
  reducer: { counter },
})
