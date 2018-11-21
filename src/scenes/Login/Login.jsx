import React from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '../../components/generics/Button/Button';
import Input from '../../components/generics/Input/Input';
import './Login.scss';

export default class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div className='login'>
        <Paper className='login-content' elevation={1}>
          <form className='form-login'>
            <Input
              name='email'
              type='email'
              required={true}
              value={this.state.email}
              onChange={this.handleChange}
              text='E-mail'
            />
            <Input
              name='password'
              type='password'
              required={true}
              value={this.state.password}
              onChange={this.handleChange}
              text='Senha'
            />
            <Button primary={false} type='submit' size='big' text='Entrar' />
          </form>
        </Paper>
      </div>
    );
  }
}
