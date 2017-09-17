import { createMuiTheme } from 'material-ui/styles';
import createPalette from 'material-ui/styles/createPalette';

const DarkTheme = createMuiTheme({
  palette: createPalette({
    type: 'dark' // Switching the dark mode on is a single property value change.
  })
});

const LightTheme = createMuiTheme({
  palette: createPalette({
    type: 'light' // Switching the dark mode on is a single property value change.
  })
});

export { LightTheme, DarkTheme };
export default DarkTheme;
