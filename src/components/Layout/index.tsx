import React from 'react';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';

import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import Header from '../Header';

interface Props {
  component: any;
}
const Layout: React.FC<Props> = ({ component: Component, ...restProps }) => {
  const theme = createMuiTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 770,
        md: 960,
        lg: 1280,
        xl: 1920,
      },
    },

    palette: {
      primary: { main: '#00c873' },
      secondary: { main: '#fff' },
      error: { main: red[500] },

    },
    typography: {
      fontFamily: 'Roboto, san-serif',
    },
    shape: { borderRadius: 0 },
    overrides: {
      MuiAppBar: {
        positionFixed: { height: '64px' },
      },
      MuiToolbar: {
        root: { height: '64px' },
      },
      MuiButton: {
        root: { textTransform: 'none', borderRadius: 100 },
        containedPrimary: { color: '#fff', fontWeight: 'bold' },
        label: {
          whiteSpace: 'nowrap',
          overflow: 'ellipsis',
        },
      },
      MuiChip: {
        root: {
          backgroundColor: grey[100],
          color: grey[600],
        },
        avatar: {
          backgroundColor: grey[100],
          paddingLeft: '3px',
          color: grey[600],
        },
        label: {
          paddingTop: '3px',
          paddingLeft: '4px',
        },
      },
    },
  });

  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <div style={{ marginTop: 80 }}>
        <Component {...restProps} />
      </div>
    </MuiThemeProvider>
  );
}

export default Layout;
