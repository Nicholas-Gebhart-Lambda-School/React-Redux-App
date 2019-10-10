import axios from 'axios';
import { START_FETCHING, FETCH_SUCCESS, FETCH_ERROR } from './action.types';

export const fetchBeer = () => dispatch => {
  dispatch({ type: START_FETCHING });
  axios.get('https://api.openbrewerydb.org/breweries').then(res => {
    console.log(res);
    dispatch({ type: FETCH_SUCCESS, payload: res.data }).catch(err => {
      dispatch({ type: FETCH_ERROR, payload: err });
    });
  });
};
