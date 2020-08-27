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
            color: "maroon"
          }
        }}
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">{'Game of Life'}</DialogTitle>
        <DialogContent>
          <DialogContentText>
            <div className="body">
                <h4>Rules</h4>
                <ul>
                    <li>
                    For a space that is populated: Each cell with one or no neighbors
                    dies, as if by solitude.
                    </li>

                    <li>
                    Each cell with four or more neighbors dies, as if by overpopulation.
                    </li>

                    <li>Each cell with two or three neighbors survives.</li>

                    <li>
                    For a space that is empty or unpopulated:{" "}
                    <i>Each cell with three neighbors becomes populated.</i>
                    </li>
                </ul>
            </div>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose} color="primary">
            Ok
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Learn More
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
