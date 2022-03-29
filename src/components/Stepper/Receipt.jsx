import { Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { useSelector } from 'react-redux';
import { SONG_COST } from '../../constants';

import formatCurrency from '../../helpers/formatCurrency';

const UserData = ({ label, value }) => {
  return (
    <Grid container item alignItems="center" spacing={2}>
      <Grid item xs={3}>
        <Typography variant="body1">
          {label.split('').at(0).toUpperCase()}
          {label.slice(1)}
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="body1">: {value}</Typography>
      </Grid>
    </Grid>
  );
};
const Receipt = ({ userData }) => {
  const { songs } = useSelector((state) => state);
  console.log(userData);
  return (
    <Box>
      <Typography sx={{ my: 2 }} align="center" variant="h3">
        Congratulations!!🎉
      </Typography>
      <Grid container direction="column" spacing={2}>
        <Grid item>
          <Typography variant="h5">Number of songs : {songs.length} </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5">Credit : {formatCurrency(songs.length * SONG_COST)} </Typography>
        </Grid>
      </Grid>
      <Grid container spacing={1} sx={{ mt: 3 }}>
        {Object.entries(userData).map(([key, value]) => (
          <UserData key={key} label={key} value={value} />
        ))}
      </Grid>
    </Box>
  );
};

export default Receipt;
