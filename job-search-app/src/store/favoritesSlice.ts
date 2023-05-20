import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IJobCard } from "../components/JobCard";

interface FavoritesState {
  value: IJobCard[];
}

const initialState: FavoritesState = {
  value: [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoritesValue: (state, action: PayloadAction<IJobCard[]>) => {
      state.value = action.payload;
    },
  },
});

export const { setFavoritesValue } = favoritesSlice.actions;
export default favoritesSlice.reducer;
