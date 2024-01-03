import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import wishlistSlice from "./Slices/wishlistSlice";
wishlistSlice
const cartStore = configureStore({
    reducer: {
        productSlice, wishlistSlice
    }
})
export default cartStore