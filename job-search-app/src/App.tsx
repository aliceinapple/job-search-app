import { Fragment } from "react";
import Header from "./components/Header";
import Router from "./components/Router";
import "./App.scss";

function App() {
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
