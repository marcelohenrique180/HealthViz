import React from 'react';
import PropTypes from 'prop-types';
import './SelectInput.scss';

export default class SelectInput extends React.Component {
  renderOptions() {
    return this.props.options.map(option => {
      return (
        <option value={option.id} key={option.id}>
          {option.name}
        </option>
      );
    });
  }

  render() {
    return (
      <div className='select-input'>
        <select
          className='select-input-content'
          name={this.props.name}
          required={this.props.required}
          multiple={this.props.multiple}
          onChange={this.props.onChange}
          defaultValue='null'>
          <option value='null'>{this.props.defaultValueText}</option>
          {this.renderOptions()}
        </select>
        <span className='highlight' />
        <span className='bar' />
        <label htmlFor={this.props.name}>{this.props.text}</label>
      </div>
    );
  }
}

SelectInput.propTypes = {
  options: PropTypes.array.isRequired,
  name: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  defaultValueText: PropTypes.string.isRequired,
  required: PropTypes.bool.isRequired,
  multiple: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
};
