import React, { Component } from 'react';
import { ModalOverlay, ModalWindow } from './Modal.styled';

export class Modal extends Component {
  // componentDidMount() {
  //   window.addEventListener('keydown')
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('keydown')
  // }

  closeModal = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { largeImageURL, tags } = this.props.image;

    return (
      <ModalOverlay onClick={this.closeModal}>
        <ModalWindow>
          <img src={largeImageURL} alt={tags} />
        </ModalWindow>
      </ModalOverlay>
    );
  }
}
