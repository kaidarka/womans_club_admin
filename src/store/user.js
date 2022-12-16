import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import axios from "../axios";

export const fetchUserData = createAsyncThunk(
    "user/fetchUserData",
    async () => {
      try {
        const {data} = await axios.get("/auth/me");
        console.log(data)
        return data
      } catch (e) {
        console.error(e);
      }
    }
  )
;

const initialState = {
  data: null,
  status: "loading",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logout: (state) => {
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.status = "loading";
        state.data = initialState.data;
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.status = "loaded";
        state.data = action.payload;
      })
      .addCase(fetchUserData.rejected, (state) => {
        state.status = "error";
        state.data = initialState.data;
      })
  },
});


export const selectIsAuth = (state) => Boolean(state.user.data);

export const userReducer = userSlice.reducer;
