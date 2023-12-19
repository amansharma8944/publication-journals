import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { useEffect } from 'react';
import "./cookies.css"

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function AlertDialogSlide() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setOpen(true);
    }, 5000);
  }, []);

  return (
    <React.Fragment>
      <div className="dialog-container">
        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              YOU HAVE TO ACCEPT COOKIES PLEASE
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>REJECT</Button>
            <Button onClick={handleClose}>ACCEPT</Button>
          </DialogActions>
        </Dialog>
      </div>
    </React.Fragment>
  );
}
