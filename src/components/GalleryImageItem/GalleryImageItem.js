import React from 'react';
import PropTypes from 'prop-types';

const GalleryImageItem  = ({ alt, src, url, onClick }) => (
  <li className="GalleryImageItem">
    <img
      onClick={onClick}
      src={src}
      alt={alt}
      className="GalleryImageItem-image"
      url={url}
    />
  </li>
);
GalleryImageItem.propTypes = {
  onClick: PropTypes.func.isRequired,
  alt: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};
export default GalleryImageItem;