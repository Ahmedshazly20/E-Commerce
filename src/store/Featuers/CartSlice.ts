import {  createSlice, PayloadAction } from '@reduxjs/toolkit';
import {CartItem} from '../../interface/interface'


interface CartState {
    cartProduct: CartItem[]
    totalQuantity: number
    totalAmount: number
  }

  
const initialState:CartState = {
    cartProduct:[],
    totalQuantity: 0,
    totalAmount: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers:{
       AddToCart : (state , action: PayloadAction<CartItem>)=>{
         const newItem = action.payload
         const existingItem =state.cartProduct.find(item => item.id === newItem.id)
         if(existingItem){
            existingItem.quantity++
         }else{
            state.cartProduct.push({ ...newItem, quantity: 1 })
         }
       },
        removeFromCart: (state, action: PayloadAction<number>) => {
        const id = action.payload
        const existingItem = state.cartProduct.find(item => item.id === id)
  
        if (existingItem) {
          state.totalQuantity -= existingItem.quantity
          state.totalAmount -= existingItem.price * existingItem.quantity
          state.cartProduct = state.cartProduct.filter(item => item.id !== id)
        }
      },
            // 3. Increase Quantity
      increaseQuantity: (state, action: PayloadAction<number>) => {
        const id = action.payload
        const existingItem = state.cartProduct.find(item => item.id === id)
  
        if (existingItem) {
          existingItem.quantity++
          state.totalQuantity++
          state.totalAmount += existingItem.price
        }
      },
          // 4. Decrease Quantity
      decreaseQuantity: (state, action: PayloadAction<number>) => {
        const id = action.payload
        const existingItem = state.cartProduct.find(item => item.id === id)
  
        if (existingItem) {
          if (existingItem.quantity === 1) {
            state.cartProduct = state.cartProduct.filter(item => item.id !== id)
          } else {
            existingItem.quantity--
          }
          state.totalQuantity--
          state.totalAmount -= existingItem.price
        }
      },
      clearcart: (state, action: PayloadAction) => {
        state.cartProduct = [],
        state.totalAmount = 0,
        state.totalQuantity = 0

    }

}})



export const {AddToCart ,removeFromCart,decreaseQuantity ,increaseQuantity,clearcart} = cartSlice.actions

export default cartSlice.reducer