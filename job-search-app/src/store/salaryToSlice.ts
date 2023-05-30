import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface SalaryToState {
  value: string;
}

const initialState: SalaryToState = {
  value: "",
};

const salaryToSlice = createSlice({
  name: "salaryTo",
  initialState,
  reducers: {
    setSalaryToValue: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { setSalaryToValue } = salaryToSlice.actions;
export default salaryToSlice.reducer;
