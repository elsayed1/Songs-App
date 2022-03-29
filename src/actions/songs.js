import { ADD_SONG, REMOVE_SONG } from './types';

export const addSongs = (songs) => (dispatch) => {
  dispatch({
    payload: songs,
    type: ADD_SONG
  });
};

export const removeSongs = (songsTitle) => (dispatch) => {
  dispatch({
    payload: songsTitle,
    type: REMOVE_SONG
  });
};
