import { Box, Grid } from '@mui/material';
import { useSelector } from 'react-redux';
import TotalCard from '../Cards/TotalCard';

import { SONG_COST } from '../../constants';
import formatCurrency from '../../helpers/formatCurrency';

const Summary = () => {
  const songs = useSelector((state) => state.songs);

  return (
    <Box>
      <Grid container direction="column">
        <TotalCard title="Count" total={songs.length} />
        <TotalCard title="Amount" total={formatCurrency(songs.length * SONG_COST)} />
      </Grid>
    </Box>
  );
};

export default Summary;
