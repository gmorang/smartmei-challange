import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';

interface Props {
  tag: string;
}

const useStyles = makeStyles({
  container: {
    padding: 8,
    borderRadius: 4,
    background: '#a3a3a3',
    margin: '0 4px',
  },

  text: {
    fontSize: 8,
    color: '#fff',
  }
});

const Tag: React.FC<Props> = ({ tag }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container}>
      <Typography className={classes.text} variant="body1">{tag}</Typography>
    </Grid>
  )
}

export default Tag;
