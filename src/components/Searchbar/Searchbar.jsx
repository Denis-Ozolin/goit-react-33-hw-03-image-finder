import { Component } from 'react';

export class Searchbar extends Component {
  state = {
    inputValue: '',
  };

  onChangeValue = e => {
    const value = e.currentTarget.value;

    this.setState({
      inputValue: value,
    });
  };

  onSubmitForm = e => {
    e.preventDefault();
    const { inputValue } = this.state;

    this.props.onSubmit(inputValue);
    this.reset();
  };

  reset = () => {
    this.setState({
      inputValue: '',
    });
  };

  render() {
    const { inputValue } = this.state;
    return (
      <header className="Searchbar">
        <form className="SearchForm" onSubmit={this.onSubmitForm}>
          <button type="submit" className="SearchForm-button">
            <span className="SearchForm-button-label">Search</span>
          </button>

          <input
            onChange={this.onChangeValue}
            value={inputValue}
            className="SearchForm-input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
