import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { axiosInstance } from '../../api/axios.config';
import { RootState } from '../store';
import { Bounce, toast } from 'react-toastify';
import CookieService from '../../Services/CreateServices';
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
export const userLogin = createAsyncThunk(
  "login/userLogin",
  async ({ identifier, password }: { identifier: string; password: string }, thunkAPI) => {
    try {
      const { data } = await axiosInstance.post(`/api/auth/local`, {
        identifier,
        password,
      });
      return data;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response?.data?.error?.message || "Login failed");
    }
  }
);

// ✅ Slice definition
const loginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state) => {
        state.loading = true;
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        console.log(action.payload);
        state.loading = false;
        state.data = action.payload;
        const date = new Date();
        const IN_DAYS= 5;
        
        date.setTime(date.getTime() + IN_DAYS * 24 * 60 * 60 * 1000);
        const options = {path:"/", expires:date}
        CookieService.set("Jwt",action.payload.jwt,options);
        state.error = null;
        toast.success( `😉🤗 Welcom ${action.payload.user.username}`, {
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
      .addCase(userLogin.rejected, (state, action) => {
        
        
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

export const selectLogin = (state: RootState) => state.login;

export default loginSlice.reducer;
