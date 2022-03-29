import { Grid, Box } from '@mui/material';
import React, { forwardRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addSinger, removeSinger } from '../../actions/singers';
import SingerCard from '../Cards/SingerCard';

import singers from '../../data.json';

const Singers = () => {
  const selectedSingers = useSelector((state) => state.singers);
  const songsCount = selectedSingers.reduce(
    (acc, singer) => acc + singer.albums.reduce((acc, album) => acc + album.songs.length, 0),
    0
  );
  console.log('🚀 ~ file: App.jsx ~ line 29 ~ App ~ songsCount', songsCount);
  const dispatch = useDispatch();

  const isSelectedSinger = (singer) => !!selectedSingers.find((s) => s.name === singer.name);
  const handleClickSinger = (singer) => {
    if (isSelectedSinger(singer)) return dispatch(removeSinger(singer, dispatch));
    return dispatch(addSinger(singer, dispatch));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {singers.map((singer, index) => (
          <Grid item key={index}>
            <SingerCard
              singerName={singer.name}
              onClick={() => handleClickSinger(singer)}
              selected={isSelectedSinger(singer)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default forwardRef(Singers);
