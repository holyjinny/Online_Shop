import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./features/productsSlice";
import { productsApi } from "./features/productsAPI";
import cartReducer from "./features/cartSlice";
import favoriteReducer from "./features/favoriteSlice";
import { singleProductApi } from "./features/singleProductApi";


const store = configureStore({
    reducer: {
        products: productsReducer,
        cart: cartReducer,
        favorite: favoriteReducer,
        [productsApi.reducerPath]: productsApi.reducer,
        [singleProductApi.reducerPath]: singleProductApi.reducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(productsApi.middleware),
})

export default store;