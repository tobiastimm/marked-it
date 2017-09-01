import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import List, { ListItem, ListSubheader, ListItemText } from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { withTheme } from 'material-ui/styles';

import BookmarkEntry from '../BookmarkEntry';

const Wrapper = withTheme(styled.div`
  width: 100%;
  padding-left: ${rem('10px')};
  background: ${props => props.theme.palette.background.paper};
`);

const BookmarkFolder = ({ id, title, children }) =>
  <Wrapper>
    <List
      subheader={
        <ListSubheader>
          {title}
        </ListSubheader>
      }
    >
      {children.map(entry => <BookmarkEntry key={entry.id} {...entry} />)}
    </List>
  </Wrapper>;

BookmarkFolder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

BookmarkFolder.defaultProps = {
  children: []
};

export default BookmarkFolder;
