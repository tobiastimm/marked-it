import React from 'react';
import PropTypes from 'prop-types';

const Bookmark = ({ id, title, url }) => {
  console.log('WHY');
  return (
    <li>
      <a href={url}>
        {title}
      </a>
    </li>
  );
};

Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
};

export default Bookmark;
