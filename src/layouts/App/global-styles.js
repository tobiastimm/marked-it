import { injectGlobal } from 'styled-components';
import 'typeface-roboto';
import Theme from './theme';

/* eslint no-unused-expressions: 0 */
injectGlobal`

 html,
  body {
    height: 100%;
    width: 100%;
  }

 body {
    background-color: ${Theme.palette.background.contentFrame};
    font-family: Roboto, Helvetica, Arial, sans-serif;
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
