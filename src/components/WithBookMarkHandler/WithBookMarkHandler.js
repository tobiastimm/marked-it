import React from 'react';
import Bookmark from '../Bookmark';
import BookmarkGroup from '../BookmarkGroup';

const withBookmarkHandler = bookmark => {
  if (bookmark.children) {
    return (
      <BookmarkGroup
        id={bookmark.id}
        title={bookmark.title}
        bookmarks={bookmark.children}
      />
    );
  }
};
export default withBookmarkHandler;
