import { createSlice } from '@reduxjs/toolkit'



const NetworkSlice = createSlice({
  name: 'Network',
  initialState: {
    network: false,
  },
  reducers: {
    setNetwork(state, action) {
        state.network = action.payload
    }
   
  },
    
  })

export const { setNetwork } = NetworkSlice.actions
export default NetworkSlice.reducer