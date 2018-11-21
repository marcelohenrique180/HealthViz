import React from 'react';
import PropTypes from 'prop-types';
import './Input.scss';

export default class Input extends React.Component {
  render() {
    return (
      <div className='input'>
        <input
          className='input-content'
          id={this.props.name}
          name={this.props.name}
          type={this.props.type}
          required={this.props.required}
          maxLength={this.props.maxLength}
          value={this.props.value}
          onChange={this.props.onChange}
        />
        <span className='highlight' />
        <span className='bar' />
        <label htmlFor={this.props.name}>{this.props.text}</label>
      </div>
    );
  }
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf([
    'date',
    'datetime-local',
    'email',
    'month',
    'number',
    'password',
    'tel',
    'text',
    'time',
  ]).isRequired,
  required: PropTypes.bool.isRequired,
  maxLength: PropTypes.number,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
};
