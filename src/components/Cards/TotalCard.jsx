import { Grid, Paper, Typography } from '@mui/material';
import React from 'react';

const TotalCard = ({ title, total }) => {
  return (
    <Grid item component={Paper} elevation={4} sx={{ p: 2, m: 2 }}>
      <Typography variant="h3" align="center">
        {title}
      </Typography>
      <Typography variant="h4" align="center">
        {total}
      </Typography>
    </Grid>
  );
};

export default TotalCard;
