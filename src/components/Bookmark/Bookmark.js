import React from 'react';
import PropTypes from 'prop-types';
import { ListItem, ListItemText } from 'material-ui/List';
import styled from 'styled-components';

const Bookmark = ({ id, title, url }) =>
  <ListItem dense>
    <ListItemText primary={title} secondary={url} />
  </ListItem>;

Bookmark.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string
};

Bookmark.defaultProps = {
  url: ''
};

export default Bookmark;
