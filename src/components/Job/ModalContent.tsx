import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';
import { Form } from '@unform/web';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { formatDistance } from 'date-fns';
import FormTextField from '../Form/TextField';

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

interface Props {
  locationNames: string;
  postedAt: Date;
  description: string;
}

const ModalContent: React.FC<Props> = ({ locationNames, postedAt, description }) => {
  const classes = useStyles();
  const postDate = new Date(postedAt);

  return (
    <Grid item>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <QueryBuilderIcon color="disabled" fontSize="small" />
            </Grid>

            <Grid item>
              <Typography className={classes.time} variant="body1">{formatDistance(postDate, new Date())}</Typography>
            </Grid>
          </Grid>
        </Grid>

        {locationNames && (
          <Grid item>
            <Grid container direction="row" spacing={1}>
              <Grid item>
                <LocationOnIcon color="disabled" fontSize="small" />
              </Grid>

              <Grid item>
                <Typography className={classes.time} variant="body1">{locationNames}</Typography>
              </Grid>
            </Grid>
          </Grid>
        )}

        <ReactMarkdown source={description} className={classes.description} />

        <Grid item xs={12} sm={12} lg={12}>
          <Typography variant="h6">Apply now!</Typography>
        </Grid>

        <Form onSubmit={(formData) => console.log(formData)}>
          <Grid container direction="row" spacing={2}>
            <Grid item>
              <FormTextField name="name" placeholder="name" />
            </Grid>

            <Grid item>
              <FormTextField name="email" placeholder="email" type="email" />
            </Grid>
          </Grid>
        </Form>
      </Grid>
    </Grid>
  );
}
export default ModalContent;
