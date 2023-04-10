import React from "react";
import { Switch, Route } from "react-router-dom";
import Start from "./pages/start.jsx";
// import Page1 from "./pages/page1";


export default function App() {
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Start} />
        {/* <Route path="/page1" component={Page1} /> */}
     
      </Switch>
    </div>
  );
}
