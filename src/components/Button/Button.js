import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export default class Button extends Component {
  static propTypes = {
    onClick: PropTypes.func.isRequired,
  };

  buttonRef = createRef();

  componentDidMount() {
    const { current } = this.buttonRef;

    window.scrollTo({
      top: current.offsetTop,
      behavior: 'smooth',
    });
  }

  render() {
    const { onClick } = this.props;

    return (
      <button
        className="Button"
        type="button"
        onClick={onClick}
        ref={this.buttonRef}
      >
        Load more
      </button>
    );
  }
}
