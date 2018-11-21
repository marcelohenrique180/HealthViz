import React, { Component } from 'react';
import './App.scss';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './scenes/Login/Login';
import Dashboard from './scenes/Dashboard/Dashboard'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <div className='app-content'>
        <Switch>
          <Route path='/' exact component={Login}/>
          <Route path='/inicial' exact component={Dashboard} />
          <Route path='/pesquisar-paciente' exact component={Dashboard} />
          <Route path='/paciente/:id' exact component={Dashboard} />
          <Route path='/pacientes' exact component={Dashboard} />
          <Redirect to='/' />
        </Switch>
        </div>
      </div>
    );
  }
}

export default App;
