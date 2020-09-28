import React from "react";
import "./App.css";
import Mainpage from "./components/Mainpage";
import Login from "./components/Login";
import { HashRouter as Router, Route, Link, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/*Роутер*/}
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/main" component={Mainpage} />
        </Switch>
      </Router>
      {/*Роутер*/}
    </div>
  );
}

export default App;
