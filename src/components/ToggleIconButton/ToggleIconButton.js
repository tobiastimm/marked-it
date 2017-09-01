import React from 'react';
import PropTypes from 'prop-types';
import IconButton from 'material-ui/IconButton';

const withToggle = (toggle, OnIcon, OffIcon) =>
  toggle ? <OnIcon /> : <OffIcon />;

const ToggleIconButton = ({ toggle, onIcon, offIcon, onClick }) =>
  <IconButton onClick={onClick}>
    {withToggle(toggle, onIcon, offIcon)}
  </IconButton>;

ToggleIconButton.propTypes = {
  toggle: PropTypes.bool.isRequired,
  onIcon: PropTypes.element.isRequired,
  offIcon: PropTypes.element.isRequired,
  onClick: PropTypes.func
};

ToggleIconButton.defaultProps = {
  onClick: () => {}
};

export default ToggleIconButton;
