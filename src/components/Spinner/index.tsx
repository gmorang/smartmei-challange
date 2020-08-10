import React from 'react';
import { Grid, makeStyles, CircularProgress } from '@material-ui/core';

const useStyles = makeStyles({
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
})

const Spinner: React.FC = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.container}>
      <CircularProgress color="primary" />
    </Grid>
  );
}

export default Spinner;
