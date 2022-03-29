import { Grid, Box } from '@mui/material';
import React, { forwardRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addAlbums, removeAlbums } from '../../actions/albums';
import SingerCard from '../Cards/SingerCard';

const Albums = () => {
  const dispatch = useDispatch();
  const { albums: selectedAlbums, singers } = useSelector((state) => state);
  const availableAlbums = singers.map((singer) => singer.albums).flat();

  const isSelectedAlbum = (album) =>
    !!selectedAlbums.find((_album) => _album.title === album.title);

  const handleClickAlbum = (album) => {
    if (isSelectedAlbum(album)) return dispatch(removeAlbums([album.title]));
    return dispatch(addAlbums([album]));
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {availableAlbums.map((album, index) => (
          <Grid item key={index}>
            <SingerCard
              singerName={album.title}
              onClick={() => handleClickAlbum(album)}
              selected={isSelectedAlbum(album)}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default forwardRef(Albums);
