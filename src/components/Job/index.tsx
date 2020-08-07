import React from 'react';
import { Grid, Typography } from '@material-ui/core';

interface Props {
  title: string;
  isFeautured: boolean;
}

const JobITem: React.FC<Props> = ({ title }) => {
  return (
    <Grid container direction="row" spacing={2}>
      <Typography variant="h3">{title}</Typography>
    </Grid>
  )
}

export default JobITem;
