import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { 
    Button,
    TextField,
    Grid, 
    Dialog, 
    DialogActions, 
    DialogContent, 
    DialogContentText, 
    DialogTitle } 
from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
}));

function FormDialog() {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);
  
    function handleClickOpen() {
      setOpen(true);
    }
  
    function handleClose() {
      setOpen(false);
    }
  
    return (
      <div>
        <div className={classes.heroButtons}>
            <Grid container spacing={2} justify="center">
            <Grid item>
                <Button variant="outlined" color="primary" onClick={handleClickOpen}>
                    Add Job
                </Button>
            </Grid>
            </Grid>
        </div>

        <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
          <DialogTitle id="form-dialog-title">Add Job</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Add the details of the job that you applied for!
            </DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="Job Title"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              id="company"
              label="Company"
              type="name"
              fullWidth
            />
            <TextField
              margin="dense"
              id="link"
              label="Link"
              type="name"
              fullWidth
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={handleClose} color="primary">
              Add
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
  
  export default FormDialog;