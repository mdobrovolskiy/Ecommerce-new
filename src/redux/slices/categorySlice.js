import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  categoriesOpen: false,
  currentCategory: 'man',
  catRef: null,
}

export const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    handleCategory(state, action) {
      if (!state.categoriesOpen) {
        state.categoriesOpen = action.payload[0]
        state.currentCategory = action.payload[1]
      } else if (
        state.categoriesOpen &&
        action.payload[1] === state.currentCategory
      ) {
        state.categoriesOpen = false
      } else {
        state.currentCategory = action.payload[1]
      }
    },
    addRef(state, action) {
      state.catRef = action.payload
    },
  },
})

export const { handleCategory, addRef } = counterSlice.actions

export default counterSlice.reducer
