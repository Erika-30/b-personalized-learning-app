import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Assessment from "./components/Assessment";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/assessment" component={Assessment} />
          {/* Otras rutas */}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
