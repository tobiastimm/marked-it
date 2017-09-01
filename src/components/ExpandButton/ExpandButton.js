import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';
import KeyBoardArrowDown from 'material-ui-icons/KeyboardArrowDown';
import KeyBoardArrowUp from 'material-ui-icons/KeyboardArrowUp';

const withArrow = expanded =>
  expanded ? <KeyBoardArrowUp /> : <KeyBoardArrowDown />;

const ExpandButton = ({ expanded, onClick }) =>
  <IconButton onClick={onClick}>
    {withArrow(expanded)}
  </IconButton>;

ExpandButton.propTypes = {
  expanded: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired
};

export default ExpandButton;
