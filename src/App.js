import React from 'react';
import { Route, BrowserRouter } from 'react-router-dom';

import BreweryContainer from './containers/BreweryContainer';
import Navigation from './components/navigation/Navigation';

import layout from './layout.module.scss';

export default () => {
  return (
    <BrowserRouter>
      <div className={layout.container}>
        <div className={layout.container}>
          <Route exact path="/" component={Navigation} />
          <BreweryContainer />
        </div>
        {/* Footer */}
      </div>
    </BrowserRouter>
  );
};
