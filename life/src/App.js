import React, { useState, useMemo, useCallback, useRef } from "react";
import {useCountRenders} from './useCountRenders'
import { cloneDeep } from 'lodash';

//components
<<<<<<< HEAD
import Board from "./Board";
import Rules from "./Rules";
import ResponsiveDialog from './Rules';
=======
import Board from './Board';
import Rules from './Rules';
// preset data
import {preset2} from './presets';
>>>>>>> 886ebe1e98bf597756a2b31eb13cc52a3c6eb24e

// material ui
import {
  Container,
  Typography,
  Grid,
  Button,
<<<<<<< HEAD
  ButtonGroup,
} from "@material-ui/core";
//other
import { squares1, squares2, squaresL } from "./presets";
import { useStyles } from "./appStyles";
import clonedeep from "lodash.clonedeep";
import { createNewGrid } from "./helpers";

const App = () => {
  const classes = useStyles();
  const [gen, setGen] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [intervalId, setIntervalId] = useState(0);
  const [speed, setSpeed] = useState(100);
  const [squares, setSquares] = useState(() => {
    // using an arrow function so this only renders once
    return Array.from({ length: 25 }).map(() =>
      Array.from({ length: 25 }).fill(0)
    );
  });

  const countLive = (r, c) => {
    let liveCount = 0;

    // loop through numbers needed to select all neibors
    for (let x = -1; x <= 1; x += 1) {
      for (let y = -1; y <= 1; y += 1) {
        let row = r + x,
          col = c + y;

        //if row is within range  && col is within range  && not counting itself   && square is live
        if (
          row >= 0 &&
          row < 25 &&
          col >= 0 &&
          col < 25 &&
          !(y === 0 && x === 0) &&
          squares[row][col]
        ) {
          liveCount += 1;
        }
      }
    }
    // return the count
    return liveCount;
  };

  const runOnce = () => {
    // let copy = clonedeep(squares);

    squares.forEach((row, i) => {
      row.forEach((column, j) => {
        // check neighbors
        let neighbors = countLive(i, j);
        // for live squares
        if (squares[i][j]) {
          // if 1 or no neighbors or if more than 4 neibors
          if (neighbors <= 1 || neighbors >= 4) {
            // it dies
            squares[i][j] = 0;
          }
          // for dead squares
        } else {
          // if the perfect amount of neighbors
          if (neighbors === 3) {
            // it lives
            squares[i][j] = 1;
          }
        }
      });
    });
    // setSquares(copy)
    setGen((gen) => (gen += 1));
  };

  const startSimulation = () => {
    clearInterval(intervalId);
    const interval = setInterval(runOnce, speed);
    setIntervalId(interval);
    setIsRunning(true);
  };

  const stopSimulation = () => {
    clearInterval(intervalId);
    setIsRunning(false);
  };

  // sets the square state with presets imported from presets file
  const preset1 = () => {
    if (isRunning) return;
    setSquares([...squares1]);
  };
  const preset2 = () => {
    if (isRunning) return;
    setSquares([...squares2]);
  };
  const presetL = () => {
    if (isRunning) return;
    setSquares([...squaresL]);
  };

  const reset = () => {
    if (isRunning) return;
    setGen(0);
    setSquares([]);
    setSquares(
      Array.from({ length: 25 }).map(() => Array.from({ length: 25 }).fill(0))
    );
  };

  const handleMouseMove = (i, j) => {
    if (isRunning) return;
    // if square is 0 replace with 1 and keep 1's
    squares[i][j] == 0
      ? squares[i].splice([j], 1, 1) 
      : squares[i].splice([j], 1, 1);
    setSquares([...squares]);
  };

  const toggleSquare = (x, y) => {
    if (isRunning) return;
    squares[x][y] = squares[x][y] ? 0 : 1;
  };

  const random = () => {
    if (isRunning) return;
    let random = createNewGrid();
    for (let i = 0; i < 25; i++) {
			for (let j = 0; j < 25; j++) {
				random[i][j] = Math.round(Math.random());
			}
    }
    setSquares([...random])
=======
  ButtonGroup
} from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
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

const clearSquares = () => {
  return Array.from({length: 25}).map(() => Array.from({length: 25}).fill(0))
}


const  operations  =  [
  [0, 1],
  [0, -1],
  [1, -1],
  [-1, 1],
  [1, 1],
  [-1, -1],
  [1, 0],
  [-1, 0]
];

let interval;

const App = () => {
  // for debugging
  useCountRenders();
  
  const classes = useStyles();
  // ----------------------------------> state <-------------
  const [gen, setGen] = useState(0);
  const genRef = useRef()
  genRef.current = gen

  const [running, setRunning] = useState(false);
  const runningRef = useRef()
  runningRef.current = running

  // the following constructs a two dimensional array 
  // 25 arrays with length of 25 and every value in each array is 0
  const [squares, setSquares] = useState(() => { // using an arrow function so this only renders once
    return clearSquares()
  })
  // -----------------------------> end component state <-------------
 

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
      // set a variable for the count 
    let liveCount = 0;
      
      for (let x = -1; x <= 1; x += 1) { // loops through numbers -1, 0, and 1
        for (let y = -1; y <= 1; y += 1) { // loops through numbers -1, 0, and 1
          
          let i = r + x,
              j = c + y;
        
        
            // if i is within range && j is within range && !(y === 0 && x === 0) // not itself && square is live (not 0)
          if (i >= 0 && i < 5 && j >= 0 && j < 5 && !(x === 0 && y === 0) && squares[i][j]) { 
                console.log('live', i, j)
                liveCount += 1; 
              }
      } 
    }
 
    // return the count
    return liveCount;
  }


// use callback is used to prevent function from being created every render

  const runSimulation = useCallback(() => {
     // update generation
     setGen(genRef.current += 1)

     // if simulation is stopped return
     if (runningRef.current == false) {
       return;
     }
    //  for all values that change in this function we need to store in REFs current values
    let tempboard  = cloneDeep(squares)
    // loop over each square checking for the status of live neibors
    for (let i = 0; i < 25; i++){
      for (let j = 0; j < 25; j++){
        let neighbors = 0
        console.log(`squares[${i}][${j}]`)
        neighbors = countLiveNeibors()
         // if/else statement --> if for if square is alive and else for if square is dead
         if (squares[i][j]) {
           // if 1 or no neighbors or if 4 or more neibors
           if (neighbors <= 1 || neighbors >= 4){
             // it dies
             tempboard[i][j] = 0
             setSquares([...tempboard])
           }
         } else {
           // if the perfect amount of neighbors
           if (neighbors === 3 || neighbors === 2) {
             // dead square comes alive 
             tempboard[i][j] = 1
             setSquares([...tempboard])
           }
         }
      }
    }
  
    // recursively call the function again every second
    interval = setTimeout(runSimulation, 4000);
  }, [])

  const startSimulation = () => {
    // sets running state
   
    if (!running) {
      setRunning(!running);
      runningRef.current = true;
      runSimulation();
    }
  }

  const stopSimulation = () => {
   // sets running state
   if (running) {
     setRunning(!running);
   }

   if (!running) {
     runningRef.current = true;
    //  runSimulation();
   }
   clearInterval(interval)
  }

  const resetSimulation = () => {
    if (running) {
      setRunning(!running)
    }
    setSquares(clearSquares())
  }

  const setPreset = () => {
    // sets the square state with presets imported from presets file
    setSquares([...preset2])
    setGen(0)
>>>>>>> 886ebe1e98bf597756a2b31eb13cc52a3c6eb24e
  }

  return (
    <Container>
      <header>
        <Typography variant="h1" color="primary" align="center">
          Game of Life
        </Typography>
      </header>
      <Grid container>
        <Grid item xs={12} md={4} className={classes.rulesSection}>
<<<<<<< HEAD
          {/* Game controls */}
        {/* <Grid item className={classes.controlSection}> */}
          <ButtonGroup
            className={classes.controls}
            color="primary"
            variant="contained"
            aria-label="Button for launching rules pop up."
          > 
            <Rules />
          </ButtonGroup>
          <ButtonGroup
            className={classes.controls}
            color="primary"
            variant="contained"
            aria-label="Buttons for controlling game of life"
          >
            <Button variant="outlined" onClick={runOnce} className={classes.button}>Step</Button>
            <Button variant="outlined" onClick={startSimulation} className={classes.button}>Start</Button>
            <Button variant="outlined" onClick={stopSimulation} className={classes.button}>Stop</Button>
            <Button variant="outlined" onClick={reset} className={classes.button}>Reset</Button>
=======
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
            <Button onClick={resetSimulation}>Reset</Button>
          </ButtonGroup>
          <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Buttons for setting starting point with preset squares">
            <Button onClick={setPreset}>Preset 1</Button>
>>>>>>> 886ebe1e98bf597756a2b31eb13cc52a3c6eb24e
          </ButtonGroup>
          <ButtonGroup
            className={classes.controls}
            color="primary"
            variant="contained"
            aria-label="Buttons for setting starting point with preset squares"
          >
            <Button variant="outlined" onClick={preset1} className={classes.button}>Preset 1</Button>
            <Button variant="outlined" onClick={preset2} className={classes.button}>Preset 2</Button>
            <Button variant="outlined" onClick={presetL} className={classes.button}>Preset "L"</Button>
          </ButtonGroup>
            <ButtonGroup
              className={classes.controls}
              color="primary"
              variant="contained"
              aria-label="Buttons for setting starting point with preset squares">
                <Button variant="outlined" onClick={random} className={classes.button}>Random</Button>
              
            </ButtonGroup>
        </Grid>
        {/* </Grid> */}
        <Grid item md={1} />
        <Grid item xs={12} md={5} className={classes.board}>
          <Typography color="primary">Generation: {gen} </Typography>
          <Board
            squares={squares}
            setSquares={setSquares}
            toggleSquare={toggleSquare}
            handleMouseMove={handleMouseMove}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;
