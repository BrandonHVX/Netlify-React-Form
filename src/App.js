import React from "react";
import { UserForm } from "./components/UserForm";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { StateMachineProvider, createStore } from "little-state-machine";
import Step1 from "../src/components/Step1";
import Step2 from "../src/components/Step2";
import Result from "../src/components/Result";

createStore({
  data: {}
});

function App() {
  return (
    <div className="App">
      <StateMachineProvider>
        <h1>Page Form Wizzard</h1>

        <Router>
          <Route exact path="/" component={Step1} />
          <Route path="/step2" component={Step2} />
          <Route path="/result" component={Result} />
        </Router>
      </StateMachineProvider>
    </div>
  );
}

export default App;
