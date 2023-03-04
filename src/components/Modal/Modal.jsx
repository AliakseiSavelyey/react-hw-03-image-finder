import PropTypes from 'prop-types';
import { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  static propTypes = {
    largeImg: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseModal);
    window.addEventListener('click', this.onCloseModal);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseModal);
    window.removeEventListener('click', this.onCloseModal);
  }

  onCloseModal = e => {
    if (e.code === 'Escape' || e.target.nodeName !== 'IMG') {
      this.props.closeModal();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay">
        <div className="Modal">
          <img
            src={this.props.largeImg}
            alt=""
            className="Img"
            loading="lazy"
          />
        </div>
      </div>,
      modalRoot,
    );
  }
}

export default Modal;
