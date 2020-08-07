import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

interface Props {
  title: string;
  isFeautured: boolean;
  description: string;
}

const useStyles = makeStyles({
  container: {
    border: '1px solid #e1e1e1',
    marginBottom: 16,
  }
});

const JobITem: React.FC<Props> = ({ title, description }) => {
  const classes = useStyles();

  return (
    <Grid className={classes.container} container direction="row" justify="center" spacing={2}>
      <Typography variant="h3">{title}</Typography>
      <ReactMarkdown source={description} />
    </Grid>
  )
}

export default JobITem;
