import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';

const Wrapper = styled.div`width: 100%;`;

const Title = styled(Typography)`
    flex: 1;
`;
const Header = () =>
  <Wrapper>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Title type="title" color="inherit">
          Marked it!
        </Title>
      </Toolbar>
    </AppBar>
  </Wrapper>;

export default Header;
