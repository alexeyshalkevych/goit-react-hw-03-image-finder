import React, { Component } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import * as imageApi from '../../services/images-api';
import 'react-toastify/dist/ReactToastify.css';

class ImageFinder extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    isOpen: false,
    hasMore: false,
    error: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }
  }

  handleImageClick = () => {
    this.setState({ isOpen: true });
  };

  handleModalClose = () => {
    this.setState({ isOpen: false });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    imageApi
      .fetchImages(searchQuery, page)
      .then(images => {
        if (images.length) {
          this.setState(state => ({
            images: [...state.images, ...images],
            page: state.page + 1,
            hasMore: true,
            error: false,
          }));
          return;
        }

        this.setState({ hasMore: false, error: true });
        toast.error(`No images!`);
      })
      // eslint-disable-next-line no-console
      .catch(console.error);
  };

  handleSearchSubmit = query => {
    const { searchQuery } = this.state;

    if (searchQuery === query) return;

    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  render() {
    const { images, isOpen, hasMore, error } = this.state;

    return (
      <div className="ImageFinderContainer">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {images.length > 0 && (
          <ImageGallery
            items={images}
            onImageClick={this.handleImageClick}
            onImageScroll={this.fetchImages}
            hasMore={hasMore}
            isOpen={isOpen}
            onClose={this.handleModalClose}
          />
        )}
        {error && <ToastContainer autoClose={3000} />}
      </div>
    );
  }
}

export default ImageFinder;
