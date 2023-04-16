import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './category/categorySlice'
import productReducer from './product/productSlice'
import orderReducer, { localStorageMiddleware } from './order/orderSlice'
import modalReducer from './modalDelivery/modalDeliverySlice'

export const store = configureStore({
	reducer: {
		category: categoryReducer,
		product: productReducer,
		order: orderReducer,
		modal: modalReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStorageMiddleware)
});