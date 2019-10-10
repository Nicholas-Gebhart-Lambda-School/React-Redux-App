import React from 'react';
import brewery from './brewery.module.scss';

export default ({ brew }) => {
  const { name, street, city, state, country, phone, website_url } = brew;

  return (
    <div className={brewery.container}>
      <h2>
        <a href={website_url} target="_blank" rel="noopener noreferrer">
          {name}
        </a>
      </h2>
      <p>
        {street}, {city}, {state}
      </p>
      <p>{country}</p>
      <p>{phone}</p>
    </div>
  );
};
