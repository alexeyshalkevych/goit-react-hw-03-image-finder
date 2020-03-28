import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, onImageClick }) => (
  <ul className="ImageGallery">
    {items.map(image => (
      <ImageGalleryItem
        key={image.id + image.webformatURL}
        {...image}
        onImageClick={onImageClick}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
};

export default ImageGallery;
