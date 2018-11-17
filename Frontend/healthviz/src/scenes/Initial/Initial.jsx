import React from 'react';
import UserAvatar from '../../components/generics/UserAvatar/UserAvatar';
import './Initial.scss';

export default class Initial extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='initial'>
        <div className='informations'>
          <div className='informations__basic'>
            <UserAvatar
              type='huge'
              user={{
                name: 'Enzo Gabriel da Silva',
                picture:
                  'http://jornalnovafronteira.com.br/wp-content/uploads/2015/11/medico1.jpg',
              }}
            />
            <h3 className='user-name'>Enzo Gabriel da Silva</h3>
          </div>
          <div className='informations__profession'>
            <div className='info user-ward'>
              <span className='info__description'>Ala de atendimento:</span>
              <span className='info__content'>UTI</span>
            </div>
            <div className='info number-patients-ward'>
              <span className='info__description'>
                Número de pacientes na ala:
              </span>
              <span className='info__content'>10</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
