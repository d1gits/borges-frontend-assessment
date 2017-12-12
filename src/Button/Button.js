import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Button.css';

class Button extends Component {

  /* istanbul ignore next */
  constructor(props) {
    super(props);
    this.boundOnClick = this.onClick.bind(this);
  }

  onClick() {
    this.props.onClick(this.props.value);
  }

  render() {

    return (

      <button type="button" className='button' onClick={this.boundOnClick}>
        {this.props.children}
      </button>

    );

  }

}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired
};

export default Button;
