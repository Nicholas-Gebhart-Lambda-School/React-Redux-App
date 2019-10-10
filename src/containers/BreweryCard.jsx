import React, { useEffect } from 'react';
import { fetchBeer } from '../actions';
import { connect } from 'react-redux';

import Brewery from '../components/Brewery';

const mapStateToProps = state => {
  return {
    isLoading: state.isLoading,
    beer: state.beer,
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { fetchBeer }
)(({ fetchBeer, error, beer }) => {
  useEffect(() => {
    fetchBeer();
  }, [fetchBeer]);

  return (
    <div>
      <h1>Brewery</h1>
      {error && <p>{error}</p>}
      {beer &&
        beer.map(brew => {
          return <Brewery brew={brew} />;
        })}
    </div>
  );
});
