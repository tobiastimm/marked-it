import React from 'react';
import PropTypes from 'prop-types';
import withBookmarkHandler from '../WithBookMarkHandler';

const BookmarkGroup = ({ id, title, bookmarks }) => {
  console.log('GROUP');
  return (
    <div>
      <h4>
        {title}
      </h4>
      <ul>
        {bookmarks.map(bookmark => withBookmarkHandler(bookmark))}
      </ul>
    </div>
  );
};
BookmarkGroup.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  bookmarks: PropTypes.arrayOf(PropTypes.object).isRequired
};

BookmarkGroup.defaultProps = {
  bookmarks: []
};

export default BookmarkGroup;
