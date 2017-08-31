import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import List, { ListSubheader, ListItemText } from 'material-ui/List';
import { withTheme } from 'material-ui/styles';

import BookmarkEntry from '../BookmarkEntry';

const Wrapper = withTheme(styled.div`
  width: 100%;
  max-width: ${rem('360px')};
  background: ${props => props.theme.palette.background.paper};
`);

const EntryList = styled(List)`

`;

const BookmarkGroup = ({ id, title, children }) =>
  <Wrapper>
    <EntryList
      subheader={
        <ListSubheader>
          {title}
        </ListSubheader>
      }
    >
      {children.map(entry => <BookmarkEntry key={entry.id} {...entry} />)}
    </EntryList>
  </Wrapper>;

BookmarkGroup.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

BookmarkGroup.defaultProps = {
  children: []
};

export default BookmarkGroup;
