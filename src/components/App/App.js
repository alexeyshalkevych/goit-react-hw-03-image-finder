import React, { Component } from 'react';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import ModalWindow from '../Modal/Modal';
import * as imageApi from '../../services/images-api';
import './App.css';

export default class App extends Component {
  state = {
    searchQuery: '',
    images: [],
    page: 1,
    // loading: false,
    largeImageUrl: '',
    isOpen: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { searchQuery } = this.state;

    if (prevState.searchQuery !== searchQuery) {
      this.fetchImages();
    }
  }

  handleImageClick = imageUrl => {
    this.setState({ largeImageUrl: imageUrl, isOpen: true });
  };

  handleModalClose = () => {
    this.setState({ largeImageUrl: '', isOpen: false });
  };

  fetchImages = () => {
    const { searchQuery, page } = this.state;

    // this.setState({ loading: true });

    imageApi
      .fetchImages(searchQuery, page)
      .then(images =>
        this.setState(state => ({
          images: [...state.images, ...images],
          page: state.page + 1,
        })),
      )
      // eslint-disable-next-line no-console
      .catch(console.error);
    // .finally(() => this.setState({ loading: false }));
  };

  handleSearchSubmit = query => {
    this.setState({ searchQuery: query, images: [], page: 1 });
  };

  render() {
    const { images, largeImageUrl, isOpen } = this.state;

    return (
      <div className="App">
        <SearchBar onSubmit={this.handleSearchSubmit} />
        {images.length > 0 && (
          <ImageGallery items={images} onImageClick={this.handleImageClick} />
        )}
        {isOpen && (
          <ModalWindow
            largeImg={largeImageUrl}
            onClose={this.handleModalClose}
          />
        )}
      </div>
    );
  }
}
