import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SalaryFromState {
  value: string;
}

const initialState: SalaryFromState = {
  value: "",
};

const salaryFromSlice = createSlice({
  name: "salaryFrom",
  initialState,
  reducers: {
    setSalaryFromValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSalaryFromValue } = salaryFromSlice.actions;
export default salaryFromSlice.reducer;
