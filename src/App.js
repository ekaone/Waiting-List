import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { LandingPage } from "./views";
import { FieldOperator } from "./components";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/operator" component={FieldOperator} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
