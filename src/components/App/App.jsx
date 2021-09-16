import { Component } from 'react';
// import URL from '../../api/pixabuUrl';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';
import { Modal } from 'components/Modal/Modal';
import { StyledApp } from './App.styled';

export class App extends Component {
  state = {
    searchQuery: '',
    page: 0,
    cardSet: [],
    showModal: false,
    selectedImage: '',
  };

  componentDidUpdate(_, prevState) {
    const { searchQuery, page } = this.state;

    if (page !== prevState.page) {
      fetch(
        `https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=20731913-04720c2299aa0ca3b12520f7d&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(res =>
          this.setState(p => ({
            cardSet: [...p.cardSet, ...res.hits],
          })),
        );
    }
  }

  onSubmit = data => {
    this.setState({
      cardSet: [],
      searchQuery: data,
    });

    this.setState(p => ({ page: p.page + 1 }));
  };

  onloadMore = () => {
    this.setState(p => ({ page: p.page + 1 }));

    // window.scrollTo({
    //   top: document.documentElement.scrollHeight,
    //   behavior: 'smooth',
    // });
  };

  openModal = image => {
    this.setState({
      showModal: true,
      selectedImage: image,
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  render() {
    const { cardSet, page, showModal, selectedImage } = this.state;

    return (
      <StyledApp>
        <Searchbar onSubmit={this.onSubmit} />
        <ImageGallery>
          <ImageGalleryItem items={cardSet} onClick={this.openModal} />
        </ImageGallery>
        {page && cardSet.length && <Button onClick={this.onloadMore} />}
        {showModal && <Modal image={selectedImage} closeModal={this.closeModal} />}
      </StyledApp>
    );
  }
}
