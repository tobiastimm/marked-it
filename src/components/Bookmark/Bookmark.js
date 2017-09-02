import React from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import styled from 'styled-components';
import { withTheme } from 'material-ui/styles';
import BookmarkActions from '../BookmarkActions';

const BookmarkLink = withTheme(styled.a`
  color: ${props => props.theme.palette.text.secondary};
`);

const Bookmark = ({ id, title, url, actions }) =>
  <ListItem>
    <ListItemText
      primary={title}
      secondary={
        <BookmarkLink href={url}>
          {url}
        </BookmarkLink>
      }
    />
    <ListItemSecondaryAction>
      <BookmarkActions id={id} actions={actions} />
    </ListItemSecondaryAction>
  </ListItem>;

Bookmark.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.element,
      onClick: PropTypes.func.isRequired
    })
  )
};

Bookmark.defaultProps = {
  url: '',
  actions: [{ id: 1, title: 'Test', onClick: () => {} }]
};

export default Bookmark;
