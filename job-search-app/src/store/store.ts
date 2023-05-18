import { combineReducers, configureStore } from "@reduxjs/toolkit";
import searchReducer from "./searchSlice";
import industryReducer from "./industrySlice";
import salaryFromReducer from "./salaryFromSlice";
import salaryToReducer from "./salaryToSlice";

const rootReducer = combineReducers({
  search: searchReducer,
  industry: industryReducer,
  salaryFrom: salaryFromReducer,
  salaryTo: salaryToReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

const store = configureStore({
  reducer: {
    search: searchReducer,
    industry: industryReducer,
    salaryFrom: salaryFromReducer,
    salaryTo: salaryToReducer,
  },
});

export default store;
