import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//theme
import { createMuiTheme, makeStyles, ThemeProvider } from '@material-ui/core/styles';
import { red, purple } from '@material-ui/core/colors';



const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#3f51b5',

      
    },
    secondary: {
      main: '#d96878',
    },
  }
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
