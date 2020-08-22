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
      main: purple[500],
    },
    secondary: {
      main: red[500],
    },
  },
  status: {
    on: red[500],
    off: purple[5000]
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
