import { addAlbums, removeAlbums } from './albums';
import { ADD_SINGER, REMOVE_SINGER } from './types';

export const addSinger = (singer) => (dispatch) => {
  dispatch({
    payload: singer,
    type: ADD_SINGER
  });
  dispatch(addAlbums(singer.albums));
};

export const removeSinger = (singer) => (dispatch) => {
  dispatch(removeAlbums(singer.albums.map((album) => album.title)));
  dispatch({
    payload: singer,
    type: REMOVE_SINGER
  });
};
