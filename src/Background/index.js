import React from 'react';
import sunset from './sunset.jpg'; // https://pixabay.com/en/sunset-lake-sky-abendstimmung-2153745/

import './style.scss';

const Background = () => (
  <div className="Background">
    <img src={sunset} />
  </div>
);

export default Background;
