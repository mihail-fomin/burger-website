import { configureStore } from '@reduxjs/toolkit'
import categoryReducer from './category/categorySlice'
import productReducer from './product/productSlice'
import orderReducer, { localStorageMiddleware } from './order/orderSlice'
import modalReducer from './modalDelivery/modalDeliverySlice'
import formReducer from './form/formSlice'

export const store = configureStore({
	reducer: {
		category: categoryReducer,
		product: productReducer,
		order: orderReducer,
		modal: modalReducer,
		form: formReducer,
	},
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(localStorageMiddleware)
});