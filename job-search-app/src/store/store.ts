import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import industryReducer from "./industrySlice";
import salaryFromReducer from "./salaryFromSlice";
import salaryToReducer from "./salaryToSlice";
import jobCardReducer from "./jobCardSlice";
import favoritesReducer from "./favoritesSlice";
import mainData from "./mainDataSlice";
import currentPage from "./currentPageSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  industry: industryReducer,
  salaryFrom: salaryFromReducer,
  salaryTo: salaryToReducer,
  jobCard: jobCardReducer,
  favorites: favoritesReducer,
  mainData: mainData,
  currentPage: currentPage,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    search: searchReducer,
    industry: industryReducer,
    salaryFrom: salaryFromReducer,
    salaryTo: salaryToReducer,
    jobCard: jobCardReducer,
    favorites: favoritesReducer,
    mainData: mainData,
    currentPage: currentPage,
  },
});

export default store;
