import React, {useEffect} from 'react';
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
const Board = ({squares, setSquares }) => {
    const classes = useStyles();
    

    useEffect(() => {

    }, [squares])

    return (
        <Grid container className={classes.container}>
            {
                squares.map((rows, i)=> 
                    rows.map((column, k) => <Grid item
                                                key={`${i}-${k}`}
                                                row={i} 
                                                column={k} 
                                                className={classes.gridSquare} 
                                                onClick={(event) => {
                    
                                                    const updated = squares[i].splice([k], 1, 1)
                                                    setSquares([...squares])
                                                    // console.log('up', updated)
                                                    // setSquares()
                                                    // setSquares([ ...squares, squares[i][k] = 1 ] )
                                                    // squares[i][k] = 1
                                                }}
                                                style={{
                                                    backgroundColor: squares[i][k] == 0 ? null : 'red'
                                                }}
                                                />))
            }
        </Grid>
    )
}

export default Board;