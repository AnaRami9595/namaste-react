import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../redux/cartSlice"

const appStore = configureStore({

    reducer: {//here the reducers for all the slices🍕
        cart: cartReducer,
        //user: userReducer,👤
        //location: locationReducer📍
    }

});

export default appStore;