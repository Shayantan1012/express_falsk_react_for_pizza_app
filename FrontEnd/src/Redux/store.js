import { configureStore } from '@reduxjs/toolkit'
import AuthSliceReducer from './Slice/AuthSlice';
import ProductSliceReducer from './Slice/ProductSlice';
import CartSliceReducer from './Slice/cartSlice';
import orderSliceReducer from './Slice/orderSlice';

export const store = configureStore({
  reducer: {
    auth:AuthSliceReducer,
    product:ProductSliceReducer,
    cart:CartSliceReducer,
    order:orderSliceReducer,
  },
  devTools:true,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})
export default store;