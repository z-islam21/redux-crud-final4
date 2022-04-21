import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Dashboard/Dashboard";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import AddStudent from "./components/AddStudent/AddStudent";

class App extends React.Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            {/* <Route path="/add-student" component={<AddStudent />} /> */}
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
