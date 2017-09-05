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
  overflow-wrap: break-word;
  word-wrap: break-word;
  word-break: break-word;
  -webkit-hyphens: auto;
  hyphens: auto;
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
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  url: PropTypes.string,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.element,
      onClick: PropTypes.func.isRequired
    })
  )
};

Bookmark.defaultProps = {
  url: '',
  actions: []
};

export default Bookmark;
