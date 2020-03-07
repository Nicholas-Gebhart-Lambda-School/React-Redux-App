import React from 'react';
import { Link } from 'react-router-dom';

import navigation from './navigation.module.scss';

export default () => (
  <nav>
    <h2 className={navigation.title}>Every Beer</h2>
    <div>
      <Link to="/" className={navigation.link}>
        Home
      </Link>
      <a
        className={navigation.link}
        href="https://www.openbrewerydb.org/#documentation"
      >
        API
      </a>
      <a className={navigation.link} href="http://www.github.com/gebhartn">
        GitHub
      </a>
    </div>
  </nav>
);
