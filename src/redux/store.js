import { configureStore } from "@reduxjs/toolkit"
import authReducer from "./auth/authSlice"

export default store = configureStore({
    reducer: {
        auth: authReducer
    }
})