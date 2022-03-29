import { addSongs, removeSongs } from './songs';
import { ADD_ALBUM, REMOVE_ALBUM } from './types';

/**
 * This function takes in an array of albums and dispatches an action to add the albums to the store
 * @param albums - The albums to add to the store.
 */
export const addAlbums = (albums) => (dispatch) => {
  dispatch({
    payload: albums,
    type: ADD_ALBUM
  });
  dispatch(addSongs(albums.reduce((acc, album) => [...acc, ...album.songs], [])));
};

/**
 * This function will remove the albums from the store
 * @param albumsTitle - The title of the albums to be removed.
 */
export const removeAlbums = (albumsTitle) => (dispatch, getState) => {
  const { albums } = getState();
  const albumsSongsTitle = albumsTitle
    .map((title) => albums.find((album) => album.title === title).songs)
    .flat()
    .map((song) => song.title);
  console.log(albumsSongsTitle);
  dispatch({
    payload: albumsTitle,
    type: REMOVE_ALBUM
  });

  dispatch(removeSongs(albumsSongsTitle));
};
