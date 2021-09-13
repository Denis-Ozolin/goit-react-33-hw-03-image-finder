import { Component } from 'react';
// import URL from '../../api/pixabuUrl';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import { Button } from 'components/Button/Button';

export class App extends Component {
  state = {
    searchValue: '',
    page: 0,
    cardSet: [],
  };

  componentDidUpdate(_, prevState) {
    if (this.state.page !== prevState.page) {
      fetch(
        `https://pixabay.com/api/?q=${this.state.searchValue}&page=${this.state.page}&key=20731913-04720c2299aa0ca3b12520f7d&image_type=photo&orientation=horizontal&per_page=12`,
      )
        .then(res => res.json())
        .then(res =>
          this.setState(p => ({
            cardSet: [...p.cardSet, ...res.hits],
          })),
        );
    }
  }

  searchSubmitHandler = data => {
    this.setState({
      cardSet: [],
      searchValue: data,
      page: 1,
    });
  };

  loadMoreHandler = () => {
    this.setState(p => ({ page: p.page + 1 }));

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchSubmitHandler} />
        <ImageGallery item={this.state.searchValue}>
          <ImageGalleryItem items={this.state.cardSet} />
        </ImageGallery>
        {this.state.page >= 1 && <Button onClick={this.loadMoreHandler} />}
      </>
    );
  }
}
