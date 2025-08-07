import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './Featuers/LoginSlice'
import cartSlice from './Featuers/CartSlice'
import registerSlice from './Featuers/RegusterSlice'
import { Apislic } from './Services/Products'
import { categories } from './Services/categories'
import {Users} from './Services/Users'
import NetworkSlice  from './Featuers/Network'


export const store = configureStore({
  reducer: {
    login: LoginSlice,
    register: registerSlice,
    network: NetworkSlice,
    cart: cartSlice,
    [Apislic.reducerPath]: Apislic.reducer,
    [categories.reducerPath]: categories.reducer,
    [Users.reducerPath]: Users.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
     .concat(Users.middleware)
      .concat(Apislic.middleware)
      .concat(categories.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch