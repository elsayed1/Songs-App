import React, { useMemo } from 'react';
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Typography,
  Grid
} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { addSongs, removeSongs } from '../../actions/songs';

const SongsList = ({ album }) => {
  const dispatch = useDispatch();

  const { songs: selectedSongs } = useSelector((state) => state);

  const selectedSongsTitle = useMemo(
    () => selectedSongs.map((song) => song.title),
    [selectedSongs]
  );

  const isSelectedSong = (songTitle) => selectedSongsTitle.includes(songTitle);
  const handleToggle = (songTitle) => () => {
    if (isSelectedSong(songTitle)) return dispatch(removeSongs([songTitle]));
    return dispatch(addSongs([album.songs.find((song) => song.title === songTitle)]));
  };

  return (
    <List sx={{ width: '100%', bgcolor: '#B4C5E4', p: 2, borderRadius: 5 }}>
      <Typography variant="h5">{album.title}</Typography>
      {album.songs.map((song) => {
        const labelId = `checkbox-list-label-${song.title}`;

        return (
          <ListItem key={song.title} disablePadding>
            <ListItemButton role={undefined} onClick={handleToggle(song.title)} dense>
              <ListItemIcon>
                <Checkbox
                  edge="start"
                  checked={isSelectedSong(song.title)}
                  tabIndex={-1}
                  disableRipple
                  inputProps={{ 'aria-labelledby': labelId }}
                />
              </ListItemIcon>
              <ListItemText id={labelId} primary={song.title} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
};

const Songs = () => {
  const { albums } = useSelector((state) => state);

  return (
    <Box>
      <Grid container direction="column" spacing={3}>
        {albums.map((album) => (
          <Grid item key={album.title} xs={12}>
            <SongsList album={album} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Songs;
