import React from 'react';
import { Grid, Typography, makeStyles, CircularProgress } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { formatDistance } from 'date-fns';
import FormTextField from '../Form/TextField';
import { useQuery } from '@apollo/client';
import { Job } from '../../@types';
import { GET_JOB } from '../../schemas/jobs';

interface Props {
  jobSlug: string;
  companySlug: string;
}

interface Data {
  job: Job;
}

const useStyles = makeStyles({
  time: {
    fontSize: 12,
    color: '#a3a3a3'
  },

  description: {
    fontFamily: 'Roboto, san-serif',
    fontSize: 12,
    color: '#333',
  }
});

const ModalContent: React.FC<Props> = ({ companySlug, jobSlug }) => {
  const classes = useStyles();
  const { loading, error, data } = useQuery<Data>(GET_JOB, { variables: { jobSlug, companySlug } });

  function formatDate(postedAt: any) {
    if (!postedAt) return null;

    const postDate = new Date(postedAt || '');

    return formatDistance(postDate, Date.now())
  }

  return loading ? <CircularProgress color="primary" size={50} /> : (
    <Grid item>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <QueryBuilderIcon color="disabled" fontSize="small" />
            </Grid>

            <Grid item>
              <Typography className={classes.time} variant="body1">{formatDate(data?.job?.postedAt)}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {data?.job.locationNames && (
          <Grid item>
            <Grid container direction="row" spacing={1}>
              <Grid item>
                <LocationOnIcon color="disabled" fontSize="small" />
              </Grid>

              <Grid item>
                <Typography className={classes.time} variant="body1">{data.job.locationNames}</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}

        <ReactMarkdown source={data?.job.description} className={classes.description} />

        <Grid item xs={12} sm={12} lg={12}>
          <Typography variant="h6">Apply now!</Typography>
        </Grid>

        <Grid container direction="row" spacing={2}>
          <Grid item>
            <FormTextField name="name" placeholder="name" />
          </Grid>

          <Grid item>
            <FormTextField name="email" placeholder="email" type="email" />
          </Grid>
        </Grid>
        {error && <Typography>{error}</Typography>}
      </Grid>
    </Grid>
  );
}
export default ModalContent;
