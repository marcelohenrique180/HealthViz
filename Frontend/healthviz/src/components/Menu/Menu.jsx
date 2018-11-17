import React from 'react';
import HomeIcon from '../../assets/icons/home.svg';
import HomeSelectedIcon from '../../assets/icons/home-selected.svg';
import PatientIcon from '../../assets/icons/patient.svg';
import PatientSelectedIcon from '../../assets/icons/patient-selected.svg';
import PatientsIcon from '../../assets/icons/patients.svg';
import PatientsSelectedIcon from '../../assets/icons/patients-selected.svg';
import { Link } from 'react-router-dom';
import './Menu.scss';

export default class Menu extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedItem: 1,
    };
  }

  selectItem(item) {
    this.setState({
      selectedItem: item,
    });
  }

  render() {
    return (
      <div className='menu'>
        <Link to='/inicial' onClick={() => this.selectItem(1)}>
          <div
            className={`menu-item ${
              this.state.selectedItem === 1 ? 'selected' : 'unselected'
            }`}>
            <img
              className='menu-item__icon'
              src={this.state.selectedItem === 1 ? HomeSelectedIcon : HomeIcon}
              alt='inicial'
            />
            <span className='menu-item__description'>Inicial</span>
          </div>
        </Link>
        <Link to='/paciente' onClick={() => this.selectItem(2)}>
          <div
            className={`menu-item ${
              this.state.selectedItem === 2 ? 'selected' : 'unselected'
            }`}>
            <img
              className='menu-item__icon'
              src={
                this.state.selectedItem === 2
                  ? PatientSelectedIcon
                  : PatientIcon
              }
              alt='paciente'
            />
            <span className='menu-item__description'>Paciente</span>
          </div>
        </Link>
        <Link to='/pacientes' onClick={() => this.selectItem(3)}>
          <div
            className={`menu-item ${
              this.state.selectedItem === 3 ? 'selected' : 'unselected'
            }`}>
            <img
              className='menu-item__icon'
              src={
                this.state.selectedItem === 3
                  ? PatientsSelectedIcon
                  : PatientsIcon
              }
              alt='pacientes'
            />
            <span className='menu-item__description'>Pacientes</span>
          </div>
        </Link>
      </div>
    );
  }
}
