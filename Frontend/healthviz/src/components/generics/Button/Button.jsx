import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

export default class Button extends React.Component {
  render() {
    return (
      <div className='button'>
        <button
          className={`button-content ${
            this.props.primary ? 'primary' : 'secondary'
          } ${this.props.size}`}
          type={this.props.type}>
          {this.props.text}
        </button>
      </div>
    );
  }
}

Button.propTypes = {
  primary: PropTypes.bool.isRequired,
  type: PropTypes.oneOf(['button', 'reset', 'submit']).isRequired,
  size: PropTypes.oneOf(['big', 'medium', 'small']).isRequired,
  text: PropTypes.string.isRequired,
};
