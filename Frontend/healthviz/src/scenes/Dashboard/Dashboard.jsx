import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Navbar />
        <div className='dashboard-content'>
          <Switch>
            <Route path='/inicial' exact />
            <Route path='/paciente' exact />
            <Route path='/pacientes' exact />
            <Redirect to='/inicial' />
          </Switch>
        </div>
        <Menu />
      </div>
    );
  }
}
