import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./cartSlice"

const appStore = configureStore({
    reducer: {//one reducer for whole app nd have small reducers in it
        cart: cartReducer
    }
});

export default appStore