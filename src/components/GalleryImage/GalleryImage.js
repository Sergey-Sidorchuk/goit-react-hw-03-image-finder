import React from 'react';
import PropTypes from 'prop-types';

const GalleryImage = ({ children }) => (
    <ul className="GalleryImage">{children}</ul>
);
GalleryImage.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GalleryImage;