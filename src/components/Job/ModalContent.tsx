import React from 'react';
import { Grid, Typography, makeStyles } from '@material-ui/core';
import ReactMarkdown from 'react-markdown';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { formatDistance } from 'date-fns';

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
      </Grid>
    </Grid>
  );
}
export default ModalContent;
