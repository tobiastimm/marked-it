import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { MuiThemeProvider } from 'material-ui/styles';
import 'sanitize.css';

import Content from './Content';
import Theme from './theme';
import './global-styles';

const Wrapper = styled.div`
    width: '100%',
    maxWidth: 360,
    background:
`;

const Layout = ({ children }) =>
  <MuiThemeProvider theme={Theme}>
    <Wrapper>
      <Content>
        {children}
      </Content>
    </Wrapper>
  </MuiThemeProvider>;

Layout.propTyes = {
  children: PropTypes.array
};

export default Layout;
