import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/index.scss';

import image1 from 'assets/images/image-1.jpg';
import image2 from 'assets/images/image-2.jpg';
import image3 from 'assets/images/image-3.jpg';

import Slider from './components/Slider';

ReactDOM.render(
  <div className="container">
    <Slider images={[image1, image2, image3, image2, image1, image3 ]}/>
  </div>,
  document.getElementById('root')
);
