import React from 'react';
import List, { ListSubheader } from 'material-ui/List';
import BookmarkEntry from 'components/BookmarkEntry';
import styled from 'styled-components';
import { rem } from 'polished';
import { withTheme } from 'material-ui/styles';

const Wrapper = withTheme(styled.div`
  background: ${props => props.theme.palette.background.paper};
`);

const RootFolder = ({ id, title, children }) =>
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

export default RootFolder;
