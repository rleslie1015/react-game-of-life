import React, { useState } from "react";
//components
import Board from './Board';
import Rules from './Rules';
// preset data
import {squares1} from './presets';

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
  const [gen, setGen] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  // the following constructs a two dimensional array 
  // 25 arrays with length of 25 and every value in each array is 0
  const [squares, setSquares] = useState(() => { // using an arrow function so this only renders once
    return Array.from({length: 25}).map(() => Array.from({length: 25}).fill(0))
  })
  
  let t;
  // function for counting neighbors takes in the index of row and column
  const countLiveNeibors = (r, c) => {
    // for squares[i][j] example squares[1][1] the neighbors are
    // top neibors 
      // 0, 0 ==== squares[i-1][j-1]
      // 0, 1 ==== squares[i-1][j-0]
      // 0, 2 ==== squares[i-1][j+1]

    // side neibors
      // 1, 0 ==== squares[i-0][j-1]
      // 1, 2 ==== squares[i-0][j+1]

    // bottom neibors
      // 2, 0 ==== squares[i+1][j-1]
      // 2, 1 ==== squares[i+1][j-0]
      // 2, 2 ==== squares[i+1][j+1]

      // you can get all neibors by adding or subtracting 0, -1, or 1 each time 
      // 0, 0 -> 0 + 0 and 0 + 1 == 0, 1

    // set a variable for the count 
    let liveCount = 0;

    // how to check each neibor
    // we have i and j 
    // we need to change i with -1, 0 and 1
    //  we need to change i with -1, 0 and 1

    // ?????????????????????????????????????????????????????????????????????????????????????????????????

       // loop through numbers needed to select all neibors 
    for (let x = -1; x <= 1; x += 1) { // loops through numbers -1, 0, and 1
      for (let y = -1; y <= 1; y += 1) { // loops through numbers -1, 0, and 1
        
        let i = r + x,
            j = c + y;
          console.log(i, j)
          if (i >= 0 && i < 25 && j >= 0 && j < 25 && !(y === 0 && x === 0) ) {
            console.log('test', i, j)
          } // i is within range
        
          //if (i >= 0 && i < 25  // i is within range
          //   && j >= 0 && j < 25 // j is within range
          //   && !(y === 0 && x === 0) // not itself
          //   && squares[i][j]) { // square is live (not 0)
        if (i >= 0 && i < 25 && j >= 0 && j < 25 && !(y === 0 && x === 0) && squares[i][j]) { 
              console.log('live', i, j)
              liveCount += 1; 
            }
      } 
    }
    // return the count
    return liveCount;
  }

   const runSimulation = () => {
    // update generation
    setGen(gen + 1)

    // if simulation is stopped return
    if (isRunning == false) {
      return;
    }

    // loop over each square checking for the status of live neibors
    squares.forEach((row, i) =>{
      row.forEach((column, j) =>{

        // check neibors
        let neighbors = countLiveNeibors(i, j)
        // console.log(neighbors)
        // if/else statement --> if for if square is alive and else for if square is dead
        if (squares[i][j]) {
          // if 1 or no neighbors or if more than 4 neibors
          if (neighbors <= 1 || neighbors >= 4){
            // it dies
            squares[i][j] = 0
          }
        } else {
          // if the perfect amount of neighbors
          if (neighbors === 3) {

            // dead square comes alive 
            squares[i][j] = 1
          }
        }
      })
    })
    // recursively call the function again every second
    t = setTimeout(runSimulation, 1000);
  }

  const startSimulation = () => {
    // sets running state
    setIsRunning(true)
    // call runSimulation() to start the algo
    runSimulation()
  }

  const stopSimulation = () => {
    clearInterval(t)
    // sets running state
    setIsRunning(false)
  }

  const preset1 = () => {
    // sets the square state with presets imported from presets file
    setSquares([...squares1])
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
            <Board squares={squares} setSquares={setSquares} />
        </Grid>

        {/* Game controls */}
        <Grid item className={classes.controlSection}>
          <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Buttons for controlling game of life">
            <Button onClick={startSimulation}>Start</Button>
            <Button onClick={stopSimulation}>Stop</Button>
            <Button>Reset</Button>
          </ButtonGroup>
          <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Buttons for setting starting point with preset squares">
            <Button onClick={preset1}>Preset 1</Button>
          </ButtonGroup>
        </Grid>
      </Grid>
    </Container>
  );
}

export default App;
