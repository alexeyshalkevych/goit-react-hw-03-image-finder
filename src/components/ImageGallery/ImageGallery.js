import React from 'react';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroller';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import SpinLoader from '../Loader/Loader';

const ImageGallery = ({
  items,
  onImageClick,
  onImageScroll,
  hasMore,
  isOpen,
  onClose,
}) => (
  <InfiniteScroll
    pageStart={0}
    loadMore={onImageScroll}
    hasMore={hasMore}
    loader={<SpinLoader key={Date.now} />}
  >
    <ul className="ImageGallery">
      {items.map(image => (
        <ImageGalleryItem
          key={image.id + image.webformatURL}
          {...image}
          onImageClick={onImageClick}
          isOpen={isOpen}
          onClose={onClose}
        />
      ))}
    </ul>
  </InfiniteScroll>
);

ImageGallery.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
  onImageClick: PropTypes.func.isRequired,
  onImageScroll: PropTypes.func.isRequired,
  hasMore: PropTypes.bool.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default ImageGallery;
