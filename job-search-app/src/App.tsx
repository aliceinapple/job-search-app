import { Fragment, useEffect, useState } from "react";
import Header from "./components/Header";
import Router from "./components/Router";
import "./App.scss";
import { IJobCard } from "./components/JobCard";
import { getData } from "./components/API";
import { useDispatch } from "react-redux";
import { setIndustryData } from "./store/industrySlice";

interface IJobSearchData {
  objects: IJobCard[];
}

function App() {
  const dispatch = useDispatch();
  const [data, setData] = useState<IJobCard[]>([]);

  useEffect(() => {
    getData("vacancies").then((data: IJobSearchData) => setData(data.objects));
    getData("catalogues").then((data) => dispatch(setIndustryData(data)));
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Router initialData={data} />
      </div>
    </Fragment>
  );
}

export default App;
