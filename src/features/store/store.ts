import { configureStore } from '@reduxjs/toolkit'
import loginReducer from '../slice/loginSlice'


const store = configureStore({
  reducer: {
    auth: loginReducer  
  },
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
