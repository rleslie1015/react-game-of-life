import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
  playingState: {
    border: '5px solid rgb(44 66 126)'
  },
  title: {
    marginTop: 15,
    [theme.breakpoints.down('sm')]: {
      fontSize: '4em'
    },
  },
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
    width: 625,
    margin: '25, 0',
    [theme.breakpoints.down('xs')]: {
      width: 400,
    },
  },
  gridContainer: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: 'space-between',
    [theme.breakpoints.down('lg')]: {
      flexDirection: 'row'
    },
    [theme.breakpoints.down('sm')]: {
      flexDirection: "column-reverse",
    }, 
  },  
  gridSquare: {
    width: 25,
    height: 20,
    [theme.breakpoints.down('xs')]: {
      width: 16,
      height: 16,
    },
    boxSizing: "border-box",
    border: "1px solid grey",
  },
  button: {
    margin: 5,
  },
  rules: {
    textAlign: 'start',
    color: '#d96878'
  },
  wikiLink: {
    textDecoration: 'none',
    color: '#3f51b5',
  },  
  mainWrapper: {
    minHeight: '100%',

    /* Equal to height of footer */
    /* But also accounting for potential margin-bottom of last child */
    marginNottom: '-50px'
  }
}));

export {useStyles}