import { configureStore } from '@reduxjs/toolkit'
import sliceReducer from './covidSlice.js'

export const store = configureStore({
  reducer: {
    covidSlice: sliceReducer
  },
})