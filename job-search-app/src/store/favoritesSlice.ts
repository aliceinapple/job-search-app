import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IJobCard } from "../components/JobCard";

interface FavoritesState {
  value: IJobCard[];
}

const storedFavorites = localStorage.getItem("favorites");
const initialState: FavoritesState = {
  value: storedFavorites ? JSON.parse(storedFavorites) : [],
};

const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    setFavoritesValue: (state, action: PayloadAction<IJobCard[]>) => {
      state.value = action.payload;
      localStorage.setItem("favorites", JSON.stringify(action.payload));
    },
  },
});

export const { setFavoritesValue } = favoritesSlice.actions;
export default favoritesSlice.reducer;
