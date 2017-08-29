import React from 'react';
import { connect } from 'react-redux';
import BookmarkEntry from 'components/BookmarkEntry';

const BookmarksContainer = ({ entries }) =>
  <div>
    <ul>
      {entries.map(entry => <BookmarkEntry key={entry.id} {...entry} />)}
    </ul>
  </div>;

const mapStateToProps = state => ({ entries: state.bookmarks });

export default connect(mapStateToProps)(BookmarksContainer);
