import React from 'react';
import PropTypes from 'prop-types';
import List, { ListSubheader } from 'material-ui/List';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

import Theme from 'layouts/App/theme';
import BookmarkEntry from '../BookmarkEntry';

const Wrapper = styled.div`
  width: '100%';
  maxWidth: 360;
  background: ${Theme.palette.background.paper};
`;

const EntryList = styled(List)`

`;

const BookmarkGroup = ({ id, title, children }) =>
  <Wrapper>
    <EntryList
      dense
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
