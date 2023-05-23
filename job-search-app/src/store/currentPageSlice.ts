import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface CurrentPageState {
  value: number;
}

const initialState: CurrentPageState = {
  value: 0,
};

const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    setCurrentPageValue: (state, action: PayloadAction<number>) => {
      state.value = action.payload;
    },
  },
});

export const { setCurrentPageValue } = currentPageSlice.actions;
export default currentPageSlice.reducer;
