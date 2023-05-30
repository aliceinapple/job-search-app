import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IJobCard } from "../components/JobCard";

interface mainDataState {
  value: IJobCard[];
}

const initialState: mainDataState = {
  value: [],
};

const mainDataSlice = createSlice({
  name: "mainData",
  initialState,
  reducers: {
    setMainData: (state, action: PayloadAction<IJobCard[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setMainData } = mainDataSlice.actions;
export default mainDataSlice.reducer;
