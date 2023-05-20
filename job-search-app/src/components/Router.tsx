import { Routes, Route } from "react-router-dom";
import JobSearchPage from "../pages/JobSearchPage";
import ProfessionPage from "../pages/ProfessionPage";
import Favorites from "../pages/FavoritesPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<JobSearchPage />} />
      <Route path="/main" element={<JobSearchPage />} />
      <Route path="/favorites" element={<Favorites />}></Route>
      <Route path="/profession/:id" element={<ProfessionPage />} />
    </Routes>
  );
};

export default Router;
