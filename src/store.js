import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import {
  ADD_ALBUM,
  ADD_SINGER,
  ADD_SONG,
  REMOVE_ALBUM,
  REMOVE_SINGER,
  REMOVE_SONG
} from './actions/types';

const singers = (state = [], action) => {
  switch (action.type) {
    case ADD_SINGER:
      return [...state, action.payload];
    case REMOVE_SINGER:
      return state.filter((singer) => singer.name !== action.payload.name);
    default:
      return state;
  }
};

const albums = (state = [], action) => {
  switch (action.type) {
    case ADD_ALBUM:
      return [...state, ...action.payload];
    case REMOVE_ALBUM:
      return state.filter((album) => !action.payload.includes(album.title));
    default:
      return state;
  }
};

const songs = (state = [], action) => {
  switch (action.type) {
    case ADD_SONG:
      return [...state, ...action.payload];
    case REMOVE_SONG:
      return state.filter((song) => !action.payload.includes(song.title));
    default:
      return state;
  }
};

const composeEnhancers =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({ singers, albums, songs });
export default createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));
