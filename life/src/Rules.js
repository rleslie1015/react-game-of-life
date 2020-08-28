import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useStyles } from './appStyles';
import { useTheme } from '@material-ui/core/styles';

export default function Rules() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  const classes = useStyles();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    
  };

  return (
    <div>
      <Button color="primary" onClick={handleClickOpen}>
        Details
      </Button>
      <Dialog
        // className={classes.popUp}
        PaperProps={{
          style: {
            backgroundColor: '#282c34',
            color: "#d96878",
            textAlign: 'center'
          }
        }}
        // fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="Rules"
      >
        <DialogTitle id="Rules">{'Game of Life Rules'}</DialogTitle>
        <DialogContent>
          <DialogContentText >
            <div className={classes.rules}>
                  <p>
                    Every square that is populated represents a live cell. <br/>
                     The rules for <strong>live</strong> cells are:
                  </p>  
                <ul>
                    <li>
                      Each cell with one or no neighbors
                    dies, as if by solitude.
                    </li>
                    <li>
                    Each cell with four or more neighbors dies, as if by overpopulation.
                    </li>
                    <li>
                      Each cell with two or three neighbors survives.</li>
                </ul>
                    <p>
                    The empty or unpopulated{" "} squares represent dead cells. <br/>
          
              
                     The rules for <strong>dead</strong> cells are:
                    </p>
                <ul> 
                    <li>
                      Each cell with three neighbors becomes populated.
                    </li>
                </ul>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          
          <Button  onClick={handleClose} >
            <a className={classes.wikiLink} href="https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life">
              Learn More
              </a>
          </Button>
          
          <Button onClick={handleClose} autoFocus color="secondary" className={classes.wikiLInk}>
           OK
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
