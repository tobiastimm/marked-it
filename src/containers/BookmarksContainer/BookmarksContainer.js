import React, { Component } from 'react';
import { connect } from 'react-redux';

class BookmarksContainer extends Component {
  render() {
    console.log(this.props.bookmarks);
    return <div />;
  }
}

const mapStateToProps = state => ({ bookmarks: state.bookmarks });

export default connect(mapStateToProps)(BookmarksContainer);
