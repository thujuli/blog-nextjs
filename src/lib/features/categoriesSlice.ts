import { BASE_URL } from "@/utils/helper";
import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface CategoriesData {
  id: string;
  title: string;
}

const initialState: CategoriesData[] = [];

const categoriesSlice = createSlice({
  name: "categories",
  initialState,
  reducers: {
    setCategories: (state, action: PayloadAction<CategoriesData[]>) => {
      //   if (!state.length) {
      //     return [...state, ...action.payload];
      //   }

      //   const data = [...state, ...action.payload];
      //   return data;
      return [...action.payload];
    },
  },
});

export const { setCategories } = categoriesSlice.actions;
export default categoriesSlice.reducer;

// #middleware
export const getCategories = () => {
  return async (dispatch: any) => {
    try {
      const res = await axios.get(BASE_URL + "/categories");
      dispatch(setCategories(res.data));
    } catch (error) {
      console.log(error);
    }
  };
};
