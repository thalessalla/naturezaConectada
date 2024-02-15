import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slice/loginSlice'
import userReducer from "../slice/signupSlice"


const store = configureStore({
  reducer: {
    auth: loginReducer,
    user: userReducer,  
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
