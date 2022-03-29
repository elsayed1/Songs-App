import { Button, Checkbox, Grid, Typography } from '@mui/material';
import React from 'react';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const SingerCard = ({ singerName, onClick, selected }) => {
  return (
    <Button onClick={() => onClick(singerName)} variant="contained" sx={{ pr: 8, boxShadow: 5 }}>
      <Grid container direction="column" alignItems="flex-start" spacing={3}>
        <Grid item>
          <Checkbox
            size="large"
            color="secondary"
            checked={selected}
            icon={<RadioButtonUncheckedIcon />}
            checkedIcon={<CheckCircleIcon />}
          />
        </Grid>
        <Grid item>
          <Typography variant="h6">{singerName} </Typography>
        </Grid>
      </Grid>
    </Button>
  );
};

export default SingerCard;
