import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { injectGlobal } from 'styled-components';
import { withTheme } from 'material-ui/styles';
import 'typeface-roboto';
import 'sanitize.css';
/* eslint no-unused-expressions: 0 */

class GlobalStyles extends React.PureComponent {
  render() {
    injectGlobal`
    
     html,
      body {
        height: 100%;
        width: 100%;
      }
    
     body {
        background-color: ${this.props.theme.palette.background.contentFrame};
        font-family: -apple-system, 
                      system-ui,
                      BlinkMacSystemFont,
                      "Segoe UI",
                      Roboto,
                      "Helvetica Neue",
                      Arial,
                      sans-serif;
      }
    
      #root {
        min-height: 100%;
        min-width: 100%;
      }
    
     p,
      label {
        line-height: 1.5em;
      }
    
    `;
    return null;
  }
}

GlobalStyles.propTypes = {
  theme: PropTypes.object.isRequired
};

export default withTheme(GlobalStyles);
