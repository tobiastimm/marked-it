import React from 'react';
import PropTypes from 'prop-types';
import BookmarkFolder from '../BookmarkFolder';
import Bookmark from '../Bookmark';

const BookmarkEntry = props => {
  if (props.children) {
    return <BookmarkFolder {...props} />;
  }
  return <Bookmark {...props} />;
};

BookmarkEntry.propTypes = {
  props: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string,
    url: PropTypes.string,
    children: PropTypes.arrayOf(PropTypes.object)
  })
};

BookmarkEntry.defaultProps = {
  props: {
    id: ''
  }
};

export default BookmarkEntry;
