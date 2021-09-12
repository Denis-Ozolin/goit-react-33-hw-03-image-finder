import { Component } from 'react';
// import URL from '../../api/pixabuUrl';
import { Searchbar } from 'components/Searchbar/Searchbar';
import { ImageGallery } from 'components/ImageGallery/ImageGallery';

export class App extends Component {
  state = {
    searchValue: '',
  };

  searchSubmitHandler = data => {
    this.setState({
      searchValue: data,
    });
  };

  render() {
    return (
      <>
        <Searchbar onSubmit={this.searchSubmitHandler} />
        <ImageGallery item={this.state.searchValue} />
      </>
    );
  }
}
