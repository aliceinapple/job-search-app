import { Fragment, useEffect } from "react";
import Header from "./components/Header";
import Router from "./components/Router";
import "./App.scss";
import { getData } from "./components/API";
import { useDispatch } from "react-redux";
import { setIndustryData } from "./store/industrySlice";
import { setMainData } from "./store/mainDataSlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData("catalogues").then((data) => dispatch(setIndustryData(data)));
    getData(`vacancies/?page=0&count=4`).then((data) =>
      dispatch(setMainData(data.objects))
    );
  }, [dispatch]);

  return (
    <Fragment>
      <Header />
      <div className="container">
        <Router />
      </div>
    </Fragment>
  );
}

export default App;
