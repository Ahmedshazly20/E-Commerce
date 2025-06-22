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

// const cartSlice = createSlice({
//     name: 'cart',
//     initialState,
//     reducers: {
//       // 1. Add to Cart
//       addToCart: (state, action: PayloadAction<CartItem>) => {
//         const newItem = action.payload
//         const existingItem = state.items.find(item => item.id === newItem.id)
  
//         if (existingItem) {
//           existingItem.quantity++
//         } else {
//           state.items.push({ ...newItem, quantity: 1 })
//         }
  
//         state.totalQuantity++
//         state.totalAmount += newItem.price
//       },
  
//       // 2. Remove from Cart (remove entire item)
//       removeFromCart: (state, action: PayloadAction<number>) => {
//         const id = action.payload
//         const existingItem = state.items.find(item => item.id === id)
  
//         if (existingItem) {
//           state.totalQuantity -= existingItem.quantity
//           state.totalAmount -= existingItem.price * existingItem.quantity
//           state.items = state.items.filter(item => item.id !== id)
//         }
//       },
  
//       // 3. Increase Quantity
//       increaseQuantity: (state, action: PayloadAction<number>) => {
//         const id = action.payload
//         const existingItem = state.items.find(item => item.id === id)
  
//         if (existingItem) {
//           existingItem.quantity++
//           state.totalQuantity++
//           state.totalAmount += existingItem.price
//         }
//       },
  
//       // 4. Decrease Quantity
//       decreaseQuantity: (state, action: PayloadAction<number>) => {
//         const id = action.payload
//         const existingItem = state.items.find(item => item.id === id)
  
//         if (existingItem) {
//           if (existingItem.quantity === 1) {
//             state.items = state.items.filter(item => item.id !== id)
//           } else {
//             existingItem.quantity--
//           }
//           state.totalQuantity--
//           state.totalAmount -= existingItem.price
//         }
//       },
//     },
//   })

export const {AddToCart ,removeFromCart,decreaseQuantity ,increaseQuantity,clearcart} = cartSlice.actions

export default cartSlice.reducer