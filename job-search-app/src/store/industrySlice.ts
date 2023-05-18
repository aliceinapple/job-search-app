import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IndustryState {
  value: string;
}

const initialState: IndustryState = {
  value: "",
};

const industrySlice = createSlice({
  name: "industry",
  initialState,
  reducers: {
    setIndustryValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setIndustryValue } = industrySlice.actions;
export default industrySlice.reducer;
