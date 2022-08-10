import { configureStore } from '@reduxjs/toolkit'
import  CartProductsReducer from '../reducers/index'; 

const store = configureStore({
  reducer: {
    cartProduct : CartProductsReducer
  },
})
export default store;

