import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import Menu, { MenuItem } from 'material-ui/Menu';
import MoreVertIcon from 'material-ui-icons/MoreVert';
import styled from 'styled-components';
import {
  compose,
  branch,
  renderNothing,
  withState,
  withHandlers
} from 'recompose';

const Wrapper = styled.div``;

const hideIfNoData = hasNoData => branch(hasNoData, renderNothing);

const conditional = hideIfNoData(
  ({ actions }) => !(actions && actions.length > 0)
);

const enhance = compose(
  withState('isOpen', 'toggleMenu', false),
  withState('anchorEl', 'setAnchorEl', undefined),
  withHandlers({
    openMenu: ({ setAnchorEl, toggleMenu }) => event => {
      setAnchorEl(anchorEl => event.currentTarget);
      toggleMenu(isOpen => true);
    },
    closeMenu: ({ toggleMenu }) => () => toggleMenu(isOpen => false)
  })
);

const BookmarkActions = conditional(
  enhance(({ id, isOpen, openMenu, closeMenu, anchorEl, actions }) =>
    <Wrapper>
      <IconButton
        aria-label="More"
        aria-owns={isOpen ? `${id}_menu` : null}
        aria-haspopup="true"
        onClick={openMenu}
      >
        <MoreVertIcon />
      </IconButton>;
      {!!actions.length &&
        <Menu
          id={`${id}_menu`}
          open={isOpen}
          onRequestClose={closeMenu}
          anchorEl={anchorEl}
          style={{ maxHeight: 48 * 4.5 }}
          MenuListProps={{
            style: {
              width: 200
            }
          }}
        >
          {actions.map(action =>
            <MenuItem key={action.id} onClick={action.onClick}>
              {action.title}
            </MenuItem>
          )}
        </Menu>}
    </Wrapper>
  )
);

BookmarkActions.propTypes = {
  id: PropTypes.number.isRequired,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      icon: PropTypes.element,
      onClick: PropTypes.func.isRequired
    })
  )
};

BookmarkActions.defaultProps = {
  actions: []
};

export default BookmarkActions;
