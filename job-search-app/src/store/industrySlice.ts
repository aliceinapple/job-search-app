import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IOptionType } from "../UI/IndustryInput";

interface IndustryState {
  value: string;
  data: IOptionType[];
}

const initialState: IndustryState = {
  value: "",
  data: [],
};

const industrySlice = createSlice({
  name: "industry",
  initialState,
  reducers: {
    setIndustryValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
    setIndustryData: (state, action: PayloadAction<IOptionType[]>) => {
      state.data = action.payload;
    },
  },
});

export const { setIndustryValue, setIndustryData } = industrySlice.actions;
export default industrySlice.reducer;
