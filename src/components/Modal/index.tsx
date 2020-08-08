import React from 'react';

import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';

import { DialogTitle, makeStyles, DialogActions, Button } from '@material-ui/core';

interface Props {
  title?: string;
  isVisible: boolean;
  toggle: any;
  onSubmit?: any;
  buttonPrimary?: string;
  buttonSecondary?: string;
};

const useStyles = makeStyles({
  modal: {
    borderRadius: 4,
    border: '1px solid #e1e1e1'
  },
  titleContainer: {
    alignItems: 'center',
    borderBottom: '2px solid #ddd',
    height: 40,

    '& h2': {
      color: '#a3a3a3',
      fontSize: 12,
      fontWeight: 600,
      marginTop: -5
    },

    '& button': {
      float: 'right',
      marginTop: -5
    },

    actions: {
      display: 'flex',
      flex: 1,
      justifyContent: 'center',
    },
  }
});

const Modal: React.FC<Props> = ({
  title,
  isVisible,
  toggle,
  onSubmit,
  buttonPrimary,
  buttonSecondary,
  children
}) => {
  const classes = useStyles();

  return (
    <Dialog PaperProps={{ className: classes.modal }} fullWidth maxWidth="sm" open={isVisible} onClose={toggle}>
      {title && <DialogTitle>{title}</DialogTitle>}
      <DialogContent>
        {children}
      </DialogContent>

      <DialogActions>
        <Button onClick={toggle} variant="outlined" color="primary">{buttonSecondary}</Button>

        <Button onClick={onSubmit} variant="contained" color="primary">{buttonPrimary}</Button>
      </DialogActions>
    </Dialog>
  );
}

export default Modal;
