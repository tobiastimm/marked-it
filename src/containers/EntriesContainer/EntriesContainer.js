import React from 'react';
import { connect } from 'react-redux';
import List, { ListSubheader } from 'material-ui/List';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { rem } from 'polished';
import BookmarkFolder from 'components/BookmarkFolder';
import { withTheme } from 'material-ui/styles';
import { fetchActiveFolder } from 'actions/ActiveFolderActions';

import { media } from 'lib/util';

const Wrapper = styled.div`
  min-width: ${rem('450px')};
  ${media.desktop`min-width: ${rem('350px')}`};
  ${media.tablet`min-width: ${rem('250px')}`};
  flex-grow: 1;
`;

const EntriesList = withTheme(styled(List)`
  background-color: ${props => props.theme.palette.background.paper};
`);

const EntriesContainer = ({ entries, setActiveFolder }) =>
  <Wrapper>
    <EntriesList>
      {entries.map(entry =>
        <BookmarkFolder
          key={entry.id}
          setActiveFolder={setActiveFolder}
          {...entry}
        />
      )}
    </EntriesList>
  </Wrapper>;

const mapStateToProps = state => ({ entries: state.entries });

const mapDispatchToProps = dispatch => ({
  setActiveFolder: id => {
    dispatch(fetchActiveFolder(id));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(EntriesContainer);
