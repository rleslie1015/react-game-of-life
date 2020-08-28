import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

//theme
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';



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
     <div style={{margin: 20}} />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);
