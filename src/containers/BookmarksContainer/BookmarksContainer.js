import React from 'react';
import { connect } from 'react-redux';
import List, { ListSubheader } from 'material-ui/List';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import { rem } from 'polished';
import RootFolder from 'components/RootFolder';

const Wrapper = styled(Grid)`
  flexGrow: 1;
`;

const WrappedItem = styled(Grid)`
  padding-left: ${rem('10px')};
  padding-right: ${rem('10px')};
`;

const BookmarksContainer = ({ entries }) =>
  <Wrapper container spacing={0}>
    {entries.map(entry =>
      <WrappedItem item key={entry.id} xs={6}>
        <RootFolder {...entry} />
      </WrappedItem>
    )}
  </Wrapper>;

const mapStateToProps = state => ({ entries: state.bookmarks });

export default connect(mapStateToProps)(BookmarksContainer);
