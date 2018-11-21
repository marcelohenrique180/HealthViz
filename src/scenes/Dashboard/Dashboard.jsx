import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import Menu from '../../components/Menu/Menu';
import Initial from '../Initial/Initial';
import SearchPatient from '../SearchPatient/SearchPatient';
import Patient from '../Patient/Patient';
import Patients from '../Patients/Patients';
import './Dashboard.scss';

export default class Dashboard extends React.Component {
  render() {
    return (
      <div className='dashboard'>
        <Navbar />
        <div className='dashboard-content'>
          <Switch>
            <Route path='/inicial' exact component={Initial} />
            <Route path='/pesquisar-paciente' exact component={SearchPatient} />
            <Route path='/paciente/:id' exact component={Patient} />
            <Route path='/pacientes' exact component={Patients} />
            <Redirect to='/inicial' />
          </Switch>
        </div>
        <Menu />
      </div>
    );
  }
}
