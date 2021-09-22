import { Component } from 'react';
import { getImages } from '../../services/apiSettings';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Spinner } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { WrongData } from 'components/WrongData/WrongData';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    currentPage: 0,
    cardSet: [],
    selectedImage: null,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, currentPage } = this.state;

    if (currentPage !== prevState.currentPage || searchQuery !== prevState.searchQuery) {
      this.fetchImages(searchQuery, currentPage);
    }
  }

  fetchImages = (query, page) => {
    this.setState({ loading: true });

    getImages(query, page)
      .then(res => {
        this.setState(prevState => ({ cardSet: [...prevState.cardSet, ...res.hits] }));
        this.onScrollPage();
      })
      .finally(() => this.setState({ loading: false }));
  };

  onScrollPage = () => {
    if (this.state.currentPage > 1) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  };

  onSubmit = data => {
    this.setState({
      cardSet: [],
      searchQuery: data,
      currentPage: 1,
    });
  };

  onloadMore = () => {
    this.setState(prevState => ({ currentPage: prevState.currentPage + 1 }));
  };

  onSelectImage = image => {
    this.setState({
      selectedImage: image,
    });
  };

  onCloseModal = () => {
    this.setState({
      selectedImage: null,
    });
  };

  render() {
    const { currentPage, cardSet, selectedImage, loading } = this.state;

    return (
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem items={cardSet} onClick={this.onSelectImage} />
        </ImageGallery>
        {loading && <Spinner />}
        {currentPage === 1 && cardSet.length === 0 && !loading && (
          <WrongData message="No images for this request." />
        )}
        {cardSet.length > 0 && <Button onClick={this.onloadMore} />}
        {selectedImage && <Modal image={selectedImage} closeModal={this.onCloseModal} />}
      </StyledApp>
    );
  }
}
