import React from 'react';
import FolderIcon from 'material-ui-icons/Folder';
import FolderOpenIcon from 'material-ui-icons/FolderOpen';
import KeyBoardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import KeyBoardArrowUp from 'material-ui-icons/KeyboardArrowUp';
import {
  ListItem,
  ListItemSecondaryAction,
  ListItemText
} from 'material-ui/List';
import Collapse from 'material-ui/transitions/Collapse';
import { rem } from 'polished';
import PropTypes from 'prop-types';
import { compose, withHandlers, withState } from 'recompose';
import styled from 'styled-components';

import ToggleIconButton from '../ToggleIconButton';

const enhance = compose(
  withState('expand', 'toggleExpand', false),
  withHandlers({
    showMore: props => () => props.toggleExpand(expand => true),
    showLess: props => () => props.toggleExpand(expand => false)
  })
);

const BookmarkFolder = enhance(
  ({
    id,
    title,
    children,
    expand,
    showMore,
    showLess,
    indention,
    setActiveFolder
  }) => {
    const toggleExpand = () => (expand ? showLess() : showMore());

    const Wrapper = styled.div`
      width: 100%;
      padding-left: ${rem(`${indention}px`)};
    `;

    const handleClick = () => {
      setActiveFolder(id);
    };

    return (
      <Wrapper>
        <ListItem
          dense={false}
          disableGutters={false}
          button
          onClick={handleClick}
        >
          <ToggleIconButton
            onIcon={FolderOpenIcon}
            offIcon={FolderIcon}
            toggle={expand}
          />
          <ListItemText primary={title} />
          <ListItemSecondaryAction>
            {!!children.length &&
              <ToggleIconButton
                onClick={toggleExpand}
                onIcon={KeyBoardArrowUp}
                offIcon={KeyBoardArrowDown}
                toggle={expand}
              />}
          </ListItemSecondaryAction>
        </ListItem>
        {!!children.length &&
          <Collapse in={expand} transitionDuration={'auto'} unmountOnExit>
            {children.map(
              entry =>
                !!entry.children &&
                <BookmarkFolder indention={10} key={entry.id} {...entry} setActiveFolder={setActiveFolder} />
            )}
          </Collapse>}
      </Wrapper>
    );
  }
);

BookmarkFolder.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.arrayOf(PropTypes.object).isRequired,
  indention: PropTypes.number
};

BookmarkFolder.defaultProps = {
  children: [],
  indention: 0
};

export default BookmarkFolder;
