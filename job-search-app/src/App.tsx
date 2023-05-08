import { Fragment } from "react";
import "./App.css";
import Header from "./components/Header";
import Router from "./components/Router";

function App() {
  return (
    <Fragment>
      <Header />
      <Router />
    </Fragment>
  );
}

export default App;
