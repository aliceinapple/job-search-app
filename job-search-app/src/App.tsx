import { Fragment, useEffect } from "react";
import Header from "./components/Header";
import Router from "./components/Router";
import "./App.scss";
import { getData } from "./components/API";
import { useDispatch } from "react-redux";
import { setIndustryData } from "./store/industrySlice";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getData("catalogues").then((data) => dispatch(setIndustryData(data)));
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
