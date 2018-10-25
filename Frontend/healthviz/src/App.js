import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="app-content">
        <Switch>
          <Route path="/" exact/>
          <Redirect to="/" />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
