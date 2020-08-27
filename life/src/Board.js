import React from "react";
//material ui
import { Grid } from "@material-ui/core";
import { useStyles } from "./appStyles";

const Board = ({ squares, setSquares, handleMouseMove }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      { // outter map loops through the rows // inner map loops through the columns 
      squares.map((rows, i) =>
        rows.map((column, j) => (
          <div
             onMouseEnter={(e)=>{
              if (e.shiftKey) {
                handleMouseMove(i, j)
              }
            }}
            key={`${i}-${j}`}
            className={classes.gridSquare}
            // the nested array gets updated in the onClick function for each square and updates state with setSquares()
            onClick={() => {

              squares[i][j] == 0 
              ? 
              squares[i].splice([j], 1, 1) // delete the value of squares[i][k] (0) and replace with 1
              : 
              squares[i].splice([j], 1, 0) // delete the value of squares[i][k] (0) and replace with 0
              
              setSquares([...squares]); // update state 
     
            }}
            // set the background color of the square depending on the value 
            style={{
              backgroundColor: squares[i][j] == 0 ? null : "rgba(255, 105, 135, .3)",
            }}
          />
        ))
      )}
    </Grid>
  );
};

export default Board;
