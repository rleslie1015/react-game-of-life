import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles({
  rulesSection: {
    // background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: 20,
  },
  controls: {
    // background: 'linear-gradient(#FF8E53 30%, #FE6B8B 90%)',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    padding: '20px 0',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', 
    margin: 20,
  },
  container: {
    maxWidth: 500,
    margin: '30, 0'
  },
  gridSquare: {
    width: 20,
    height: 20,
    boxSizing: "border-box",
    border: "1px solid grey",
  },
  button: {
    margin: 5
  },
  rules: {
    textAlign: 'center'
  },
  popUp: {
    backgroundColor: '#282c34',
  }
});

export {useStyles}