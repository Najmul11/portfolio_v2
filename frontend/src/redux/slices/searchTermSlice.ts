import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type IState = {
  searchTerm: string | null;
};

const initialState: IState = {
  searchTerm: "",
};

const searchTermSlice = createSlice({
  name: "searchTerm",
  initialState,
  reducers: {
    setSearch: (state, action: PayloadAction<string>) => {
      state.searchTerm = action.payload;
    },
  },
});

export const { setSearch } = searchTermSlice.actions;

export default searchTermSlice.reducer;
