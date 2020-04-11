import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Modal from '../Modal/Modal';

const ImageGalleryItem = ({
  webformatURL,
  largeImageURL,
  onImageClick,
  isOpen,
  onClose,
}) => {
  const galleryImage = useRef();
  const modalImage = useRef();

  const clickImage = e => {
    if (e.target.alt !== 'item-img') return;

    modalImage.current = galleryImage.current;

    onImageClick();
  };

  return (
    <li className="ImageGalleryItem" onClick={clickImage}>
      <img
        src={webformatURL}
        alt="item-img"
        className="ImageGalleryItem-image"
        ref={galleryImage}
      />
      {modalImage.current === galleryImage.current && (
        <Modal isOpen={isOpen} onClose={onClose}>
          <img src={largeImageURL} alt="item-large-img" ref={modalImage} />
        </Modal>
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  webformatURL: PropTypes.string.isRequired,
  largeImageURL: PropTypes.string.isRequired,
  onImageClick: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
