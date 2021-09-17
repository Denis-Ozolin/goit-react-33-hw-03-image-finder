import { Component } from 'react';
import {
  SearchContainer,
  SearchForm,
  SearchBtn,
  SearchBtnLabel,
  SearchInput,
} from './Searchbar.styled';

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
  };

  render() {
    const { inputValue } = this.state;
    return (
      <SearchContainer>
        <SearchForm onSubmit={this.onSubmitForm}>
          <SearchBtn type="submit">
            <SearchBtnLabel>Search</SearchBtnLabel>
          </SearchBtn>

          <SearchInput
            onChange={this.onChangeValue}
            value={inputValue}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchContainer>
    );
  }
}
