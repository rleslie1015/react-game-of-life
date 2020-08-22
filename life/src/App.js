import React, { useState } from "react";
//components
import Board from './Board';
import Rules from './Rules';
// material ui
import {
  Container,
  Typography,
  Grid,
  Button,
  ButtonGroup
 } from '@material-ui/core';

 import { makeStyles } from '@material-ui/core/styles';
 
 const useStyles = makeStyles({
   board: {
    // border: '1px solid red',
    // height: '100vh',
   },
  rulesSection: {
    background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    borderRadius: 3,
    border: 0,
    color: 'white',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    margin: 20,
  },
  controls: {
    background: 'linear-gradient(#FF8E53 30%, #FE6B8B 90%)',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)', 
    margin: 20,
  }
});


 function App() {
  const classes = useStyles();
  // state
  const [gen, setGen] = useState(1);
  const [isRunning, setIsRunning] = useState(false);
  const [squares, setSquares] = useState(Array.from({length: 25}).map(() => Array.from({length: 25}).fill(0)))


  return (
    <Container>
      <header>
        <Typography variant='h1' align='center'>Game of Life</Typography>
      </header>
      <Grid container>
        <Grid item xs={4} className={classes.rulesSection}>
          <Rules/>
        </Grid>

        <Grid item xs={7} className={classes.board}>
            <Typography>Generation: 0</Typography>
            <Board squares={squares}/>
        </Grid>

        {/* Game controls */}
        <Grid item className={classes.controlSection}>
          <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Buttons for controlling game of life">
            <Button>Start</Button>
            <Button>Stop</Button>
            <Button>Reset</Button>
          </ButtonGroup>
          
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
