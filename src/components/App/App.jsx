import { Component } from 'react';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Spinner } from 'components/Loader/Loader';
import { Modal } from 'components/Modal/Modal';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 0,
    cardSet: [],
    selectedImage: null,
    loading: false,
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;
    const URL = `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=20731913-04720c2299aa0ca3b12520f7d&image_type=photo&orientation=horizontal&per_page=12`;

    if (page !== prevState.page || searchQuery !== prevState.searchQuery) {
      this.setState({ loading: true });

      fetch(URL)
        .then(res => res.json())
        .then(res =>
          this.setState(p => ({
            cardSet: [...p.cardSet, ...res.hits],
          })),
        )
        .catch(e => console.log(e))
        .finally(() => this.setState({ loading: false }));
    }
  }

  onSubmit = data => {
    this.setState({
      cardSet: [],
      searchQuery: data,
      page: 1,
    });
  };

  onloadMore = () => {
    this.setState(p => ({ page: p.page + 1 }));
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
    const { cardSet, selectedImage, loading } = this.state;

    return (
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem items={cardSet} onClick={this.onSelectImage} />
        </ImageGallery>
        {loading && <Spinner />}
        {cardSet.length > 0 && <Button onClick={this.onloadMore} />}
        {selectedImage && <Modal image={selectedImage} closeModal={this.onCloseModal} />}
      </StyledApp>
    );
  }
}
