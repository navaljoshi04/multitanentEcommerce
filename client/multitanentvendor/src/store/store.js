
import authReducers from "./authslices";
import cartReducers from "./cartslices";
import {configureStore} from "@reduxjs/toolkit"
export const store= configureStore({
    reducer:{
        auth: authReducers,
        cart:cartReducers
    }
})