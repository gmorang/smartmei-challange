import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core';

// import { Container } from './styles';

const Header: React.FC = () => {
  const useStyles = makeStyles({
    toolbar: { display: 'flex', justifyContent: 'space-between' },
    text: { fontWeight: 'bold', textTransform: 'uppercase' },
    link: { textDecoration: 'none', }
  });

  const classes = useStyles();

  return (
    <MuiAppBar position="fixed">
      <Toolbar className={classes.toolbar}>
        <Link className={classes.link} to="/">
          <Typography className={classes.text} color="secondary" variant="h6">Jobs</Typography>
        </Link>
      </Toolbar>
    </MuiAppBar>
  );
}

export default Header;
