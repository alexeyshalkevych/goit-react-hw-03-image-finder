import React, { Component, createRef } from 'react';
import PropTypes from 'prop-types';

export default class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired,
  };

  backdropRef = createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handlePressKey);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handlePressKey);
  }

  handlePressKey = e => {
    if (e.code !== 'Escape') {
      return;
    }

    this.props.onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.backdropRef;

    if (current && e.target !== current) {
      return;
    }

    this.props.onClose();
  };

  render() {
    const { largeImg } = this.props;

    return (
      <div
        className="Overlay"
        ref={this.backdropRef}
        onClick={this.handleBackdropClick}
      >
        <div className="Modal">
          <img src={largeImg} alt="" />
        </div>
      </div>
    );
  }
}
