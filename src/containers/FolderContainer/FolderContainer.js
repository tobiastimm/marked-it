import React from 'react';
import PropTypes from 'prop-types';
import Divider from 'material-ui/Divider';
import List from 'material-ui/List';
import { withTheme } from 'material-ui/styles';
import { darken } from 'polished';
import { connect } from 'react-redux';
import styled from 'styled-components';
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

const Wrapper = styled.div`
  flex-grow: 5;
  overflow-y: auto;
`;

const FoldersList = withTheme(styled(List)`
  background-color: ${props =>
    darken(0.1, props.theme.palette.background.paper)};
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
