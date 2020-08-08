import React from 'react';

import { Grid, Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import QueryBuilderIcon from '@material-ui/icons/QueryBuilder';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import { formatDistance } from 'date-fns';
import { Form } from '@unform/web';

import Tag from '../Tag';
import Modal from '../Modal';
import ModalContent from './ModalContent';

interface Props {
  title: string;
  isFeautured: boolean;
  description: string;
  slug: string;
  postedAt: Date;
  locationNames: string;
}

const useStyles = makeStyles({
  container: {
    marginBottom: 24,
    borderRadius: '4px',
    boxShadow: '-2px 2px 6px 4px #f1f1f1',
    padding: 16
  },

  title: {
    fontWeight: 'bold',
    fontSize: 18,
  },

  time: {
    fontSize: 12,
    color: '#a3a3a3'
  },

  descriptionContainer: {
    margin: '16px 0',

    '& > .text': {
      fontSize: 12,
      color: '#a3a3a3'
    }
  }
});

const JobITem: React.FC<Props> = ({ title, description, slug, postedAt, locationNames }) => {
  const [isVisible, setVisible] = React.useState(false);
  const classes = useStyles();
  const tags = slug.split('-');
  const postDate = new Date(postedAt);

  return (
    <Grid className={classes.container} item xs={12} sm={12} lg={12}>
      <Grid container direction="row" spacing={2}>
        <Grid item>
          <Typography className={classes.title} variant="h3" color="primary">{title}</Typography>
        </Grid>

        <Grid item xs={12} sm={3} lg={3}>
          <Grid container direction="row" spacing={1}>
            <Grid item>
              <QueryBuilderIcon color="disabled" fontSize="small" />
            </Grid>

            <Grid item>
              <Typography className={classes.time} variant="body1">{formatDistance(postDate, new Date())}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      {locationNames && (
        <Grid item xs={12} sm={3} lg={3}>
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

      {/**Maybe change to another description (without markdown) */}
      <Grid item className={classes.descriptionContainer}>
        <Typography className="text" variant="body1">{description.substring(0, 600)}...</Typography>
      </Grid>

      <Grid container direction="row" justify="space-between" alignItems="center">
        <Grid item>
          <Button onClick={() => setVisible(true)} variant="contained" color="primary" type="button">Apply Now!</Button>
        </Grid>

        <Grid item>
          <Grid container direction="row" spacing={2}>
            {tags && tags.map(item => <Tag tag={item} />)}
          </Grid>
        </Grid>
      </Grid>

      <Modal
        isVisible={isVisible}
        toggle={() => setVisible(!isVisible)}
        buttonPrimary="Apply"
        buttonSecondary="Cancel"
        title={title}
      >
        <Form onSubmit={(formData) => console.log(formData)}>
          <ModalContent locationNames={locationNames} postedAt={postedAt} description={description} />
        </Form>
      </Modal>
    </Grid>
  )
}

export default JobITem;
