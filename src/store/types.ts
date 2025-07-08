import { configureStore } from '@reduxjs/toolkit'
import LoginSlice from './Featuers/LoginSlice'
import cartSlice from './Featuers/CartSlice'
import registerSlice from './Featuers/RegusterSlice'
import  {Apislic}  from './Services/Products';

export const store = configureStore({
  reducer: {
    login: LoginSlice,
    register: registerSlice,
    cart: cartSlice,
    [Apislic.reducerPath]: Apislic.reducer,
    
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(Apislic.middleware)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch 