import { Routes, Route } from "react-router-dom";
import JobSearchPage from "../pages/JobSearchPage";
import ProfessionPage from "../pages/ProfessionPage";
import Favorites from "../pages/FavoritesPage";
import { IJobCard } from "./JobCard";

export interface Initial {
  initialData: IJobCard[];
}

const Router = ({ initialData }: Initial) => {
  return (
    <Routes>
      <Route path="/" element={<JobSearchPage initialData={initialData} />} />
      <Route
        path="/main"
        element={<JobSearchPage initialData={initialData} />}
      />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/profession/:id" element={<ProfessionPage />} />
    </Routes>
  );
};

export default Router;
