import { Routes, Route } from "react-router-dom";
import JobSearchPage from "../pages/JobSearchPage";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<JobSearchPage />}></Route>
    </Routes>
  );
};

export default Router;
