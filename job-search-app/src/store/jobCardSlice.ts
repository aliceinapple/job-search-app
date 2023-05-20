import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IJobCard } from "../components/JobCard";

interface jobCardState {
  value: IJobCard;
}

const initialState: jobCardState = {
  value: {
    id: 0,
    profession: "",
    firm_name: "",
    type_of_work: {
      title: "",
    },
    town: {
      title: "",
    },
    payment_to: "",
    payment_from: "",
    currency: "",
    vacancyRichText: "",
  },
};

const jobCardSlice = createSlice({
  name: "jobCard",
  initialState,
  reducers: {
    setJobCard: (state, action: PayloadAction<IJobCard>) => {
      state.value = action.payload;
    },
  },
});

export const { setJobCard } = jobCardSlice.actions;
export default jobCardSlice.reducer;
