import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthSliceProps, UserAuthProps } from "./interfaces";

const authSliceInitialState: AuthSliceProps = {
  logged: false,
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState: authSliceInitialState,
  reducers: {
    signIn: (state, action: PayloadAction<UserAuthProps>) => {
      state.logged = true;
      state.user = action.payload;
    },
    signOut: (state) => {
      state.logged = false;
      state.user = null;
    }
  }
})

export const { signIn, signOut } = authSlice.actions;
export default authSlice.reducer;