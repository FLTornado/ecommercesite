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
      listSubTitle: '#115293',       
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#e8eaf6',      
    },
    buy: {
      fontColor: '#E5511D',
      bgColor: '#F0CAB6',
    },
    shopcar: {
      fontColor: '#FFF',
      bgColor: '#F40',
    },      
  },
});

export default theme;
