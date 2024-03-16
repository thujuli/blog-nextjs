import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface UserState {
  id: string;
  username: string;
  email: string;
  password: string;
  role: string;
}

const initialState: UserState = {
  id: "",
  email: "",
  password: "",
  role: "",
  username: "",
};

const userSlice = createSlice({
  name: "user",
  //   initialState: { data: { ...initialState } },
  initialState,
  reducers: {
    setSuccessLogin: (state, action: PayloadAction<UserState>) => {
      //   state.data = action.payload;
      return { ...state, ...action.payload };
    },
  },
});

export const { setSuccessLogin: setSuccessLoginAction } = userSlice.actions;
export default userSlice.reducer;
