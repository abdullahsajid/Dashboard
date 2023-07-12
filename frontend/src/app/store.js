import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import categoryReducer from '../features/categories/categorySlice'
import productReducer from '../features/products/productSlice'
import orderReducer from '../features/order/orderSlice'
import shippingReducer from '../features/shipping/shippingSlice'

export const store = configureStore({
  reducer: {
    auth:authReducer,
    category:categoryReducer,
    product:productReducer,
    order:orderReducer,
    shipping:shippingReducer,
  },
});
