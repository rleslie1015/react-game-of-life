import React from 'react';
//material ui
import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    container: {
        width: 500,
    },
    gridSquare: {
        width: 20,
        height: 20,
        boxSizing:'border-box',
        border: '1px solid grey',
    }
})
const Board = ({squares}) => {
    const classes = useStyles();
    
    
    const toggleSquare = () => {

    }
    return (
        <Grid container className={classes.container}>
            {
                squares.map((row)=> 
                    squares.map(column => <Grid item 
                                                row={row} 
                                                column={column} 
                                                className={classes.gridSquare} 
                                                onClick={toggleSquare}
                                                />))
            }
        </Grid>
    )
}

export default Board;