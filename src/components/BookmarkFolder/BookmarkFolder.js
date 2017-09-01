import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { rem } from 'polished';
import List, {
  ListItem,
  ListItemText,
  ListItemSecondaryAction
} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { withTheme } from 'material-ui/styles';
import { compose, withState, withHandlers } from 'recompose';
import Avatar from 'material-ui/Avatar';
import FolderIcon from 'material-ui-icons/Folder';
import FolderOpenIcon from 'material-ui-icons/FolderOpen';
import KeyBoardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import KeyBoardArrowUp from 'material-ui-icons/KeyboardArrowUp';

import BookmarkEntry from '../BookmarkEntry';

import ToggleIconButton from '../ToggleIconButton';

const Wrapper = withTheme(styled.div`
  width: 100%;
  padding-left: ${rem('10px')};
  background: ${props => props.theme.palette.background.paper};
`);

const enhance = compose(
  withState('expand', 'toggleExpand', false),
  withHandlers({
    showMore: props => () => props.toggleExpand(expand => true),
    showLess: props => () => props.toggleExpand(expand => false)
  })
);

const BookmarkFolder = enhance(
  ({ id, title, children, expand, showMore, showLess }) => {
    const toggleExpand = () => (expand ? showLess() : showMore());
    return (
      <Wrapper>
        <ListItem dense={false} disableGutters={false} button>
          <Avatar>
            <ToggleIconButton
              onIcon={FolderOpenIcon}
              offIcon={FolderIcon}
              toggle={expand}
            />
          </Avatar>
          <ListItemText primary={title} />
          {!!children.length &&
            <ListItemSecondaryAction>
              <ToggleIconButton
                onClick={toggleExpand}
                onIcon={KeyBoardArrowUp}
                offIcon={KeyBoardArrowDown}
                toggle={expand}
              />
            </ListItemSecondaryAction>}
        </ListItem>
        {!!children.length &&
          <Collapse in={expand} transitionDuration={'auto'} unmountOnExit>
            {children.map(entry => <BookmarkEntry key={entry.id} {...entry} />)}
          </Collapse>}
      </Wrapper>
    );
  }
);

BookmarkFolder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired
};

BookmarkFolder.defaultProps = {
  children: []
};

export default BookmarkFolder;
