export const ImageGalleryItem = ({ items }) => {
  return items.map(({ id, webformatURL, tags }) => (
    <li key={id}>
      <img width="260px" src={webformatURL} alt={tags} className="ImageGalleryItem-image" />
    </li>
  ));
};

// largeImageURL
