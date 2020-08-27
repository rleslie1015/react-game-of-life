import React, { useState, useEffect } from "react";
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
//other
import {squares1, squares2} from './presets';

import { useStyles } from './appStyles';

const App = () => {
  const classes = useStyles();
  const [gen, setGen] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [squares, setSquares] = useState(() => { // using an arrow function so this only renders once
    return Array.from({length: 25}).map(() => Array.from({length: 25}).fill(0))
  })
  
  const countLive = (r, c) => {
    let liveCount = 0;

    // loop through numbers needed to select all neibors 
    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) { 
        
        let row = r + x,
            col = c + y;

       //if row is within range  && col is within range  && not counting itself   && square is live 
        if (row >= 0 && row < 25 && col >= 0 && col < 25 && !(y === 0 && x === 0) && squares[row][col]) { 
              liveCount += 1; 
            }
      }
    }
    // return the count
    return liveCount;
  }

  const runOnce = () => {
    squares.forEach((row, i) =>{
      row.forEach((column, j) =>{
         // check neighbors
         let neighbors = countLive(i, j)
         // for live squares
         if (squares[i][j]) {
           // if 1 or no neighbors or if more than 4 neibors
           if (neighbors <= 1 || neighbors >= 4){
             // it dies
             squares[i][j] = 0
           }
        // for dead squares
         } else {
           // if the perfect amount of neighbors
           if (neighbors === 3) {
             // it lives
             squares[i][j] = 1
              }
            }
      })
    })    
    setGen((gen) => gen+=1)
  }
  
  const startSimulation = () => {
    clearInterval(intervalId)
    const interval = setInterval(runOnce, 100);
    setIntervalId(interval);
    setIsRunning(true)
  }

  const stopSimulation = () => {
    clearInterval(intervalId)
    setIsRunning(false)
   }

  const preset1 = () => {
     if (isRunning) return
    // sets the square state with presets imported from presets file
    setSquares([...squares1])
  }
  const preset2 = () => {
    if (isRunning) return
    setSquares([...squares2])
  }

  const reset = () => {
    if (isRunning) return
    setGen(0)
    setSquares([])
    setSquares(Array.from({length: 25}).map(() => Array.from({length: 25}).fill(0)))
  }

  const handleMouseMove = (i,j) => {
    if (isRunning) return

    // if square is 0 replace with 1 and keep 1's 
    squares[i][j] == 0 
    ? squares[i].splice([j], 1, 1) // delete the value of squares[i][k] (0) and replace with 1
    : 
    squares[i].splice([j], 1, 1) 
    
    setSquares([...squares]); 
  }

  const toggleSquare = (x, y) => {
    if (isRunning) return

    squares[x][y] = squares[x][y] ? 0 : 1;
  }
  
  return (
    <Container>
      <header>
        <Typography variant='h1' align='center'>Game of Life</Typography>
      </header>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.rulesSection}>
          <Rules/>
        </Grid>

        <Grid item xs={12} md={7} className={classes.board}>
            <Typography>Generation: {gen} </Typography>
            <Board squares={squares} setSquares={setSquares} toggleSquare={toggleSquare} handleMouseMove={handleMouseMove}/>
        </Grid>

        {/* Game controls */}
        <Grid item className={classes.controlSection}>
          <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Buttons for controlling game of life">
            <Button onClick={runOnce}>Step</Button>
            <Button onClick={startSimulation}>Start</Button>
            <Button onClick={stopSimulation}>Stop</Button>
            <Button onClick={reset}>Reset</Button>
          </ButtonGroup>
          <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Buttons for setting starting point with preset squares">
            <Button onClick={preset1}>Preset 1</Button>
            <Button onClick={preset2}>Preset 2</Button>

          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
