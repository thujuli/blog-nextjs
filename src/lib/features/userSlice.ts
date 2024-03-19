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
      // set data to local storage
      localStorage.setItem("success-login", action.payload.id);

      // return data to global state
      return { ...state, ...action.payload };
    },
    setLogout: () => {
      localStorage.removeItem("success-login");
      return initialState;
    },
  },
});

export const { setSuccessLogin: setSuccessLoginAction, setLogout } =
  userSlice.actions;
export default userSlice.reducer;
