import React, { useEffect } from "react";
//material ui
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    maxWidth: 500,
  },
  gridSquare: {
    width: 20,
    height: 20,
    boxSizing: "border-box",
    border: "1px solid grey",
  },
});
const Board = ({ squares, setSquares, handleMouseMove }) => {
  const classes = useStyles();



  return (
    <Grid container className={classes.container}>
      { // outter map loops through the rows 
        // inner map loops through the columns 
        //this creates the grid
      squares.map((rows, i) =>
        rows.map((column, j) => (
          <div
            onMouseEnter={handleMouseMove}
            item
            key={`${i}-${j}`}
            row={i}
            column={j}
            className={classes.gridSquare}
            // the nested array gets updated in the onClick function for each square and updates state with setSquares()
            onClick={() => {
                // console.log(i,j)
                // to toggle a square we target it like --> squares[i][k]
                // the splice method gets called on the array `squares[i]` EX: squares[0] is the complete first row
                // the first param [k] points to index [k] on that row. 
                // the second is the number of elements(squares) we want to replace/delete 
                // the last is the value we want at that square 
            
              squares[i][j] == 0 
              ? 
              squares[i].splice([j], 1, 1) // delete the value of squares[i][k] (0) and replace with 1
              : 
              squares[i].splice([j], 1, 0) // delete the value of squares[i][k] (0) and replace with 0
              
              setSquares([...squares]); // update state 
     
            }}
            // set the background color of the square depending on the value 
            style={{
              backgroundColor: squares[i][j] == 0 ? null : "red",
            }}
          />
        ))
      )}
    </Grid>
  );
};

export default Board;
