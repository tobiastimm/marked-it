import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MuiThemeProvider } from 'material-ui/styles';
import { withTheme } from 'material-ui/styles';

import Content from './Content';
import Theme from './theme';
import GlobalStyles from './GlobalStyles';

const Wrapper = withTheme(styled.div`
  height: 100%;
  width: 100%;
`);

const Layout = ({ children }) =>
  <MuiThemeProvider theme={Theme}>
    <Wrapper>
      <GlobalStyles />
      <Content>
        {children}
      </Content>
    </Wrapper>
  </MuiThemeProvider>;

Layout.propTyes = {
  children: PropTypes.array
};

export default Layout;
