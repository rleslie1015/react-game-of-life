import React from "react";
import Rules from "./Rules";
import { useStyles } from "./appStyles";

// material ui
import { Button, ButtonGroup } from "@material-ui/core";

//icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import RefreshIcon from "@material-ui/icons/Refresh";

const GameControls = ({
  runOnce,
  isRunning,
  startSimulation,
  stopSimulation,
  reset,
  preset1,
  preset2,
  presetL,
  random,
}) => {
  const classes = useStyles();
  return (
    <>
      <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="main controls" >
        <Button variant="outlined" onClick={startSimulation} className={classes.button} >
         { isRunning ? <PlayArrowIcon className={classes.playingState} /> : <PlayArrowIcon />}
        </Button>
  
        <Button variant="outlined" onClick={runOnce} className={classes.button}>
          <SkipNextIcon />
        </Button>
    
        <Button variant="outlined" onClick={stopSimulation}  className={classes.button}>
          <PauseIcon />
        </Button>
      
        <Button variant="outlined" onClick={reset} className={classes.button}>
          <RefreshIcon />
        </Button>
      </ButtonGroup>
     
      <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Rules and Info" >
        <Rules />
      </ButtonGroup>
      
      <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Preset Buttons" >
        <Button variant="outlined" onClick={preset1} className={classes.button}>
          Preset 1
        </Button>
        <Button variant="outlined" onClick={preset2} className={classes.button}>
          Preset 2
        </Button>
        <Button variant="outlined" onClick={presetL} className={classes.button}>
          Preset "L"
        </Button>
      </ButtonGroup>
      
      <ButtonGroup className={classes.controls} color="primary" variant="contained" aria-label="Set Randomly" >
        <Button variant="outlined" onClick={random} className={classes.button}>
          Random
        </Button>
      </ButtonGroup>
    </>
  );
};

export default GameControls;
