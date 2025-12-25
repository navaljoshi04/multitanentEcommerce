
import authReducers from "./authslices"
import {configureStore} from "@reduxjs/toolkit"
export const store= configureStore({
    reducer:{
        auth: authReducers,
    }
})