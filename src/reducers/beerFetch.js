import beerState from './state';
import { START_FETCHING, FETCH_SUCCESS, FETCH_ERROR } from '../actions';

export default (state = beerState, action) => {
  switch (action.type) {
    case START_FETCHING:
      console.log('fetching');
      return {
        ...state,
        isLoading: true,
        error: ''
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        beer: action.payload
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    default:
      return state;
  }
};
