import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axios.config';
import { RootState } from '../types';
import { Bounce, toast } from 'react-toastify';
import CookieService from '../../Services/CreateServices';
import { RegusterInterface } from './../../interface/interface';
interface Tinitstate {
  data: any;
  error: any;
  loading: boolean;
}

const initialState: Tinitstate = {
  data: null,
  error: null,
  loading: false,
};

// ✅ Async thunk for login
export const registerUser = createAsyncThunk(
  "register/userregister",
  async ({ username, password, firstname,lastname,email,Phone}: RegusterInterface, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/local/register`, {
        username,
        password,
        firstname,
        lastname,
        email,
        Phone
      });
      return data;
    } catch (error: any) {
      console.error('Registration error:', error);
      console.error('Error response:', error.response?.data);
      return thunkAPI.rejectWithValue(error.response?.data?.error?.message || "register failed");
    }
  }
);

// ✅ Slice definition
const registerSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(registerUser.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.data = action.payload;
        const date = new Date();
        const IN_DAYS= 5;
        
        date.setTime(date.getTime() + IN_DAYS * 24 * 60 * 60 * 1000);
        const options = {path:"/", expires:date ,}
        CookieService.set("Jwt",action.payload.jwt,options);
        CookieService.set("User",action.payload.user.username ,options);
        state.error = null;
        toast.success( `😉🤗 Welcom ${action.payload.user.firstname + action.payload.user.lastname }` , {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });

          setTimeout(()=>{
            window.location.href = "/";
          },3000);
      })
      .addCase(registerUser.rejected, (state, action) => {
        
        
        state.loading = false;
        state.error = action.payload;
        toast.error(`🦄${action.payload}` , {
          position: "bottom-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
          });
      });
  },
});

export const selectLogin = (state: RootState) => state.register;

export default registerSlice.reducer;
