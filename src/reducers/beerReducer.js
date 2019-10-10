import beerState from './state';

export default (state = beerState, actions) => {
  switch (actions.type) {
    default:
      return state;
  }
};
