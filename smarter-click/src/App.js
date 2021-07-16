import React from "react";
import Home from "./home";
import Dashboard from "./dashboard";
import Form from "./form";
import Viewer from "./viewer";
import Burger from "./burger";
import "./App.scss";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Burger />
      <Route exact path="/" component={Home} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/viewer" component={Viewer} />
    </div>
  );
}

export default App;
