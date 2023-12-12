import { userAndToken } from "@/types/userAndToken.type";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface userAndTokenInt {
  userAndToken: userAndToken | null;
}

const initialState: userAndTokenInt = {
  userAndToken: null,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<userAndToken>) => {
      state.userAndToken = action.payload;
    },
    logout: (state) => {
      state.userAndToken = null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { login, logout } = authSlice.actions;

export default authSlice.reducer;
