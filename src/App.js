import React from "react";
import "../src/Styles/appStyles.css";
import Rovers from "./Rovers";
import { Switch, Route } from "react-router-dom";
import PhotoPage from "./PhotoPage";

function App() {
  return (
    <div>
      <div>
        <header className="header">ROV'r</header>
      </div>
      <Switch>
        <Route exact path="/" component={Rovers} />
        <Route path="/rover/photos" component={PhotoPage} />
      </Switch>
      <footer> byNSP © 2018</footer>
    </div>
  );
}

export default App;
