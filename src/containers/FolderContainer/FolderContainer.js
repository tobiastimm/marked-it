import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import List, { ListSubheader } from 'material-ui/List';
import styled from 'styled-components';
import Grid from 'material-ui/Grid';
import Paper from 'material-ui/Paper';
import { withTheme } from 'material-ui/styles';
import { rem, darken } from 'polished';
import Divider from 'material-ui/Divider';
import Bookmark from 'components/Bookmark';

const withDivider = (entry, isLast) => {
  if (!isLast) {
    return (
      <div key={entry.id}>
        <Bookmark {...entry} />
        <Divider />
      </div>
    );
  }
  return <Bookmark key={entry.id} {...entry} />;
};

const Wrapper = styled.div`flex-grow: 5;`;

const FoldersList = withTheme(styled(List)`
  background-color: ${props =>
    darken(0.1, props.theme.palette.background.paper)};
   height: 300vw;
`);

const FolderContainer = ({ activeFolder }) =>
  <Wrapper>
    <FoldersList dense>
      {activeFolder.entries.map(
        (entry, index) =>
          !!entry.url &&
          withDivider(entry, index === activeFolder.entries.length - 1)
      )}
    </FoldersList>
  </Wrapper>;

FolderContainer.propTypes = {
  activeFolder: PropTypes.shape({
    id: PropTypes.string,
    entries: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string,
        title: PropTypes.string,
        url: PropTypes.string
      })
    )
  })
};

FolderContainer.defaultProps = {
  activeFolder: undefined
};

const mapStateToProps = state => ({ activeFolder: state.activeFolder });

export default connect(mapStateToProps)(FolderContainer);
