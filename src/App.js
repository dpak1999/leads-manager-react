/** @format */

import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import { memo } from 'react';

function App() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography>Leads Manager</Typography>
        </Toolbar>
      </AppBar>
      <Toolbar />
      <h1>Hello world</h1>
      <Button variant="contained" color="primary">
        Test button
      </Button>
      <Typography color="warning.main">Test typography</Typography>
    </>
  );
}

export default memo(App);
