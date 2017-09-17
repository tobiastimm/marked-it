import React from 'react';
import PropTypes from 'prop-types';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import styled from 'styled-components';
import Search from '../../../components/Search';

const Wrapper = styled.div`width: 100%;`;
const Title = styled(Typography)`flex: 1;`;
const SearchWrapper = styled.div`flex: 3;`;

const Header = () => (
  <Wrapper>
    <AppBar position="fixed" color="default">
      <Toolbar>
        <Title type="title" color="inherit">
          Marked it!
        </Title>
        <SearchWrapper>
          <Search />
        </SearchWrapper>
      </Toolbar>
    </AppBar>
  </Wrapper>
);

export default Header;
