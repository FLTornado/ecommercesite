import { red } from '@material-ui/core/colors';
import { createMuiTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#868883',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e8eaf6',
    },   
  },
});

export default theme;
