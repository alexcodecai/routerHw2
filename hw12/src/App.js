import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Users from "./component/Users";
import Home from "./component/Home";
import UserDetail from "./component/UserDetail";
import Login from "./component/Login";
import "./App.css"
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/users" exact component={Users} />
            <Route path="/login" exact component={Login} />
            <Route path="/users/:id" exact component={UserDetail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
