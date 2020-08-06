import React from 'react';

import MuiAppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import logo from '../../assets/logo.png';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <MuiAppBar position="fixed">
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/">
          <img style={{ maxWidth: 135 }} src={logo} alt="logo" />
        </Link>
      </Toolbar>
    </MuiAppBar>
  );
}

export default Header;
